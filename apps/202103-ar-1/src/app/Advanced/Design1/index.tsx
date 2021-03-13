import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import Number from './Number';
import Particles from './Particles';
import Sparks from './Sparks';
import Effects from './Effects';

export default function Design1(): JSX.Element {
  const mouse = useRef([0, 0]);
  const [down, set] = useState(false);

  return (
    <Canvas>
      <pointLight distance={100} intensity={4} color="white" />
      <fog attach="fog" args={['white', 50, 190]} />
      <Number />
      <Particles count={100} mouse={mouse} />
      <Sparks
        count={20}
        mouse={mouse}
        colors={[
          '#A2CCB6',
          '#FCEEB5',
          '#EE786E',
          '#e0feff',
          'lightpink',
          'lightblue',
        ]}
      />
      <Effects down={down} />
    </Canvas>
  );
}
