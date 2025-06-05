import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Offer from "@/components/Offer";
import CasesPreview from "@/components/CasesPreview";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <Features />
      <Offer />
      <CasesPreview />
    </main>
  );
}
