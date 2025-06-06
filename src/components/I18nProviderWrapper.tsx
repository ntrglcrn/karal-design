'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

export default function I18nProviderWrapper({ lng, children }: { lng: string; children: ReactNode }) {
  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
} 