import React from 'react';
import { allCases } from 'contentlayer/generated';
import Link from 'next/link'; // Assuming Next.js for the Link component and routing

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

  return (
    <section className="py-8 px-4 text-[#014d8c] mb-[100px]"> {/* Section takes full width and applies horizontal padding, added mb-[175px] */}
      <h2 className="text-7xl font-regular mb-6">Featured Projects</h2> {/* Removed px-4 from heading */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Removed px-4 from grid container */}
        {latestCases.map((caseItem: Case, index) => (
          <Link 
            key={caseItem._id} 
            href={`/cases/${caseItem.slug}`} 
            className="block relative p-4 transition-shadow duration-200 overflow-hidden" 
            style={{ height: '60vh' }} // Set overall card height
          >
            {/* Video for Case Preview */}
            {/* Using index to assign video from the list */}
            <video 
              className="absolute top-0 left-0 w-full h-full object-cover" 
              src={videoPaths[index]} 
              autoPlay 
              loop 
              muted 
              playsInline
            >
              Ваш браузер не поддерживает тег video.
            </video>

            {/* Text Overlays */}
            <div className="absolute top-0 left-0 p-4 text-white"> {/* Text color set to white for visibility over potential video */}
              <p className="text-sm">UI/UX Design</p> {/* Category */}
            </div>
            
            <div className="absolute bottom-0 left-0 p-4 text-white"> {/* Text color set to white for visibility */}
              <h3 className="text-lg font-semibold">{caseItem.title}</h3> {/* Case Title */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CasesPreview; 