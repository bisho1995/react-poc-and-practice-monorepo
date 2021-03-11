import React from 'react';
import { useSpring, animated } from 'react-spring';
import FadeIn from './fadeIn';

function App() {
  const [{ opacity }, set] = useSpring(() => ({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  }));
  return <animated.div style={{ opacity }}>I will fade in</animated.div>;
}
export default FadeIn;
