'use client';

import React, { useRef, useState } from 'react';
import { allCases } from 'contentlayer/generated';
import Link from 'next/link'; // Assuming Next.js for the Link component and routing
import AnimateOnScroll from '@/components/AnimateOnScroll';

interface Case {
  _id: string;
  title: string;
  date: string;
  slug: string;
  // Add other properties from your case documents if needed for type accuracy
}

const CasesPreview: React.FC = () => {
  // Sort cases by date in descending order and take the latest 3
  const latestCases: Case[] = (allCases as Case[]).sort((a: Case, b: Case) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  // Define video paths based on files in public/video
  const videoPaths = [
    '/video/video.mp4',
    '/video/project 2.mp4',
    '/video/project 1.mp4', // Assuming this order corresponds to the sorted cases
  ];

  // Create an array of refs for videos
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  // State to track hover effect visibility
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Handle mouse enter
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
    }
    // Start the fade-out timer for the lighten effect
    setTimeout(() => {
      setHoveredIndex(null);
    }, 300); // Adjust duration as needed, 300ms for example
  };

  // Handle mouse leave
  const handleMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
    }
    // If the timer hasn't run yet, ensure the effect is removed on mouse leave
    setHoveredIndex(null);
  };

  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px]"> {/* Section takes full width and applies horizontal padding, added mb-[175px] */}
      <AnimateOnScroll>
      <h2 className="">Featured Projects</h2> {/* Стили перемещены в globals.css */}
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Removed px-4 from grid container */}
        {latestCases.map((caseItem: Case, index) => (
          <Link 
            key={caseItem._id} 
            href={`/cases/${caseItem.slug}`} 
            className="block relative p-4 transition-shadow duration-200 overflow-hidden group" // Добавляем группу для ховер эффекта
            style={{ height: '60vh' }} // Set overall card height
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Video for Case Preview */}
            {/* Using index to assign video from the list */}
            <video 
              ref={el => { videoRefs.current[index] = el; }}
              className="absolute top-0 left-0 w-full h-full object-cover" 
              src={videoPaths[index]} 
              loop 
              muted 
              playsInline
            >
              Ваш браузер не поддерживает тег video.
            </video>

            {/* Оверлей для эффекта осветления */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

            {/* Text Overlays */}
            <div className="absolute top-0 left-0 py-4 pl-6 text-[#014D8C]"> {/* Text color set to white for visibility over potential video */}
              <p className="text-lg">UI/UX Design</p> {/* Category */}
            </div>
            
            {/* Hover effect overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-30' : ''}`}
            ></div>

            <div className="absolute bottom-0 left-0 py-4 pl-6 text-[#014D8C]"> {/* Text color set to white for visibility */}
              <AnimateOnScroll delay={index * 100}> {/* Добавляем задержку для каждого кейса */}
              <h3 className="text-lg font-semibold">{caseItem.title}</h3> {/* Case Title */}
              </AnimateOnScroll>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CasesPreview; 