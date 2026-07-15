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
  const depth = 7; // 3D derinlik (kalınlık)

  // Hafif yukarı bakan perspektif (orta nokta h*0.42)
  const mid = h * 0.42;

  // Üst yüzey noktaları
  const facePoints = `${w*0.25},0 ${w*0.75},0 ${w},${mid} ${w*0.75},${h} ${w*0.25},${h} 0,${mid}`;

  // 3D Yan paneller (kenar duvarları) — gölge kopya yerine gerçek derinlik
  // Alt kenar (bottom-left → bottom-right)
  const sideBottom = `${w*0.25},${h} ${w*0.75},${h} ${w*0.75},${h+depth} ${w*0.25},${h+depth}`;
  // Sağ alt kenar (bottom-right → right-mid)
  const sideRight = `${w*0.75},${h} ${w},${mid} ${w},${mid+depth} ${w*0.75},${h+depth}`;
  // Sol alt kenar (left-mid → bottom-left)
  const sideLeft = `0,${mid} ${w*0.25},${h} ${w*0.25},${h+depth} 0,${mid+depth}`;

  // Yan panel renkleri — arka planla karışmayacak kadar görünür
  const sideColorBottom = shadowColor;             // Alt kenar: ana gölge rengi
  const sideColorRight = shadowColor;              // Sağ kenar: aynı ton
  const sideColorLeft = shadowColor;               // Sol kenar: aynı ton

  // 4-part segmented ring
  const strokeW = 6;
  const padding = 10;
  const ringSize = size + padding * 2;
  const center = ringSize / 2;
  const r = (ringSize - strokeW) / 2;

  const renderSegment = (index: number) => {
    const isFilled = progress > index;
    if (progress === 4) return null;

    const segmentAngle = 90;
    const startAngle = index * segmentAngle - 45;
    const endAngle = startAngle + segmentAngle - 10;

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
        stroke={isFilled ? color : 'rgba(255,255,255,0.1)'}
        strokeWidth={strokeW}
        strokeLinecap="round"
        fill="none"
      />
    );
  };

  const totalH = h + depth;

  return (
    <View style={{ width: ringSize, height: ringSize + depth, justifyContent: 'center', alignItems: 'center' }}>

      {/* 4-Part Progress Ring */}
      {progress < 4 && !isLocked && (
        <View style={{ position: 'absolute', top: 0, width: ringSize, height: ringSize }}>
          <Svg width={ringSize} height={ringSize}>
            {[0, 1, 2, 3].map((i) => renderSegment(i))}
          </Svg>
        </View>
      )}

      {/* 3D Hexagon */}
      <TouchableOpacity 
        activeOpacity={isLocked ? 1 : 0.8}
        onPress={onPress}
        style={{ width: size, height: totalH, justifyContent: 'center', alignItems: 'center' }}
      >
        <Svg width={size} height={totalH} style={{ position: 'absolute' }}>
          {/* YAN PANELLER (3D derinlik) */}
          <Polygon points={sideBottom} fill={sideColorBottom} />
          <Polygon points={sideRight} fill={sideColorRight} />
          <Polygon points={sideLeft} fill={sideColorLeft} />

          {/* ÜST YÜZEY */}
          <Polygon points={facePoints} fill={color} />

          {/* Üst yüzey kenar ışığı */}
          <Polygon points={facePoints} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth={1.5} />
        </Svg>
        
        {/* İçerik (ikon) */}
        <View style={{ position: 'absolute', zIndex: 2, transform: [{ translateY: -depth/2 }] }}>
          {children}
        </View>
      </TouchableOpacity>

    </View>
  );
};
