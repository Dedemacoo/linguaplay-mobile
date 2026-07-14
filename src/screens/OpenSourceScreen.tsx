import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// @ts-ignore
import { Feather } from '@expo/vector-icons';
import { useThemeColors } from '../theme/colors';

const LICENSES = [
  { name: 'React Native', url: 'https://github.com/facebook/react-native/blob/main/LICENSE', license: 'MIT License' },
  { name: 'Expo', url: 'https://github.com/expo/expo/blob/main/LICENSE', license: 'MIT License' },
  { name: 'Zustand', url: 'https://github.com/pmndrs/zustand/blob/main/LICENSE', license: 'MIT License' },
  { name: 'Firebase', url: 'https://github.com/firebase/firebase-js-sdk/blob/master/LICENSE', license: 'Apache License 2.0' },
  { name: 'React Navigation', url: 'https://github.com/react-navigation/react-navigation/blob/main/packages/core/LICENSE', license: 'MIT License' }
];

const OpenSourceScreen = () => {
  const navigation = useNavigation();
  const colors = useThemeColors();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Feather name="arrow-left" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Açık Kaynak Lisansları</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={{ paddingBottom: 40 }}>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          LinguaPlay uygulamasında aşağıdaki harika açık kaynak projeleri kullanılmaktadır:
        </Text>

        {LICENSES.map((l, i) => (
          <View key={i} style={[styles.licenseCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
            <Text style={[styles.licenseName, { color: colors.text }]}>{l.name}</Text>
            <Text style={[styles.licenseType, { color: colors.textLight }]}>{l.license}</Text>
          </View>
        ))}
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
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 10,
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
  },
  content: {
    padding: 20,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 20,
  },
  licenseCard: {
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
  },
  licenseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  licenseType: {
    fontSize: 14,
    marginTop: 4,
  }
});

export default OpenSourceScreen;
