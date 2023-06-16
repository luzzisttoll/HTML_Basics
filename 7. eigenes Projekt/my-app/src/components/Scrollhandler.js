import React, { useEffect } from 'react';

const ScrollHandler = ({ onScroll }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      onScroll(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);

  return null;
};

export default ScrollHandler;