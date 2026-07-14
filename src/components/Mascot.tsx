import React, { useRef, useEffect } from 'react';
import { View, Image, StyleSheet, Animated, StyleProp, ImageStyle } from 'react-native';
import { Image as ExpoImage } from 'expo-image';
import { Video, ResizeMode } from 'expo-av';
import { MascotAssets } from '../data/MascotAssets';
import { useProgressStore } from '../store/useProgressStore';

export type LingoAnimationState = 'idle' | 'happy' | 'sad' | 'thinking' | 'celebrate' | 'reading' | 'sleeping' | 'victory' 
  | 'thinking' | 'happy' | 'sad' | 'point' 
  | 'read' | 'write' | 'jump' | 'win' | 'lose' | 'sleep';

interface MascotProps {
  size?: number;
  mascotId?: string; // e.g. 'classic', 'professor', 'dragon'
  animationState?: LingoAnimationState;
  animated?: boolean;
  style?: StyleProp<ImageStyle>;
  forceLargeClassic?: boolean;
  customOffsetX?: number;
}

export const Mascot: React.FC<MascotProps> = ({ 
  size = 60, 
  mascotId, 
  animationState = 'idle', 
  animated = true, 
  style,
  forceLargeClassic = false,
  customOffsetX = 0
}) => {
  const { progress } = useProgressStore();
  const bounceAnim = useRef(new Animated.Value(1)).current;

  // If no mascotId is provided, use the globally equipped mascot
  const currentMascotId = mascotId || progress.equippedMascot || 'classic';
  
  const mascotAssets = MascotAssets[currentMascotId] || MascotAssets['classic'];
  // We disable the flipbook frame cycling because AI-generated sprites are misaligned and have text labels.
  // Instead, we just show the static state requested, or default to idle.
  let frameToRender = animationState;
  
  // Maps semantic states to the closest available frame
  if (animationState === 'win' || animationState === 'jump') frameToRender = 'victory';
  if (animationState === 'lose') frameToRender = 'sad';
  if (animationState === 'read') frameToRender = 'reading';
  if (animationState === 'sleep') frameToRender = 'sleeping';
  
  let targetFrame: string = frameToRender;
  if (animated && mascotAssets['action']) {
    targetFrame = 'action';
  }

  const asset = mascotAssets[targetFrame] || mascotAssets['idle'] || MascotAssets['classic']['idle'];
  const source = asset.source;
  const isVideo = asset.isVideo;

  // CSS transform animations (Breathing removed as requested)
  useEffect(() => {
    // Sadece idle, vb. için çok minimal ve neredeyse fark edilmez bir hareket eklenebilir veya tamamen sabit bırakılabilir.
    // Kullanıcı talebi üzerine "nefes alıp verme efektini kaldır" dendi. 
    // Tüm animasyon döngüsü kaldırıldı.
    bounceAnim.setValue(1);
  }, [animationState, animated]);

  // Custom scale adjustments for specific mascots
  let scaleAdjustment = 2.2;
  let offsetX = customOffsetX;
  if (currentMascotId === 'classic') {
    if (!forceLargeClassic) {
      scaleAdjustment = 1.0;
    }
  } else if (currentMascotId === 'dragon') {
    scaleAdjustment = animated ? 3.1 : 2.4;
  } else if (currentMascotId === 'astronaut') {
    scaleAdjustment = 2.7;
  }

  const visualSize = size * scaleAdjustment;

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          justifyContent: 'center',
          alignItems: 'center',
          transform: [
            { scale: bounceAnim },
            { translateX: offsetX }
          ]
        },
        style
      ]}
    >
      {isVideo ? (
        <Video
          source={source as any}
          style={{ width: visualSize, height: visualSize, position: 'absolute' }}
          resizeMode={ResizeMode.CONTAIN}
          shouldPlay={animated}
          isLooping
        />
      ) : (
        <ExpoImage
          source={source}
          style={{ width: visualSize, height: visualSize, position: 'absolute' }}
          contentFit="contain"
          cachePolicy="memory-disk"
          autoplay={animated}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
});
