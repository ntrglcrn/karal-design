'use client';

import { useTranslation } from 'react-i18next';

export default function ClientHome() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </main>
  );
} 