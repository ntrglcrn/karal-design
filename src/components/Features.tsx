import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';

function Features() {
  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px]">
      {/* Основной контейнер, который будет гридом на md+ */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {/* Блок с первыми тремя пунктами - занимает 2 колонки на md+ */}
        <div className="md:col-span-2 flex flex-wrap">
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">Currently</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">Freelancing</p>
          </div>
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">Specialized at</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">UX/UI Design, Apps & Websites</p>
          </div>
          <div className="mb-4">
            <AnimateOnScroll>
              <p className="text-lg">Empowering</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">Digital Products & Marketing Campaigns</p>
          </div>
        </div>

        {/* Блок с последними двумя пунктами - занимает 1 колонку на md+, начиная с 3-й */} 
        <div className="md:col-span-1 flex flex-wrap">
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">Enthusiastic about</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">Language Learning, Art & AI</p>
          </div>
          <div className="mb-4">
            <AnimateOnScroll>
              <p className="text-lg">From</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">Kazakhstan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features; 