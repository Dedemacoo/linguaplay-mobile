import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { HexagonNode } from '../HexagonNode';
import { UnitBanner } from './UnitBanner';

interface WorldSectionProps {
  courseData: any;
  completedLevels: string[];
  activeNodeIndex: number;
  colors: any;
  handleNodePress: (status: string, lessonId: string, title: string, nextPart?: number) => void;
  activeLanguage: string;
  claimUnitReward: (idx: number, lang: string) => void;
  progress: any;
  unitYPositions: any;
  activeNodeY: any;
  activeUnitId: any;
}

const UNIT_COLORS = (colors: any) => [
  { bannerGrad: [colors.primary, colors.primaryDark], nodeActive: colors.primary, nodeShadow: colors.primaryDark },
  { bannerGrad: [colors.secondary, colors.secondaryDark], nodeActive: colors.secondary, nodeShadow: colors.secondaryDark },
  { bannerGrad: [colors.accent, colors.primaryDark], nodeActive: colors.accent, nodeShadow: colors.primaryDark },
];

const UNITS_PER_KISIM = 10;

export const WorldSection: React.FC<WorldSectionProps> = ({
  courseData,
  completedLevels,
  activeNodeIndex,
  colors,
  handleNodePress,
  activeLanguage,
  claimUnitReward,
  progress,
  unitYPositions,
  activeNodeY,
  activeUnitId,
}) => {
  let runningNodeIndex = 0;
  const totalUnits = courseData.units.length;
  const kisimCount = Math.ceil(totalUnits / UNITS_PER_KISIM);
  const sections: React.ReactNode[] = [];
  const palette = UNIT_COLORS(colors);

  for (let kisimIdx = 0; kisimIdx < kisimCount; kisimIdx++) {
    const kisimStart = kisimIdx * UNITS_PER_KISIM;
    const kisimEnd = Math.min(kisimStart + UNITS_PER_KISIM, totalUnits);
    const kisimUnits = courseData.units.slice(kisimStart, kisimEnd);
    const unitElements: React.ReactNode[] = [];

    for (let uIdx = 0; uIdx < kisimUnits.length; uIdx++) {
      const unit = kisimUnits[uIdx];
      const globalUnitIndex = kisimStart + uIdx;
      const unitColor = palette[globalUnitIndex % palette.length];

      let forcedLevels = unit.levels.slice(0, 6);
      while (forcedLevels.length < 6) {
        forcedLevels.push({ id: `mock-${unit.id}-${forcedLevels.length}`, name: 'Ders', icon: 'star', type: 'lesson' as const });
      }

      const startIndex = runningNodeIndex;
      runningNodeIndex += forcedLevels.length;
      const isCurrentUnit = activeNodeIndex >= startIndex && activeNodeIndex < runningNodeIndex;
      const isUnitCompleted = activeNodeIndex >= runningNodeIndex;

      unitElements.push(
        <View key={unit.id} onLayout={(e) => { unitYPositions.current[unit.id] = e.nativeEvent.layout.y; }}>
          <UnitBanner
            unit={unit}
            kisimIdx={kisimIdx}
            uIdx={uIdx}
            unitColor={unitColor}
            isCurrentUnit={isCurrentUnit}
            isUnitCompleted={isUnitCompleted}
          />

          <View style={styles.pathContainer}>
            {forcedLevels.map((node: any, i: number) => {
              const globalIndex = startIndex + i;
              const langPrefix = activeLanguage === 'kurdish' ? 'kur' : activeLanguage === 'english' ? 'eng' : activeLanguage.substring(0,3);
              const computedLessonId = `${langPrefix}_u${globalUnitIndex + 1}_l${i + 1}`;
              const isLegacyCompleted = completedLevels.includes(computedLessonId);
              const partsCompleted = [1, 2, 3, 4].filter(p => completedLevels.includes(`${computedLessonId}_${p}`)).length;
              const isCompleted = isLegacyCompleted || partsCompleted === 4;
              
              const isActive = globalIndex === activeNodeIndex;
              const isLocked = globalIndex > activeNodeIndex;

              let nodeContent;
              let nodeColor = colors.textMuted;
              let shadowColor = '#1F2937';
              let progressValue = isLegacyCompleted ? 4 : partsCompleted;
              const nextPart = progressValue < 4 ? progressValue + 1 : undefined;

              const steps = [
                { name: 'Etap 1', icon: 'layer-group' },
                { name: 'Etap 2', icon: 'layer-group' },
                { name: 'Etap 3', icon: 'layer-group' },
                { name: 'AI Challenge', icon: 'robot' },
                { name: 'Ünite Finali', icon: 'trophy' },
                { name: 'Ünite Ödülü', icon: 'gift' }
              ];
              const currentStep = steps[i % steps.length];
              const iconName = currentStep.icon;
              const displayName = currentStep.name;
              const isFinalNode = (i % steps.length === 5);
              const isAINode = (i % steps.length === 3);
              const isFinaleNode = (i % steps.length === 4);

              if (isFinalNode) {
                nodeColor = colors.gold;
                shadowColor = '#D29C00';
                nodeContent = <FontAwesome5 name="trophy" size={28} color="#FFF" />;
              } else if (isCompleted) {
                nodeColor = unitColor.nodeActive;
                shadowColor = unitColor.nodeShadow;
                progressValue = 4;
                nodeContent = <FontAwesome5 name={isAINode ? 'robot' : isFinaleNode ? 'trophy' : 'check'} size={28} color="#FFF" />;
              } else if (isActive) {
                nodeColor = unitColor.nodeActive;
                shadowColor = unitColor.nodeShadow;
                // progressValue remains what was computed above
                nodeContent = <FontAwesome5 name={iconName} size={28} color="#FFF" />;
              } else {
                nodeContent = <FontAwesome5 name={iconName} size={28} color={colors.textMuted} />;
              }

              const ZIGZAG = [-120, -60, 30, 100, 30, -60];
              const zigOffset = ZIGZAG[i % ZIGZAG.length];

              return (
                <View
                  key={node.id}
                  onLayout={(e) => {
                    if (isActive) {
                      activeNodeY.current = e.nativeEvent.layout.y;
                      activeUnitId.current = unit.id;
                    }
                  }}
                  style={{ alignItems: 'center', marginVertical: isActive ? -10 : -16, transform: [{ translateX: zigOffset }] }}
                >
                  <View style={{ position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
                    <HexagonNode
                      size={80}
                      color={nodeColor}
                      shadowColor={shadowColor}
                      isLocked={isLocked}
                      progress={progressValue}
                      isActive={isActive}
                      onPress={() => handleNodePress(isLocked ? 'locked' : isActive ? 'active' : 'completed', computedLessonId, displayName, nextPart)}
                    >
                      {nodeContent}
                    </HexagonNode>

                  </View>
                  {!isFinalNode && (
                    <View style={styles.nodeLabelBox}>
                      <Text style={[styles.nodeLabel, { color: isLocked ? colors.textMuted : colors.text }]}>{displayName}</Text>
                    </View>
                  )}
                  {i < forcedLevels.length - 1 && (
                    <View style={{ width: 4, height: 4, backgroundColor: isCompleted ? unitColor.nodeActive : colors.border, marginVertical: 0, borderRadius: 2 }} />
                  )}
                </View>
              );
            })}
          </View>

          <View style={styles.rewardContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                const isUnitCompleted = activeNodeIndex > (globalUnitIndex * 6 + 5);
                if (!isUnitCompleted) {
                  Alert.alert("Henüz kilitli!", "Bu ödülü almak için önce ünitedeki tüm dersleri tamamlamalısın.");
                  return;
                }

                const rewardId = `eng_u${globalUnitIndex + 1}_reward`;
                const isRewardClaimed = progress.languages[activeLanguage]?.completedLessons?.includes(rewardId);

                if (!isRewardClaimed) {
                  claimUnitReward(globalUnitIndex, activeLanguage);
                  Alert.alert("Tebrikler! 🎉", "100 Lingo Mücevheri kazandın! 💎");
                } else {
                  Alert.alert("Zaten alındı", "Bu ünitenin ödülünü daha önce aldın.");
                }
              }}
              style={{
                width: 80, height: 80,
                alignItems: 'center', justifyContent: 'center',
                opacity: activeNodeIndex > (globalUnitIndex * 6 + 5) ? (progress.languages[activeLanguage]?.completedLessons?.includes(`eng_u${globalUnitIndex + 1}_reward`) ? 0.6 : 1) : 0.4
              }}
            >
              <Text style={{ fontSize: 56 }}>{progress.languages[activeLanguage]?.completedLessons?.includes(`eng_u${globalUnitIndex + 1}_reward`) ? '📦' : '🎁'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    const kisimAllCompleted = activeNodeIndex >= runningNodeIndex;
    const isNextKisim = kisimIdx < kisimCount - 1;

    sections.push(
      <View key={`kisim-${kisimIdx}`} style={styles.worldSection}>
        {unitElements}
        {isNextKisim && (
          <View style={styles.nextKisimContainer}>
            <View style={[styles.nextKisimCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.nextKisimBadge}>
                <Text style={{ color: colors.textSub, fontSize: 12, fontWeight: '700', letterSpacing: 1 }}>SIRADAKİ</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                <FontAwesome5 name="lock" size={18} color={colors.textMuted} style={{ marginRight: 8 }} />
                <Text style={{ color: colors.text, fontSize: 22, fontWeight: '800' }}>{(kisimIdx + 2) + '. Kısım'}</Text>
              </View>
              <Text style={{ color: colors.textSub, fontSize: 14, textAlign: 'center', lineHeight: 20, marginBottom: 16 }}>
                Daha ileri seviye kelime, ifade ve{'\n'}dil bilgisi konseptlerini öğren
              </Text>
              <TouchableOpacity style={[styles.jumpBtn, { backgroundColor: kisimAllCompleted ? colors.primary : colors.border }]}>
                <Text style={{ color: kisimAllCompleted ? '#FFF' : colors.textMuted, fontWeight: '800', fontSize: 14 }}>BURAYA ATLA!</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }

  return <>{sections}</>;
};

const styles = StyleSheet.create({
  worldSection: {
    paddingVertical: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  pathContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeLabel: {
    position: 'absolute',
    top: -45,
    zIndex: 10,
    backgroundColor: '#FFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E5E5'
  },
  activeLabelArrow: {
    position: 'absolute',
    bottom: -6,
    left: '50%',
    marginLeft: -6,
    width: 10,
    height: 10,
    backgroundColor: '#FFF',
    transform: [{ rotate: '45deg' }],
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: '#E5E5E5'
  },
  nodeLabelBox: {
    marginTop: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodeLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  rewardContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  nextKisimContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  nextKisimCard: {
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
  },
  nextKisimBadge: {
    backgroundColor: 'rgba(59,130,246,0.15)',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 12
  },
  jumpBtn: {
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 12
  }
});
