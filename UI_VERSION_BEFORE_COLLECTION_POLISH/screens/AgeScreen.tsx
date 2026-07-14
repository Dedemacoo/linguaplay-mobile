import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { useThemeColors } from '../theme/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Age'>;

const AgeScreen: React.FC<Props> = ({ navigation }) => {
  const colors = useThemeColors();
  const [age, setAge] = useState('');

  const handleNext = () => {
    if (age.trim()) {
      navigation.navigate('Register');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={{ fontSize: 28, color: colors.textLight, fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold' }}>←</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={{ fontSize: 60, textAlign: 'center', marginBottom: 20 }}>🎂</Text>
          <Text style={[styles.title, { color: colors.text }]}>Kaç yaşındasın?</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>
            Sana en uygun deneyimi sunabilmemiz için yaşını bilmemiz gerekiyor.
          </Text>

          <TextInput
            style={[styles.input, { backgroundColor: colors.surface, borderColor: colors.border, color: colors.text }]}
            placeholder="Yaşın"
            placeholderTextColor={colors.textLight}
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
            maxLength={3}
            autoFocus
          />
        </View>

        <View style={styles.footer}>
          <TouchableOpacity 
            style={[styles.button, { 
              backgroundColor: age.trim() ? colors.primary : colors.surface, 
              borderBottomColor: age.trim() ? colors.primaryDark : colors.surface 
            }]} 
            onPress={handleNext}
            disabled={!age.trim()}
            activeOpacity={0.8}
          >
            <Text style={[styles.buttonText, { color: age.trim() ? '#FFF' : colors.textLight }]}>DEVAM ET</Text>
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
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  input: {
    borderWidth: 2,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
  },
  footer: {
    padding: 20,
  },
  button: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
});

export default AgeScreen;
