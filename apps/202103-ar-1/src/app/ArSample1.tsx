import React, { useState, Suspense } from 'react';
import { useThree } from 'react-three-fiber';
import {
  ARCanvas,
  DefaultXRControllers,
  Interactive,
  useHitTest,
} from '@react-three/xr';
import { Text } from '@react-three/drei/core/Text';
import { Cloud } from '@react-three/drei/core/Cloud';

function Box({ color, size, scale, children, ...rest }: any) {
  return (
    <mesh scale={scale} {...rest}>
      <boxBufferGeometry attach="geometry" args={size} />
      <meshPhongMaterial attach="material" color={color} />
      {children}
    </mesh>
  );
}

function Button(props: any) {
  const [hover, setHover] = useState(false);
  const [color, setColor] = useState<any>('blue');

  const { gl } = useThree();
  const sessionRef = gl.xr.getSession();
  console.log('sessionRef >> ', sessionRef);

  // useHitTest(console.log);

  const onSelect = () => {
    setColor((Math.random() * 0xffffff) | 0);
  };

  return (
    <Interactive
      onHover={() => setHover(true)}
      onBlur={() => setHover(false)}
      onSelect={onSelect}
    >
      <Box
        color={color}
        scale={hover ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
        size={[0.4, 0.1, 0.1]}
        {...props}
      >
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.05}
          color="#000"
          anchorX="center"
          anchorY="middle"
        >
          Hello react-xr!
        </Text>
      </Box>
    </Interactive>
  );
}
export default function ARSample1(): JSX.Element {
  return (
    <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
      <ambientLight />
      <pointLight position={[0, 0, 10]} />
      <DefaultXRControllers />
      <Button position={[0, 0.1, -0.2]} />
      <Suspense fallback={null}>
        <Cloud position={[0, 0, 0]} />
      </Suspense>
    </ARCanvas>
  );
}
