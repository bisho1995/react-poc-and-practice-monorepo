import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './animatedCard.module.scss';

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];

export default function AnimatedCard() {
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1] }));

  return (
    <animated.div
      className={styles.card}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      style={{
        transform: props.xys.interpolate((...args) => {
          const [x, y, s] = args;
          return `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
        }),
      }}
    ></animated.div>
  );
}
