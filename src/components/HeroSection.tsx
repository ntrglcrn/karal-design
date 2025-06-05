import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full min-h-screen px-4 py-0">
      {/* Место для изображения в верхней части */}
      <div className="flex flex-shrink-0 h-[70vh]">
        <img src="/img/header.jpg" alt="Hero Image" className="w-full h-full object-cover" />
      </div>

      {/* Текст в нижней части */}
      <div className="mt-5 -ml-6">
        <h1 className="text-[#014d8c] text-[14.95vw] font-absurdite uppercase leading-none text-left">
          Karal.Design
        </h1>
      </div>
    </section>
  );
};

export default HeroSection; 