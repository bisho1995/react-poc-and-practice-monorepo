import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import Number from './Number';
import Particles from './Particles';

export default function Design1(): JSX.Element {
  const mouse = useRef([0, 0]);

  return (
    <Canvas>
      <pointLight distance={100} intensity={4} color="white" />
      <fog attach="fog" args={['white', 50, 190]} />
      <Number />
      <Particles count={100} mouse={mouse} />
    </Canvas>
  );
}
