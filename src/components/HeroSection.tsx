'use client';

import React, { useEffect, useState } from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="flex flex-col w-full min-h-screen px-4 py-0">
      {/* Место для изображения в верхней части */}
      <div className="flex flex-shrink-0 h-[70vh] overflow-hidden">
        <img 
          src="/img/header.jpg" 
          alt="Hero Image" 
          className="w-full h-full object-cover transition-transform duration-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Текст в нижней части */}
      <div className="mt-5 -ml-0.5">
        <AnimateOnScroll delay={2100}>
          <h1 className="text-[#014d8c] text-[13.6vw] md:text-[14.7vw] font-absurdite uppercase leading-none text-center">
            Karal.Design
          </h1>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default HeroSection; 