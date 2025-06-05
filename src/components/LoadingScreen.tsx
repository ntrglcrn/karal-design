'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [logoOpacity, setLogoOpacity] = useState(1);
  const [bgOpacity, setBgOpacity] = useState(1);

  useEffect(() => {
    // Начинаем анимацию через 1 секунду
    const startAnimation = setTimeout(() => {
      // Анимация логотипа
      setLogoOpacity(0);
      
      // Анимация фона начинается через 500мс (когда логотип на половину исчез)
      setTimeout(() => {
        setBgOpacity(0);
      }, 500);
    }, 1000);

    // Удаляем компонент после завершения всех анимаций
    const removeComponent = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(startAnimation);
      clearTimeout(removeComponent);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        backgroundColor: 'white',
        transition: 'opacity 500ms ease-in-out',
        opacity: bgOpacity
      }}
    >
      <div 
        className="text-[#014d8c] text-[32px] font-absurdite"
        style={{
          transition: 'opacity 1000ms ease-in-out',
          opacity: logoOpacity
        }}
      >
        Karal.Design
      </div>
    </div>
  );
} 