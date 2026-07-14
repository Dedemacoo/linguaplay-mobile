import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Polygon, Path } from 'react-native-svg';

interface HexagonNodeProps {
  size?: number;
  color?: string;
  shadowColor?: string;
  isLocked?: boolean;
  progress?: number; // 0 to 4 (representing 0%, 25%, 50%, 75%, 100%)
  onPress?: () => void;
  children?: React.ReactNode;
  isActive?: boolean;
}

export const HexagonNode: React.FC<HexagonNodeProps> = ({
  size = 80,
  color = '#3B82F6',
  shadowColor = '#2563EB',
  isLocked = false,
  progress = 0,
  onPress,
  children,
  isActive = false,
}) => {
  const w = size;
  const h = size * 0.9;
  const shadowOffset = 8;
  
  // Flat-top Hexagon calculation
  const hexPoints = `${w*0.25},0 ${w*0.75},0 ${w},${h*0.5} ${w*0.75},${h} ${w*0.25},${h} 0,${h*0.5}`;

  // 4-part segmented ring around the hexagon
  const strokeW = 6;
  const padding = 10;
  const ringSize = size + padding * 2;
  const center = ringSize / 2;
  const r = (ringSize - strokeW) / 2;

  const renderSegment = (index: number) => {
    const isFilled = progress > index;
    if (progress === 4) return null; // hide ring when fully complete

    const segmentAngle = 90;
    const startAngle = index * segmentAngle - 45; // Start at top-right
    const endAngle = startAngle + segmentAngle - 10; // 10 degree gap

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center + r * Math.cos(startRad);
    const y1 = center + r * Math.sin(startRad);
    const x2 = center + r * Math.cos(endRad);
    const y2 = center + r * Math.sin(endRad);

    const pathData = `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;

    return (
      <Path
        key={index}
        d={pathData}
        stroke={isFilled ? '#3B82F6' : 'rgba(255,255,255,0.1)'}
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
      />
    );
  };

  return (
    <View style={{ width: ringSize, height: ringSize, justifyContent: 'center', alignItems: 'center' }}>
      
      {/* 4-Part Progress Ring */}
      {progress < 4 && !isLocked && (
        <View style={{ position: 'absolute', width: ringSize, height: ringSize }}>
          <Svg width={ringSize} height={ringSize}>
            {[0, 1, 2, 3].map((i) => renderSegment(i))}
          </Svg>
        </View>
      )}

      {/* Hexagon Button */}
      <TouchableOpacity 
        activeOpacity={isLocked ? 1 : 0.8}
        onPress={onPress}
        style={{ width: size, height: h + shadowOffset, justifyContent: 'center', alignItems: 'center' }}
      >
        <Svg width={size} height={h + shadowOffset} style={{ position: 'absolute' }}>
          {/* Shadow (Base Polygon) */}
          <Polygon points={hexPoints} fill={shadowColor} y={shadowOffset} />
          {/* Face Polygon */}
          <Polygon points={hexPoints} fill={color} />
          {/* Premium Highlights */}
          <Polygon points={hexPoints} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
        </Svg>
        
        <View style={{ position: 'absolute', zIndex: 2, transform: [{ translateY: -shadowOffset/2 }] }}>
          {children}
        </View>
      </TouchableOpacity>

    </View>
  );
};
