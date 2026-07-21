import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

interface UnitBannerProps {
  unit: any;
  kisimIdx: number;
  uIdx: number;
  unitColor: any;
  isCurrentUnit: boolean;
  isUnitCompleted: boolean;
}

export const UnitBanner: React.FC<UnitBannerProps> = ({
  unit,
  kisimIdx,
  uIdx,
  unitColor,
  isCurrentUnit,
  isUnitCompleted
}) => {
  return (
    <View style={styles.bannerContainer}>
      <LinearGradient colors={unitColor.bannerGrad} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.bannerGradient}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerSubtitle}>{(kisimIdx + 1) + '. KISIM, ' + (uIdx + 1) + '. ÜNİTE'}</Text>
          <Text style={styles.bannerTitle}>{unit.description}</Text>
          <View style={styles.bannerProgressBg}>
            <View style={[styles.bannerProgressFill, { width: isCurrentUnit ? '45%' : (isUnitCompleted ? '100%' : '0%'), backgroundColor: '#FFF' }]} />
          </View>
        </View>
        <TouchableOpacity style={styles.listBtn}>
          <FontAwesome5 name="list" size={18} color="#FFF" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    marginHorizontal: 16,
    marginBottom: 30,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    elevation: 8,
  },
  bannerGradient: {
    flexDirection: 'row',
    padding: 16,
    paddingVertical: 12,
    minHeight: 80,
  },
  bannerContent: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 2,
  },
  bannerSubtitle: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 6,
  },
  bannerTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '900',
    marginBottom: 12,
  },
  bannerProgressBg: {
    height: 6,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 3,
    width: '70%',
  },
  bannerProgressFill: {
    height: '100%',
    borderRadius: 3,
  },
  listBtn: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  }
});
