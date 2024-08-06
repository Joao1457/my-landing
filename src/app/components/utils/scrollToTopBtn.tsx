"use client";

import React, { useState, useEffect } from 'react';
import './ScrollToTopBtn.scss';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const scrollDuration = 500;
    const scrollStep = -window.scrollY / (scrollDuration / 10);
    const scrollInterval = setInterval(() => {
      if (window.scrollY > 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  };

  return (
    isVisible ? (
      <a href="#home" className="up-btn" onClick={handleScrollToTop}>
        ↑
      </a>
    ) : null
  );
};

export default ScrollToTopButton;
