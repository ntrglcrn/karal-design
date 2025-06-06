import React from 'react';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { useTranslation } from 'react-i18next';

function Offer() {
  const { t } = useTranslation();
  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px] md:grid md:grid-cols-3 gap-4">
      {/* Text content from Figma */}
      <div className="md:col-span-2">
        <AnimateOnScroll>
          <p className="text-5xl">
            {t('offer_text')}
          </p>
        </AnimateOnScroll>
      </div>
      {/* Note: Figma font size is 116px, adjusted to text-8xl (96px) here. May need further adjustment. */}
    </section>
  );
}

export default Offer; 