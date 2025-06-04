import { allCases } from 'contentlayer/generated';

export async function generateStaticParams() {
  const slugs = allCases.map((caseItem) => ({
    slug: caseItem.slug,
  }));

  return slugs;
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Здесь нужно будет найти конкретный кейс по slug и отобразить его детали
  // const caseItem = allCases.find(caseItem => caseItem.slug === slug);
  
  // if (!caseItem) {
  //   // Обработка случая, если кейс не найден (например, редирект на 404)
  //   // notFound(); // Requires importing notFound from 'next/navigation'
  // }

  return (
    <main>Страница кейса {slug}</main>
  );
} 