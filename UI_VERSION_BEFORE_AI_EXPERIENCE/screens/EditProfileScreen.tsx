import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions, Alert } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { useProgressStore } from '../store/useProgressStore';
import { useAuth } from '../context/AuthContext';
import { db } from '../config/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const { width } = Dimensions.get('window');

const EditProfileScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const { user } = useAuth();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('🙋');
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(true);

  useEffect(() => {
    if (user) {
      const fetchProfile = async () => {
        try {
          const docRef = doc(db, 'users', user.uid);
          const snap = await getDoc(docRef);
          if (snap.exists()) {
            const data = snap.data();
            setName(data.name || '');
            setUsername(data.username || '');
            setEmail(data.email || user.email || '');
            setAvatar(data.avatar || '🙋');
          }
        } catch (error) {
          console.error("Profile fetch error:", error);
        } finally {
          setIsLoadingProfile(false);
        }
      };
      fetchProfile();
    }
  }, [user]);

  const handleSave = async () => {
    if (!name.trim() || !username.trim()) {
      Alert.alert('Hata', 'İsim ve kullanıcı adı alanlarını doldurun.');
      return;
    }

    setIsSaving(true);
    try {
      if (user) {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, {
          name: name.trim(),
          username: username.trim().toLowerCase(),
        });
        Alert.alert('Başarılı', 'Profil bilgileriniz güncellendi.', [
          { text: 'Tamam', onPress: () => navigation.goBack() }
        ]);
      }
    } catch (err) {
      Alert.alert('Hata', 'Kaydedilirken bir sorun oluştu.');
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={{ fontSize: 28, color: '#FFF' }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profili Düzenle</Text>
          <View style={{ width: 40 }} />
        </View>

        <View style={styles.content}>
          <View style={styles.avatarContainer}>
            <Text style={{ fontSize: 60 }}>{avatar}</Text>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>İSİM</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surface, color: colors.text, borderColor: colors.border }]}
              value={name}
              onChangeText={setName}
              placeholderTextColor={colors.textLight}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>KULLANICI ADI</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surface, color: colors.text, borderColor: colors.border }]}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              placeholderTextColor={colors.textLight}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: colors.textLight }]}>E-POSTA (Değiştirilemez)</Text>
            <TextInput
              style={[styles.input, { backgroundColor: colors.surface, color: colors.textLight, borderColor: colors.border }]}
              value={email}
              editable={false}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={colors.textLight}
            />
          </View>

          <View style={{ flex: 1 }} />

          <TouchableOpacity
            style={[
              styles.saveBtn,
              { 
                backgroundColor: isSaving ? colors.border : colors.primary,
                borderBottomColor: isSaving ? colors.border : colors.primaryDark 
              }
            ]}
            onPress={handleSave}
            disabled={isSaving}
          >
            <Text style={[styles.saveBtnText, isSaving && { color: colors.textLight }]}>
              {isSaving ? 'KAYDEDİLİYOR...' : 'KAYDET'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  backBtn: {
    padding: 5,
    width: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    color: '#FFF',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1.5,
    marginBottom: 8,
    marginLeft: 4,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    fontWeight: '500',
  },
  saveBtn: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
    marginBottom: 20,
  },
  saveBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
});

export default EditProfileScreen;
