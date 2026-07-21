import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface SegmentedRingProps {
  size?: number;
  strokeWidth?: number;
  progress?: number;
}

export const SegmentedRing: React.FC<SegmentedRingProps> = ({
  size = 96,
  strokeWidth = 8,
  progress = 0
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress * circumference);

  return (
    <View style={{ position: 'absolute', width: size, height: size, alignItems: 'center', justifyContent: 'center', zIndex: 0 }}>
      <Svg width={size} height={size}>
        <Circle cx={size/2} cy={size/2} r={radius} stroke="rgba(255,255,255,0.2)" strokeWidth={strokeWidth} fill="none" />
        <Circle cx={size/2} cy={size/2} r={radius} stroke="#4CD964" strokeWidth={strokeWidth} fill="none" strokeDasharray={`${circumference} ${circumference}`} strokeDashoffset={strokeDashoffset} strokeLinecap="round" transform={`rotate(-90 ${size/2} ${size/2})`} />
      </Svg>
    </View>
  );
};
