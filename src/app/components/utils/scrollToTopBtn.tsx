"use client";

import React, { useState, useEffect } from 'react';
import './ScrollToTopBtn.scss';

// Esse componente experimental foi baseado em uma documentação sobre esse tipo botão, meu primeiro contato pratico com typescript e um pouco de react
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
    
    // nestas consts é possivel selecionar a velocidade da subida do botão scroller
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
  // return para mostrar o botão apos o usuario utilizar o scroll do mouse
  return (
    isVisible ? (
      <a href="#home" className="up-btn" onClick={handleScrollToTop}>
        ↑
      </a>
    ) : null
  );
};

export default ScrollToTopButton;
