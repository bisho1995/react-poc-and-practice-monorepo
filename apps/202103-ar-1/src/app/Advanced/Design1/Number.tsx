import { Text } from '@react-three/drei/core/Text';
import React, { Suspense } from 'react';

export default function Number(): JSX.Element {
  return (
    <Suspense fallback={null}>
      <group>
        <Text fontSize={8}>4</Text>
      </group>
    </Suspense>
  );
}
