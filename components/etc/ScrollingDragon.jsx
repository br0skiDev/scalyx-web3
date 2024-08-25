"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ScrollingDragon = () => {
  const [direction, setDirection] = useState("right");
  const { scrollY } = useScroll();
  const [currentSection, setCurrentSection] = useState(-1);
  const [aboutSectionTop, setAboutSectionTop] = useState(0);
  const [heroSectionBottom, setHeroSectionBottom] = useState(0);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);

  const sections = [
    { id: "hero", text: "BUY NOW!" },
    { id: "about", text: "🤔 SCALYX?" },
    { id: "chapter", text: "✨ 𝟱 Chapter!" },
    { id: "down", text: "Join The Community!" },
  ];

  // Vertikale Bewegung basierend auf Scroll-Position
  const y = useTransform(scrollY, [0, 5000], ["5vh", "95vh"]);

  // Horizontale Bewegung für Schlängellinie
  const x = useTransform(
    scrollY,
    [0, 1250, 2500, 3750, 5000],
    [
      "calc(100vw - -10px)",
      "calc(100vw - 280px)",
      "calc(100vw - 150px)",
      "calc(100vw - 175px)",
      "calc(100vw - 100px)",
    ]
  );

  // Größenänderung beim Scrollen
  const scale = useTransform(scrollY, [0, 5000], [0.45, 4]);

  useEffect(() => {
    const unsubscribeY = y.onChange((latest) => {
      setDirection(latest > y.getPrevious() ? "right" : "left");
    });

    const aboutSection = document.getElementById("about");
    const heroSection = document.getElementById("hero");
    if (aboutSection) {
      setAboutSectionTop(aboutSection.offsetTop);
    }
    if (heroSection) {
      setHeroSectionBottom(heroSection.offsetTop + heroSection.offsetHeight);
    }

    const observers = sections.map((section, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setCurrentSection(index);
            }
          });
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(section.id);
      if (element) observer.observe(element);

      return observer;
    });

    const unsubscribeScroll = scrollY.onChange((latest) => {
      const shouldShow = latest >= aboutSectionTop && currentSection > 0;
      setShowSpeechBubble(shouldShow);
    });

    return () => {
      unsubscribeY();
      unsubscribeScroll();
      observers.forEach((observer) => observer.disconnect());
    };
  }, [y, sections, scrollY, aboutSectionTop, currentSection]);

  return (
    <motion.div style={{ x, y }} className="fixed z-30 pointer-events-none">
      <motion.div style={{ scale }} className="origin-center">
        <Image
          src="/assets/img/dragon2.gif"
          width={100}
          height={100}
          alt="Flying Dragon"
          className={`transition-transform duration-300 ${
            direction === "left" ? "scale-x-[-1]" : ""
          }`}
        />
      </motion.div>
      {showSpeechBubble &&
        currentSection > 0 &&
        currentSection < sections.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6 }}
            className="speech-bubble text-md drop-shadow-lg bg-white p-2 rounded-lg shadow-lg absolute top-[-175px] right-[90px] text-primary"
          >
            <h1 className="font-light font-pixel">
              {sections[currentSection].text}
            </h1>
          </motion.div>
        )}
    </motion.div>
  );
};

export default ScrollingDragon;
