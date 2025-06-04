import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="w-full px-4 py-2 flex items-center justify-between bg-white">
      {/* Логотип - используем заглушку, так как это булевая операция в Figma */}
      <div className="text-[#014d8c] text-[24px] font-absurdite">
        {/* Здесь будет ваш логотип, например, SVG или изображение */}
        Karal.Design
      </div>

      <nav>
        <ul className="flex items-center space-x-12">
          <li>
            <Link href="/cases" className="text-[#014d8c] text-[18px] font-sf-pro-display-regular">
              Work
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-[#014d8c] text-[18px] font-sf-pro-display-regular">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-[#014d8c] text-[18px] font-sf-pro-display-regular">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 