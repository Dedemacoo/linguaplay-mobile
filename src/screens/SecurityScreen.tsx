import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useThemeColors } from '../theme/colors';
import * as Haptics from 'expo-haptics';
// @ts-ignore
import { Feather } from '@expo/vector-icons';

const SecurityScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const colors = useThemeColors();

  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const toggleTwoFactor = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (!twoFactorEnabled) {
      Alert.alert(
        "İki Faktörlü Doğrulama", 
        "Telefonunuza gönderilecek SMS kodu ile giriş güvenliğinizi artırabilirsiniz. (Bu özellik yakında aktif olacaktır.)",
        [
          { text: "İptal", style: "cancel" },
          { text: "Aktif Et", onPress: () => setTwoFactorEnabled(true) }
        ]
      );
    } else {
      setTwoFactorEnabled(false);
    }
  };

  const handleLogoutDevice = (deviceName: string) => {
    Alert.alert(
      "Oturumu Kapat",
      `${deviceName} cihazındaki oturumunuz kapatılsın mı?`,
      [
        { text: "İptal", style: "cancel" },
        { text: "Kapat", style: "destructive", onPress: () => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) }
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
                <Text style={[styles.itemDesc, { color: colors.textLight }]}>Hesabınızı SMS ile ekstra korumaya alın.</Text>
              </View>
            </View>
            <Switch 
              value={twoFactorEnabled} 
              onValueChange={toggleTwoFactor} 
              trackColor={{ true: colors.primary }} 
            />
          </View>
        </View>

        {/* Aktif Cihazlar */}
        <Text style={[styles.sectionTitle, { color: colors.textLight }]}>AKTİF CİHAZLAR VE OTURUMLAR</Text>
        <View style={[styles.sectionGroup, { borderColor: colors.border }]}>
          
          {/* Current Device */}
          <View style={[styles.deviceItem, { borderBottomColor: colors.border }]}>
            <View style={styles.deviceInfo}>
              <Feather name="smartphone" size={24} color={colors.primary} />
              <View style={styles.deviceTexts}>
                <Text style={[styles.deviceName, { color: colors.text }]}>iPhone 14 Pro Max</Text>
                <Text style={[styles.deviceDetail, { color: colors.primary }]}>Bu Cihaz • İstanbul, TR</Text>
              </View>
            </View>
            <Text style={{ color: colors.primary, fontSize: 12, fontWeight: 'bold' }}>Aktif</Text>
          </View>

          {/* Another Device */}
          <View style={styles.deviceItem}>
            <View style={styles.deviceInfo}>
              <Feather name="monitor" size={24} color={colors.textLight} />
              <View style={styles.deviceTexts}>
                <Text style={[styles.deviceName, { color: colors.text }]}>MacBook Pro M2</Text>
                <Text style={[styles.deviceDetail, { color: colors.textLight }]}>Web Tarayıcı • Son görülme: 2 saat önce</Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleLogoutDevice('MacBook Pro M2')} style={styles.logoutBtn}>
              <Text style={styles.logoutBtnText}>Çıkış Yap</Text>
            </TouchableOpacity>
          </View>

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
