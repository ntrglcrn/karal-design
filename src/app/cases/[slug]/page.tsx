export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>Страница кейса {params.slug}</main>
  );
} 