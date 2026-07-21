import fs from 'fs';

let content = fs.readFileSync('src/screens/ShopScreen.tsx', 'utf8');

// 1. Add imports
content = content.replace(
  "import { useProgressStore } from '../store/useProgressStore';",
  "import { useProgressStore } from '../store/useProgressStore';\nimport { Mascot } from '../components/Mascot';"
);

// 2. Add SHOP_MASCOTS array before ShopScreen component
const mascotsStr = `
const SHOP_MASCOTS = [
  { id: 'classic', name: 'Klasik Lingo', cost: 0, description: 'Standart Lingo', req: 'none' },
  { id: 'professor', name: 'Profesör Lingo', cost: 0, description: '1. Aşama sonu ödülü!', req: 'e_boss_1' },
  { id: 'astronaut', name: 'Uzaylı Lingo', cost: 500, description: 'Uzay yolculuğu!', req: 'none' },
  { id: 'cyber', name: 'Siber Lingo', cost: 500, description: 'Gelecekten geldi', req: 'none' },
  { id: 'dragon', name: 'Ejderha Lingo', cost: 800, description: 'Ateş püskürten dost', req: 'none' },
  { id: 'explorer', name: 'Kâşif Lingo', cost: 300, description: 'Dünyayı geziyor', req: 'none' },
  { id: 'fire', name: 'Ateş Lingo', cost: 1000, description: 'Çok sıcak!', req: 'none' },
  { id: 'ice', name: 'Buz Lingo', cost: 1000, description: 'Çok soğuk!', req: 'none' },
  { id: 'pirate', name: 'Korsan Lingo', cost: 400, description: 'Denizlerin hakimi', req: 'none' },
  { id: 'royal', name: 'Kral Lingo', cost: 1500, description: 'Asil bir görünüm', req: 'none' },
  { id: 'wizard', name: 'Büyücü Lingo', cost: 600, description: 'Sihirli!', req: 'none' },
];

`;
content = content.replace('const ShopScreen: React.FC<Props> = ({ navigation }) => {', mascotsStr + 'const ShopScreen: React.FC<Props> = ({ navigation }) => {');

// 3. Add destructured methods from store
content = content.replace(
  'const { progress, addGems, refillHearts  } = useProgressStore();',
  'const { progress, addGems, refillHearts, buyMascot, equipMascot } = useProgressStore();'
);

// 4. Create UI section
const mascotsUI = `
        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>KARAKTERLER (MASCOTS)</Text>
        <View style={styles.mascotGrid}>
          {SHOP_MASCOTS.map(m => {
            const isUnlocked = progress.unlockedMascots?.includes(m.id);
            const isEquipped = progress.equippedMascot === m.id;
            
            // Check requirements
            let isReqMet = true;
            if (m.req !== 'none') {
               // Check if req is in ANY language's completedLessons
               isReqMet = Object.values(progress.languages).some((lang: any) => lang.completedLessons?.includes(m.req));
            }

            return (
              <View key={m.id} style={[styles.mascotCard, { backgroundColor: colors.surface, borderColor: isEquipped ? colors.primary : colors.border }]}>
                <View style={styles.mascotImgWrapper}>
                   <Mascot mascotId={m.id} size={60} animated={false} />
                </View>
                <Text style={[styles.mascotName, { color: colors.text }]} numberOfLines={1}>{m.name}</Text>
                
                {!isReqMet ? (
                  <View style={[styles.mascotBtn, { backgroundColor: colors.border }]}>
                    <Text style={[styles.mascotBtnText, { color: colors.textLight }]}>🔒 Kilitli</Text>
                  </View>
                ) : isEquipped ? (
                  <View style={[styles.mascotBtn, { backgroundColor: colors.primary + '40' }]}>
                    <Text style={[styles.mascotBtnText, { color: colors.primary }]}>Seçili</Text>
                  </View>
                ) : isUnlocked ? (
                  <TouchableOpacity 
                    style={[styles.mascotBtn, { backgroundColor: colors.primary }]}
                    onPress={() => {
                      equipMascot(m.id);
                      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    }}
                  >
                    <Text style={[styles.mascotBtnText, { color: '#FFF' }]}>Kullan</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity 
                    style={[styles.mascotBtn, { backgroundColor: progress.gems >= m.cost ? '#58CC02' : colors.border }]}
                    onPress={() => {
                      if (progress.gems >= m.cost) {
                        buyMascot(m.id, m.cost);
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                      } else {
                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                        alert('Yeterli elmasın yok!');
                      }
                    }}
                  >
                    <Text style={[styles.mascotBtnText, { color: progress.gems >= m.cost ? '#FFF' : colors.textLight }]}>💎 {m.cost}</Text>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>

`;

content = content.replace('<Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>ELMAS SATIN AL</Text>', mascotsUI + '        <Text style={[styles.sectionTitle, { color: colors.textLight, marginTop: 25 }]}>ELMAS SATIN AL</Text>');

// 5. Add styles
const stylesToAdd = `
  mascotGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  mascotCard: {
    width: '48%',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderRadius: 16,
    padding: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  mascotImgWrapper: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  mascotName: {
    fontSize: 14,
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  mascotBtn: {
    width: '100%',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  mascotBtnText: {
    fontWeight: 'bold', fontFamily: 'SpaceGrotesk_700Bold',
    fontSize: 12,
  },
`;

content = content.replace('buyBtnText: {', stylesToAdd + '  buyBtnText: {');

fs.writeFileSync('src/screens/ShopScreen.tsx', content);
console.log('ShopScreen updated successfully!');
