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

  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6">Последние кейсы</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {latestCases.map((caseItem: Case) => (
          <div key={caseItem._id} className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{caseItem.title}</h3>
            <p className="text-gray-600 mb-4">{new Date(caseItem.date).toLocaleDateString()}</p>
            <Link href={`/cases/${caseItem.slug}`} className="text-blue-600 hover:underline">
                Подробнее
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CasesPreview; 