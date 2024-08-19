import ScrollingDragon from "@/components/etc/ScrollingDragon";
import SocialsBar from "@/components/etc/SocialsBar";
import AboutSection from "@/components/sections/AboutSection";
import FiveStages from "@/components/sections/FiveStages";
import HeroSection from "@/components/sections/HeroSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-fit overflow-y-scroll scroll-smooth flex flex-col bg-background touch-pan-y relative">
      <ScrollingDragon />
      <HeroSection />
      <AboutSection />
      <FiveStages />
      <RoadmapSection />
      <SocialsBar />
    </main>
  );
}
