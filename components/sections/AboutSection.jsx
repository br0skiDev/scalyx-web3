import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-screen  flex items-center justify-center"
    >
      <div className="flex w-full flex-col py-6 px-4">
        <h1 className="md:text-5xl text-2xl text-primary font-light font-pixel">
          SCALYX
        </h1>
        <p className="md:text-xl text-md md:w-[50%] w-full mt-3">
          Scalyx is an innovative ERC-20 token project created by a dedicated
          small team striving to enliven the cryptocurrency market with a new
          and engaging concept. The Scalyx token series is set in a vibrant
          pixel dragon world, where every token depicts the evolution phases in
          the life of a dragon within this mythical realm. The project is
          designed to offer more than just financial value - it aims to create
          an immersive experience that blends real life digital assets with the
          fantasy of the dragon lore.
        </p>

        <div classname="flex">
          <Image
            src={
              "/assets/img/dragon/gold/Erwachsener/gelb__gold__Erwachsen_-250x250.png"
            }
            alt="DRAGON"
            width={80}
            height={80}
          />
          <p className="text-gray-400">
            How to participate?
            <Link href={"https://www.scalyx.info/"} target="_blank">
              <span className="hover:underline underline-offset-4 text-blue-500 ml-1">
                SCALYX INFO PAGE
              </span>
            </Link>
          </p>
        </div>

        <div className="md:w-[50%] w-full mt-12">
          <Marquee speed="60" play>
            <div className="mr-8 flex w-[220px] items-center justify-center py-2 rounded-2xl bg-gray-200/80 dark:bg-white/80 hover:bg-white dark:hover:bg-white">
              {" "}
              <Image
                src={"/assets/img/uniswap.svg"}
                alt="UNISWAP"
                width={50}
                height={50}
                className="h-[60px] w-auto"
              />
            </div>
            <div className="mr-8 flex w-[220px] items-center justify-center py-2 rounded-2xl bg-gray-200/80 dark:bg-white/80 hover:bg-white dark:hover:bg-white">
              {" "}
              <Image
                src={"/assets/img/ethereum.png"}
                alt="ETHEREUM"
                width={50}
                height={50}
                className="h-[60px] w-auto"
              />
            </div>
            <div className="mr-8 flex w-[220px] items-center justify-center py-2 rounded-2xl bg-gray-200/80 dark:bg-white/80 hover:bg-white dark:hover:bg-white">
              {" "}
              <Image
                src={"/assets/img/etherscan.png"}
                alt="ETHEREUM"
                width={50}
                height={50}
                className="h-[60px] w-auto"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
