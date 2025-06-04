import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import CasesPreview from "@/components/CasesPreview";
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <Features />
      <Offer />
      <CasesPreview />
      <Footer />
    </main>
  );
}
