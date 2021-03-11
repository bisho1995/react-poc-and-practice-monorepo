import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function FadeIn() {
  const [props, set] = useSpring(() => ({
    to: { fontSize: 24, opacity: 1 },
    from: { fontSize: 14, opacity: 0 },
  }));

  return (
    <animated.div style={{ ...props, textAlign: 'center' }}>
      This should ideally fade in
    </animated.div>
  );
}
