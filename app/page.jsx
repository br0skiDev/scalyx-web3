import { ConnectWalletFrame } from "@/components/etc/ConnectWalletFrame";
import ScrollingDragon from "@/components/etc/ScrollingDragon";
import SocialsBar from "@/components/etc/SocialsBar";
import AboutSection from "@/components/sections/AboutSection";
import FiveStages from "@/components/sections/FiveStages";
import HeroSection from "@/components/sections/HeroSection";
import DownSection from "@/components/sections/DownSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-fit overflow-y-auto overflow-x-hidden scroll-smooth flex flex-col bg-background touch-pan-y relative">
      <ScrollingDragon />
      <HeroSection />
      <AboutSection />
      <FiveStages />
      <DownSection />
      <SocialsBar />
    </main>
  );
}
