import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ScreensShowcase from "@/components/ScreensShowcase";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import FaircodeInitiative from "@/components/FaircodeInitiative";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Features />
        <HowItWorks />
        <ScreensShowcase />
        <Faq />
        <Cta />
        <FaircodeInitiative />
      </main>
      <Footer />
    </div>
  );
}
