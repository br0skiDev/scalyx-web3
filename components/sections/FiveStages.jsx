import { ArrowRightIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { TbArrowBigDownLineFilled } from "react-icons/tb";

const FourStages = () => {
  return (
    <section
      id="chapter"
      className="flex flex-col w-full md:py-[200px] py-[50px]"
    >
      <div className="w-full flex flex-col justify-around items-start pl-4">
        <h1 className="md:text-5xl text-2xl text-primary font-light font-pixel">
          CHAPTER
        </h1>
        <div className="flex items-center space-x-2 mt-3">
          <Image
            src={"/assets/img/dragon/red/Ei/Ei_rot-125x125.png"}
            alt="STAGE ONE"
            width={180}
            height={180}
            className="stagesImg rounded-full bg-foreground/5 shadow-md border-4 border-primary"
          />
          <p>SCX1</p>
        </div>
        <TbArrowBigDownLineFilled className="text-4xl text-foreground/10" />

        <div className="flex items-center space-x-2">
          <Image
            src={"/assets/img/dragon/red/Babydrachen/rot__baby_-125x125.png"}
            alt="STAGE TWO"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-md"
          />
          <p>SCX2</p>
        </div>
        <TbArrowBigDownLineFilled className="text-4xl text-foreground/10" />

        <div className="flex items-center space-x-2">
          <Image
            src={
              "/assets/img/dragon/red/Jungdrachen/rot__Jungdrache_-125x125.png"
            }
            alt="STAGE THREE"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-lg"
          />
          <p>SCX3</p>
        </div>
        <TbArrowBigDownLineFilled className="text-4xl text-foreground/10" />

        <div className="flex items-center space-x-2">
          <Image
            src={
              "/assets/img/dragon/red/Erwachsener/rot__Erwachsen_-125x125.png"
            }
            alt="STAGE FOUR"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-xl"
          />
          <p>SCX4</p>
        </div>

        <TbArrowBigDownLineFilled className="text-4xl text-foreground/10" />

        <div className="flex items-center space-x-2">
          <Image
            src={
              "/assets/img/dragon/red/Erwachsener/rot__Erwachsen_-125x125.png"
            }
            alt="STAGE FOUR"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-xl"
          />
          <p>SCALYX NFT</p>
        </div>
      </div>

      <p className="md:pl-4 px-8 md:px-0 text-sm font-thin text-center mt-10 w-full md:w-[540px]">
        Scalyx will be introduced via multiple development stages, each
        representing a key phase in a dragon&apos;s life cycle - from the small
        egg to the majestic adult dragon. As the project progresses, each stage
        will unlock new features and opportunities, reflecting both the
        evolution of the dragon and the growth of the Scalyx ecosystem. With
        Scalyx, you&apos;re not just investing in a token, you&apos;re joining
        an adventure in a world where your digital dragon&apos;s journey mirrors
        the expansion of this unique and dynamic platform.
      </p>
    </section>
  );
};

export default FourStages;
