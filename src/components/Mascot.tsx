import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

interface MascotProps {
  size?: number;
  width?: number;
  height?: number;
  style?: StyleProp<TextStyle>;
}

export const Mascot: React.FC<MascotProps> = ({ size = 60, style }) => {
  return (
    <Text
      style={[
        {
          fontSize: size,
          lineHeight: size * 1.2, // To ensure emojis don't get clipped on some platforms
        },
        style,
      ]}
    >
      🐬
    </Text>
  );
};
