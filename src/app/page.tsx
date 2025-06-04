import Image from "next/image";
import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import Features from "./components/Features.tsx";
import Offer from "./components/Offer.tsx";
import CasesPreview from "./components/CasesPreview.tsx";
import Footer from "./components/Footer.tsx";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Offer />
      <CasesPreview />
      <Footer />
    </main>
  );
}
