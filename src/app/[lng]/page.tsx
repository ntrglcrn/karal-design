import I18nProviderWrapper from '@/components/I18nProviderWrapper';
import MainContent from '@/components/MainContent';

export default function HomePage({ params }: { params: any }) {
  return (
    <I18nProviderWrapper lng={params.lng}>
      <MainContent />
    </I18nProviderWrapper>
  );
}

export function generateStaticParams() {
  return [{ lng: 'en' }, { lng: 'ru' }];
} 