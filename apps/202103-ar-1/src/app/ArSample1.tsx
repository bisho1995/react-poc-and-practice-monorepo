import React from 'react';
import { ARCanvas } from '@react-three/xr';
import { Text } from '@react-three/drei/core/Text';
export default function ARSample1(): JSX.Element {
  return (
    <ARCanvas>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.05}
        color="#000"
        anchorX="center"
        anchorY="middle"
      >
        Hello react-xr!
      </Text>
    </ARCanvas>
  );
}
