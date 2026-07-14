const fs = require('fs');
let c = fs.readFileSync('c:/xampp/mobiluygulama/mobile/src/screens/HomeScreen.tsx', 'utf8');

// 1. Change the main return to put dashboard inside ScrollView
let mainReturnSearch = `return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BRAND.bg} translucent={false} />
      
      {/* ─── FIXED DASHBOARD ─── */}
      {renderTopDashboard()}

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* ─── DAILY GOAL CARD ─── */}
        <View style={{ paddingHorizontal: 16, marginTop: 16, marginBottom: 8 }}>
          {renderDailyGoal()}
        </View>`;

let mainReturnReplace = `return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={BRAND.bg} translucent={false} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* ─── SCROLLING DASHBOARD ─── */}
        {renderTopDashboard()}

        {/* ─── DAILY GOAL CARD ─── */}
        <View style={{ paddingHorizontal: 16, marginTop: 16, marginBottom: 8 }}>
          {renderDailyGoal()}
        </View>`;

c = c.replace(mainReturnSearch, mainReturnReplace);

// 2. Change renderWorldSections to map over units instead of flattening
let renderWorldSectionsSearch = `const renderWorldSections = () => {
    // Chunk nodes into arrays of 10 for each world
    const worldChunks = [];
    for (let i = 0; i < allNodes.length; i += 10) {
      worldChunks.push(allNodes.slice(i, i + 10));
    }

    return worldChunks.map((chunkNodes, chunkIndex) => {
      const worldTheme = WORLDS[chunkIndex % WORLDS.length];
      const isCurrentWorld = Math.floor(activeNodeIndex / 10) === chunkIndex;`;

let renderWorldSectionsReplace = `const renderWorldSections = () => {
    return courseData.units.map((unit, chunkIndex) => {
      const chunkNodes = unit.levels;
      const worldTheme = WORLDS[chunkIndex % WORLDS.length];
      const isCurrentWorld = true; // simplifying for now
`;

c = c.replace(renderWorldSectionsSearch, renderWorldSectionsReplace);

// 3. Change banner title mapping
let bannerSearch = `<Text style={styles.bannerSubtitle}>{worldTheme.subtitle}</Text>
                  <Text style={styles.bannerTitle}>{worldTheme.title}</Text>`;
let bannerReplace = `<Text style={styles.bannerSubtitle}>{'KISIM ' + (chunkIndex + 1)}</Text>
                  <Text style={styles.bannerTitle}>{unit.title}</Text>`;
c = c.replace(bannerSearch, bannerReplace);

// 4. Update banner style height
let bannerStyleSearch = `bannerGradient: {
    flexDirection: 'row',
    padding: 24,
    height: 150,
  },`;
let bannerStyleReplace = `bannerGradient: {
    flexDirection: 'row',
    padding: 16,
    paddingVertical: 20,
    minHeight: 100,
  },`;
c = c.replace(bannerStyleSearch, bannerStyleReplace);

// 5. Replace node name logic (since we're mapping from actual units now, we need a flat index mapping for activeNode checking)
// To do this reliably without complex offset calculations inside the render function, 
// let's pass a global offset to each chunk.

let renderWorldSectionsSearch2 = `return courseData.units.map((unit, chunkIndex) => {
      const chunkNodes = unit.levels;
      const worldTheme = WORLDS[chunkIndex % WORLDS.length];
      const isCurrentWorld = true; // simplifying for now`;

let renderWorldSectionsReplace2 = `let runningNodeIndex = 0;
    return courseData.units.map((unit, chunkIndex) => {
      const chunkNodes = unit.levels;
      const worldTheme = WORLDS[chunkIndex % WORLDS.length];
      const startIndex = runningNodeIndex;
      runningNodeIndex += chunkNodes.length;
`;

c = c.replace(renderWorldSectionsSearch2, renderWorldSectionsReplace2);

// Update globalIndex inside the map
let mapSearch = `const globalIndex = chunkIndex * 10 + i;`;
let mapReplace = `const globalIndex = startIndex + i;`;
c = c.replace(mapSearch, mapReplace);

fs.writeFileSync('c:/xampp/mobiluygulama/mobile/src/screens/HomeScreen.tsx', c, 'utf8');
console.log('HomeScreen updated successfully');
