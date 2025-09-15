import React from 'react';
import Svg, { Path } from 'react-native-svg';

const COLORS = {
  ACCENT: '#39FF14', // Verde Neon
  SUBTLE: '#E0E0E0',
};

interface StarProps {
  filled: boolean;
}

export const Star: React.FC<StarProps> = ({ filled }) => {
  return (
    <Svg height="24" width="24" viewBox="0 0 24 24">
      <Path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill={filled ? COLORS.ACCENT : COLORS.SUBTLE} />
    </Svg>
  );
};