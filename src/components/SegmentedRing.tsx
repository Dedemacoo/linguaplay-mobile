import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

interface SegmentedRingProps {
  totalParts: number;
  completedParts: number;
  radius: number;
  strokeWidth: number;
  activeColor?: string;
  inactiveColor?: string;
}

export const SegmentedRing: React.FC<SegmentedRingProps> = ({
  totalParts,
  completedParts,
  radius,
  strokeWidth,
  activeColor = '#FFD700',
  inactiveColor = 'rgba(255,255,255,0.1)'
}) => {
  const size = (radius + strokeWidth) * 2;
  const center = size / 2;
  
  if (totalParts <= 1) {
    const isCompleted = completedParts > 0;
    return (
      <View style={{ width: size, height: size, position: 'absolute' }}>
        <Svg width={size} height={size}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={isCompleted ? activeColor : inactiveColor}
            strokeWidth={strokeWidth}
            fill="none"
          />
        </Svg>
      </View>
    );
  }

  const gapAngle = 10;
  const totalGapAngle = gapAngle * totalParts;
  const segmentAngle = (360 - totalGapAngle) / totalParts;
  
  const segments = [];
  let currentAngle = -90; 

  for (let i = 0; i < totalParts; i++) {
    const isCompleted = i < completedParts;
    
    const startX = center + radius * Math.cos((currentAngle * Math.PI) / 180);
    const startY = center + radius * Math.sin((currentAngle * Math.PI) / 180);
    
    const endAngle = currentAngle + segmentAngle;
    const endX = center + radius * Math.cos((endAngle * Math.PI) / 180);
    const endY = center + radius * Math.sin((endAngle * Math.PI) / 180);

    const largeArcFlag = segmentAngle > 180 ? 1 : 0;
    const pathData = `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;

    segments.push(
      <Path
        key={i}
        d={pathData}
        stroke={isCompleted ? activeColor : inactiveColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
      />
    );

    currentAngle += segmentAngle + gapAngle;
  }

  return (
    <View style={{ width: size, height: size, position: 'absolute', zIndex: -1 }}>
      <Svg width={size} height={size}>
        {segments}
      </Svg>
    </View>
  );
};
