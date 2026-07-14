import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { useThemeColors } from '../theme/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Legal'>;

const LegalScreen = () => {
  const colors = useThemeColors();
  const navigation = useNavigation();
  const route = useRoute<Props['route']>();
  
  const type = route.params?.type || 'privacy';
  const isPrivacy = type === 'privacy';

  const title = isPrivacy ? 'Gizlilik Politikası' : 'Kullanım Koşulları';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.primary }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={{ fontSize: 28, color: '#FFF' }}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.date, { color: colors.textLight }]}>Son Güncelleme: 1 Haziran 2026</Text>
        
        {isPrivacy ? (
          <>
            <Text style={[styles.heading, { color: colors.text }]}>1. Giriş</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Lingua Play ("Uygulama", "Hizmet", "biz", "bizim" veya "tarafımız") kullanıcıların yabancı dil öğrenme süreçlerini desteklemek amacıyla geliştirilmiş bir mobil uygulamadır.
              Bu Gizlilik Politikası, Lingua Play uygulamasını kullandığınızda hangi bilgilerin toplandığını, nasıl kullanıldığını, nasıl korunduğunu ve kullanıcıların sahip olduğu hakları açıklamaktadır.
              Uygulamayı kullanarak bu Gizlilik Politikası'nı kabul etmiş sayılırsınız.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>2. Toplanan Bilgiler</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              <Text style={{ fontWeight: 'bold' }}>2.1 Kullanıcı Tarafından Sağlanan Bilgiler</Text>
              {'\n'}Ad ve soyad, e-posta adresi, kullanıcı adı, profil fotoğrafı, dil öğrenme tercihleri, kullanıcı tarafından oluşturulan içerikler, geri bildirim ve destek talepleri.
              {'\n\n'}<Text style={{ fontWeight: 'bold' }}>2.2 Otomatik Olarak Toplanan Bilgiler</Text>
              {'\n'}Cihaz modeli, işletim sistemi sürümü, uygulama sürümü, dil tercihleri, oturum kayıtları, hata raporları, performans verileri.
              {'\n\n'}<Text style={{ fontWeight: 'bold' }}>2.3 Kullanım Verileri</Text>
              {'\n'}Tamamlanan dersler, öğrenilen kelimeler, test sonuçları, öğrenme istatistikleri, uygulama kullanım sıklığı, başarı ve ilerleme kayıtları.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>3. Bilgilerin Kullanım Amaçları</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Hizmetlerin sunulması ve geliştirilmesi, kullanıcı hesaplarının yönetimi, dil öğrenme ilerlemesinin takip edilmesi, teknik sorunların tespiti ve çözülmesi, güvenliğin sağlanması, kullanıcı desteği verilmesi, yeni özelliklerin geliştirilmesi, yasal yükümlülüklerin yerine getirilmesi.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>4. Veri Saklama ve Güvenliği</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Kişisel veriler yalnızca gerekli olduğu süre boyunca saklanır. Kullanıcı hesabının silinmesi halinde, yasal zorunluluklar saklı kalmak kaydıyla ilgili veriler makul süre içerisinde sistemlerimizden kaldırılır. Lingua Play, kullanıcı verilerinin güvenliğini sağlamak amacıyla uygun teknik ve idari tedbirler uygular.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>5. Üçüncü Taraf Hizmetler</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Uygulama; bulut depolama, analitik, kimlik doğrulama, hata raporlama ve ödeme altyapıları gibi üçüncü taraf hizmetleri kullanabilir. Bu hizmet sağlayıcıların kendi gizlilik politikaları geçerlidir.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>6. Çocukların Gizliliği ve Kullanıcı Hakları</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Lingua Play, çocuklardan bilerek kişisel veri toplamaz. Kullanıcılar; verilerine erişim, düzeltme, silme, itiraz etme ve taşınabilirlik gibi haklara sahiptir.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>7. İletişim</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              E-posta: support@linguaplay.com
            </Text>
          </>
        ) : (
          <>
            <Text style={[styles.heading, { color: colors.text }]}>1. Genel Hükümler</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Bu Kullanım Koşulları, Lingua Play mobil uygulamasının kullanımına ilişkin şartları belirlemektedir. Uygulamayı indirmeniz, erişmeniz veya kullanmanız durumunda bu koşulları kabul etmiş sayılırsınız. Lingua Play, kullanıcıların yabancı dil öğrenmelerini desteklemek amacıyla eğitim içerikleri, testler, kelime çalışmaları ve öğrenme araçları sunan dijital bir platformdur.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>2. Hesap Oluşturma ve Yükümlülükler</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Kullanıcı doğru bilgi sağlamayı ve hesabının güvenliğini korumayı kabul eder. Yasa dışı faaliyetlerde bulunmak, başkalarının haklarını ihlal etmek, sisteme zarar vermek ve tersine mühendislik yapmak yasaktır.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>3. Fikri Mülkiyet Hakları</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Lingua Play uygulaması, tasarımı, yazılımı, logoları, içerikleri ve diğer tüm unsurları fikri mülkiyet mevzuatı kapsamında korunmaktadır. Hiçbir içerik kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>4. Abonelikler ve Satın Almalar</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Uygulama içerisinde ücretli özellikler, abonelik paketleri veya uygulama içi satın almalar sunulabilir. Ödemeler ilgili uygulama mağazasının politikalarına uygun şekilde gerçekleştirilir.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>5. Hizmetin Değiştirilmesi ve Askıya Alınması</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Lingua Play herhangi bir zamanda hizmeti güncelleme veya sonlandırma hakkını saklı tutar. Kullanım koşullarının ihlali durumunda hesaplar askıya alınabilir veya kapatılabilir.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>6. Sorumluluğun Sınırlandırılması</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              Lingua Play hizmetleri "olduğu gibi" sunulmaktadır. Uygulamanın kullanımından doğabilecek zararlardan sorumluluk kabul edilmez.
            </Text>

            <Text style={[styles.heading, { color: colors.text }]}>7. İletişim</Text>
            <Text style={[styles.paragraph, { color: colors.text }]}>
              E-posta: support@linguaplay.com
            </Text>
          </>
        )}
        <View style={{ height: 40 }} />
      </ScrollView>
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
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 50,
    paddingHorizontal: 15,
    paddingBottom: 15,
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
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginTop: 15,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 10,
  },
});

export default LegalScreen;
