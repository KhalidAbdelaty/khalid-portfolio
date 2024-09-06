import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const CustomCursorAndScroll = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cursorAnimation = useAnimation();
  const scrollIndicatorAnimation = useAnimation();

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  useEffect(() => {
    cursorAnimation.start({
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    });
  }, [mousePosition, cursorAnimation]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollIndicatorAnimation.start({
        scaleX: scrollPercentage / 100,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollIndicatorAnimation]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={cursorAnimation}
      />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50"
        animate={scrollIndicatorAnimation}
      />
    </>
  );
};

export default CustomCursorAndScroll;