import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
// import { useSpring } from 'react-spring';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

const Box = function Box() {
  const [enlarged, setEnlarged] = useState(false);

  const initialAnimationValues = {
    color: '#e45858',
    rotateY: 0,
    scaleX: 1,
    scaleY: 1,
  };
  const [{ color, rotateY, scaleX, scaleY }, set] = useSpring(() => ({
    ...initialAnimationValues,
    config: { mass: 5, tension: 400, friction: 50, precision: 0.01 },
  }));
  return (
    <a.mesh
      rotation-x={0.6}
      rotation-y={rotateY}
      scale-x={scaleX}
      scale-z={scaleY}
      onClick={(e) => {
        setEnlarged(!enlarged);
        if (enlarged)
          set({ color: '#6246ea', rotateY: Math.PI, scaleX: 5, scaleY: 5 });
        else set({ ...initialAnimationValues });
      }}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshStandardMaterial roughness={0.9} attach="material" color={color} />
    </a.mesh>
  );
};

export default function AnimatedCube(): JSX.Element {
  return (
    <Canvas colorManagement>
      <ambientLight />
      <pointLight position={[0, 0, +10]} castShadow />
      <Box />
    </Canvas>
  );
}
