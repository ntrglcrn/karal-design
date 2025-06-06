'use client';

import { useEffect } from 'react';
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import CasesPreview from "@/components/CasesPreview";

const CIS_LANGS = ['ru', 'kk', 'uk', 'be', 'ky', 'uz', 'az', 'hy', 'mo'];

export default function RedirectByLang() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lang = navigator.language.slice(0, 2).toLowerCase();
      const isCIS = CIS_LANGS.includes(lang);
      const target = isCIS ? '/ru' : '/en';
      if (!window.location.pathname.startsWith(target)) {
        window.location.replace(target);
      }
    }
  }, []);

  return null;
}
