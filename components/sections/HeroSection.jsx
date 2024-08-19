"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import PaymentCard from "../etc/PaymentCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { DownloadWhitePaper } from "../etc/DownloadWhitepaper";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = () => {
  const { theme, resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");
  const controls = useAnimation();
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.75,
  });
  const [isDesktop, setIsDesktop] = useState(false);

  const images = {
    dark: "/assets/img/dragon/red/Erwachsener/rot__Erwachsen_-250x250.png",
    light: "/assets/img/dragon/blue/Erwachsener/blau__Erwachsen-250x250.png",
  };
  const dragonImage = currentTheme ? images[currentTheme] : images.light;

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024); // 1024px ist typischerweise die Grenze für lg in Tailwind
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);
    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      if (inView) {
        controls.start({ opacity: 1, y: 0 });
      } else {
        controls.start({ opacity: 0, y: -100 });
      }
    } else {
      controls.start({ opacity: 1, y: 0 }); // Immer sichtbar auf mobilen Geräten
    }
  }, [controls, inView, isDesktop]);

  useEffect(() => {
    setCurrentTheme(theme === "system" ? resolvedTheme : theme);
  }, [theme, resolvedTheme]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isDesktop ? -200 : 0 }}
      animate={controls}
      transition={{ duration: 0.4 }}
      className="relative w-full min-h-screen flex flex-col lg:flex-row justify-around"
    >
      <div id="home" className="h-screen flex justify-center items-center p-4">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="relative"
        >
          {currentTheme && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 1 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <Image src={dragonImage} width={195} height={195} alt="Dragon" />
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, x: 0, y: 55 }}
            animate={{ opacity: 1, x: -180, y: -120 }}
            transition={{ duration: 0.2, delay: 0.5 }}
            exit={{ opacity: 0, transition: { delay: 4, duration: 1 } }}
            className="text-5xl text-primary dark:text-foreground font-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-80 drop-shadow-lg"
          >
            UNLEASH THE DRAGON
          </motion.h1>
          <Image
            src="/assets/img/isle/Insel_groß-ohne wasserfall_800x800.png"
            alt="Island"
            height={400}
            width={400}
            className="rounded-full"
          />
          <div className="fixed bottom-[-95px] left-1/2 -translate-x-1/2 flex flex-col space-y-3">
            <Button
              onClick={() => {
                router.push("#buy");
              }}
              variant="default"
              className="rounded-sm"
            >
              BUY NOW
            </Button>
            <DownloadWhitePaper />
          </div>
        </motion.div>
      </div>

      <div
        id="buy"
        className="md:h-[1080px] lg:h-screen flex justify-center items-center p-4"
      >
        <PaymentCard />
      </div>
      <div className="hidden md:block absolute bottom-5 left-1/2 transform -translate-x-1/2 py-10">
        <Link
          href="#about"
          className="flex flex-col items-center transition-opacity duration-300"
        >
          <span className="text-lg font-thin mb-1 font-pixel opacity-40">
            EXPLORE
          </span>
          <MdKeyboardDoubleArrowDown className="text-4xl opacity-40 hover:opacity-100" />
        </Link>
      </div>
    </motion.div>
  );
};

export default HeroSection;
