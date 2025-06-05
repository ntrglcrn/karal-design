'use client';

import React, { useEffect, useState, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  threshold = 0.1,
  rootMargin = '0px',
  delay = 0,
}) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutRef.current = setTimeout(() => {
            setIsInView(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(elementRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [threshold, rootMargin, delay]);

  const animatedStyles: React.CSSProperties = {
    opacity: isInView ? 1 : 0,
    transform: isInView ? 'translateY(0)' : 'translateY(10px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  return (
    <div ref={elementRef} style={animatedStyles}>
      {children}
    </div>
  );
};

export default AnimateOnScroll; 