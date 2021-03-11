import React from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './animatedCard.module.scss';

const calc = (x, y) => {
  const scale = 1;
  const scaleDownFactor = 20;

  const newX = -(y - window.innerHeight / 2) / scaleDownFactor;
  const newY = (x - window.innerWidth / 2) / scaleDownFactor;

  return [newX, newY, scale];
};

export default function AnimatedCard() {
  /**
   * xys is x, y and scale
   */
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
