import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useTranslation } from 'react-i18next';

function Features() {
  const { t } = useTranslation();
  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px]">
      {/* Основной контейнер, который будет гридом на md+ */}
      <div className="flex flex-col md:grid md:grid-cols-3 gap-4">
        {/* Блок с первыми тремя пунктами - занимает 2 колонки на md+ */}
        <div className="md:col-span-2 flex flex-wrap">
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">{t('currently')}</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">{t('freelancing')}</p>
          </div>
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">{t('specialized_at')}</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">{t('uxui')}</p>
          </div>
          <div className="mb-4">
            <AnimateOnScroll>
              <p className="text-lg">{t('empowering')}</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">{t('digital_products')}</p>
          </div>
        </div>

        {/* Блок с последними двумя пунктами - занимает 1 колонку на md+, начиная с 3-й */} 
        <div className="md:col-span-1 flex flex-wrap">
          <div className="mr-8 mb-4">
            <AnimateOnScroll>
              <p className="text-lg">{t('enthusiastic_about')}</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">{t('language_learning')}</p>
          </div>
          <div className="mb-4">
            <AnimateOnScroll>
              <p className="text-lg">{t('from')}</p>
            </AnimateOnScroll>
            <p className="text-lg text-[#769AB8]">{t('kazakhstan')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features; 