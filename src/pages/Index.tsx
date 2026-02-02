import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeDo from "@/components/WhatWeDo";
import MissionSection from "@/components/MissionSection";
import ImageShowcase from "@/components/ImageShowcase";
import ProblemsSection from "@/components/ProblemsSection";
import MarketOpportunity from "@/components/MarketOpportunity";
import EarlyTraction from "@/components/EarlyTraction";
import RoadmapSection from "@/components/RoadmapSection";
import VisionSection from "@/components/VisionSection";
import CircularEcosystem from "@/components/CircularEcosystem";
import ContactSection from "@/components/ContactSection";
import ContactFloatingButtons from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <MissionSection />
      <ImageShowcase />
      <ProblemsSection />
      <MarketOpportunity />
      <EarlyTraction />
      <RoadmapSection />
      <VisionSection />
      <CircularEcosystem />
      <ContactSection />
      <ContactFloatingButtons />
    </main>
  );
};

export default Index;
