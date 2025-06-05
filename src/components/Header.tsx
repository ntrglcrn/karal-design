import React from 'react';
import Link from 'next/link';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-2 flex items-center justify-between bg-transparent transition-colors duration-300">
      {/* Логотип */}
      <Link href="/">
        <AnimateOnScroll>
          <div className="text-[#014d8c] text-[16px] font-absurdite">
            Karal.Design
          </div>
        </AnimateOnScroll>
      </Link>

      <nav>
        <ul className="flex items-center space-x-12">
          <li>
            <AnimateOnScroll delay={100}>
              <Link href="/cases" className="text-[#014d8c] text-[16px] font-sf-pro-display-regular hover:text-[#1C1C1C]">
                Work
              </Link>
            </AnimateOnScroll>
          </li>
          <li>
            <AnimateOnScroll delay={200}>
              <Link href="/about" className="text-[#014d8c] text-[16px] font-sf-pro-display-regular hover:text-[#1C1C1C]">
                About
              </Link>
            </AnimateOnScroll>
          </li>
          <li>
            <AnimateOnScroll delay={300}>
              <Link href="/contact" className="text-[#014d8c] text-[16px] font-sf-pro-display-regular hover:text-[#1C1C1C]">
                Contact
              </Link>
            </AnimateOnScroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 