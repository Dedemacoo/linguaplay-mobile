import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert, ActivityIndicator } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useThemeColors } from '../theme/colors';
import * as Haptics from 'expo-haptics';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';
import { collection, onSnapshot, query, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Session {
  id: string;
  os: string;
  osVersion: string;
  deviceName: string;
  lastSeen: string;
  sessionId: string;
}

const SecurityScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();
  const { toggle2FA } = useAuth();

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@linguaplay_session_id').then(setCurrentSessionId);

    if (!auth.currentUser) return;
    
    // Read user 2FA status
    getDoc(doc(db, 'users', auth.currentUser.uid)).then((d) => {
      if (d.exists()) {
        setTwoFactorEnabled(d.data().is2FAEnabled || false);
      }
    });

    // Listen to sessions
    const q = query(collection(db, 'users', auth.currentUser.uid, 'sessions'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const sessData: Session[] = [];
      snapshot.forEach((docSnap) => {
        sessData.push({ id: docSnap.id, ...docSnap.data() } as Session);
      });
      setSessions(sessData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleToggleTwoFactor = async (value: boolean) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setTwoFactorEnabled(value);
    await toggle2FA(value);
    if (value) {
      Alert.alert('İki Faktörlü Doğrulama', 'E-posta tabanlı 2FA aktif edildi. Artık girişlerde doğrulama kodu istenecek.');
    } else {
      Alert.alert('İki Faktörlü Doğrulama', '2FA devre dışı bırakıldı.');
    }
  };

  const handleLogoutDevice = (sessionId: string, deviceName: string) => {
    Alert.alert(
      "Oturumu Kapat",
      `${deviceName} cihazındaki oturumunuz kapatılsın mı?`,
      [
        { text: "İptal", style: "cancel" },
        { 
          text: "Kapat", 
          style: "destructive", 
          onPress: async () => {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            if (auth.currentUser) {
               await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'sessions', sessionId));
            }
          } 
        }
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { paddingTop: insets.top + 10, borderBottomColor: colors.border }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ fontSize: 28, color: colors.text }}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Hesap ve Güvenlik</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        
        {/* İki Faktörlü Doğrulama */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>GÜVENLİK</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          <View style={[styles.item, { borderBottomColor: colors.border }]}>
            <View style={styles.itemLeft}>
              <Text style={styles.itemIcon}>🛡️</Text>
              <View>
                <Text style={[styles.itemTitle, { color: colors.text }]}>İki Faktörlü Doğrulama</Text>
                <Text style={[styles.itemDesc, { color: colors.textLight }]}>Girişlerde e-posta kodu ile ekstra koruma.</Text>
              </View>
            </View>
            <Switch 
              value={twoFactorEnabled} 
              onValueChange={handleToggleTwoFactor} 
              trackColor={{ true: colors.primary }} 
            />
          </View>
        </View>

        {/* Aktif Cihazlar */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>AKTİF CİHAZLAR VE OTURUMLAR</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          {isLoading ? (
            <ActivityIndicator style={{ padding: 20 }} color={colors.primary} />
          ) : sessions.length === 0 ? (
            <Text style={{ padding: 20, textAlign: 'center', color: colors.textLight }}>Oturum bulunamadı.</Text>
          ) : (
            sessions.map((session, index) => {
              const isCurrent = session.sessionId === currentSessionId;
              const dateObj = new Date(session.lastSeen);
              const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

              return (
                <View key={session.id} style={[styles.deviceItem, index !== sessions.length - 1 && { borderBottomColor: colors.border }]}>
                  <View style={styles.deviceInfo}>
                    <Feather 
                      name={session.os === 'Web' ? 'monitor' : 'smartphone'} 
                      size={24} 
                      color={isCurrent ? colors.primary : colors.textLight} 
                    />
                    <View style={styles.deviceTexts}>
                      <Text style={[styles.deviceName, { color: colors.text }]}>
                        {session.deviceName} {session.osVersion !== 'Unknown Version' ? `(${session.osVersion})` : ''}
                      </Text>
                      <Text style={[styles.deviceDetail, { color: isCurrent ? colors.primary : colors.textLight }]}>
                        {isCurrent ? 'Bu Cihaz' : `Son Görülme: ${dateStr}`}
                      </Text>
                    </View>
                  </View>
                  {isCurrent ? (
                    <Text style={{ color: colors.primary, fontSize: 12, fontWeight: 'bold' }}>Aktif</Text>
                  ) : (
                    <TouchableOpacity onPress={() => handleLogoutDevice(session.id, session.deviceName)} style={styles.logoutBtn}>
                      <Text style={styles.logoutBtnText}>Çıkış Yap</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })
          )}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingBottom: 15, borderBottomWidth: 1 },
  backBtn: { width: 40 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' },
  content: { padding: 20 },
  
  sectionTitle: { fontSize: 13, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold', letterSpacing: 1.5, marginBottom: 10, marginLeft: 5, marginTop: 15 },
  sectionGroup: { borderRadius: 18, borderWidth: 1, overflow: 'hidden', marginBottom: 10 },
  
  item: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 },
  itemLeft: { flexDirection: 'row', alignItems: 'center', flex: 1, paddingRight: 20 },
  itemIcon: { fontSize: 28, marginRight: 15 },
  itemTitle: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  itemDesc: { fontSize: 12, lineHeight: 16 },

  deviceItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, borderBottomWidth: 1 },
  deviceInfo: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  deviceTexts: { marginLeft: 15 },
  deviceName: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  deviceDetail: { fontSize: 12 },
  
  logoutBtn: { backgroundColor: 'rgba(255, 69, 58, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  logoutBtnText: { color: '#FF453A', fontSize: 12, fontWeight: 'bold' },
});

export default SecurityScreen;
