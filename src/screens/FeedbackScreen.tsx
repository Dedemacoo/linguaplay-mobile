import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, Dimensions, Linking, ScrollView } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const FeedbackScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const [feedback, setFeedback] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (feedback.trim().length < 10) {
      Alert.alert('Hata', 'Lütfen en az 10 karakterlik bir mesaj yazın.');
      return;
    }

    setIsSubmitting(true);

    const email = 'linguaplaysupport@gmail.com';
    const subject = encodeURIComponent('LinguaPlay Geri Bildirim ve Destek Talebi');
    const body = encodeURIComponent(feedback.trim());
    const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

    try {
      const canOpen = await Linking.canOpenURL(mailtoUrl);
      if (canOpen) {
        await Linking.openURL(mailtoUrl);
        setFeedback('');
        navigation.goBack();
      } else {
        Alert.alert('Hata', 'Telefonunuzda bir mail uygulaması bulunamadı. Lütfen mailinizi doğrudan linguaplaysupport@gmail.com adresine gönderin.');
      }
    } catch (error) {
      console.error("Mail opening error:", error);
      Alert.alert('Hata', 'Mail uygulaması açılırken bir sorun oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <View style={[styles.header, { backgroundColor: colors.primary }]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={{ fontSize: 28, color: '#FFF' }}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Geri Bildirim</Text>
          <View style={{ width: 40 }} />
        </View>

        <ScrollView 
          style={{ flex: 1 }} 
          contentContainerStyle={[styles.content, { flexGrow: 1, flex: undefined }]} 
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={[styles.title, { color: colors.text }]}>Nasıl Gidiyor?</Text>
          <Text style={[styles.subtitle, { color: colors.textLight }]}>
            LinguaPlay uygulamasını nasıl geliştirebileceğimizi bize anlatın. Fikirleriniz bizim için çok değerli!
          </Text>

          <View style={[styles.inputContainer, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <TextInput
              style={[styles.input, { color: colors.text }]}
              placeholder="Görüş, öneri veya karşılaştığınız sorunları buraya yazabilirsiniz..."
              placeholderTextColor={colors.textLight}
              multiline
              textAlignVertical="top"
              value={feedback}
              onChangeText={setFeedback}
              maxLength={500}
            />
            <Text style={[styles.charCount, { color: colors.textLight }]}>{feedback.length}/500</Text>
          </View>

          <View style={{ flex: 1 }} />

          <TouchableOpacity
            style={[
              styles.submitBtn,
              { 
                backgroundColor: isSubmitting ? colors.border : colors.primary,
                borderBottomColor: isSubmitting ? colors.border : colors.primaryDark 
              }
            ]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            <Text style={[styles.submitBtnText, isSubmitting && { color: colors.textLight }]}>
              {isSubmitting ? 'GÖNDERİLİYOR...' : 'GÖNDER'}
            </Text>
          </TouchableOpacity>
        </ScrollView>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
  },
  inputContainer: {
    borderWidth: 2,
    borderRadius: 16,
    padding: 15,
    height: 200,
    marginBottom: 30,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  charCount: {
    textAlign: 'right',
    fontSize: 12,
    marginTop: 10,
  },
  submitBtn: {
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    borderBottomWidth: 4,
  },
  submitBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    letterSpacing: 1,
  },
});

export default FeedbackScreen;
