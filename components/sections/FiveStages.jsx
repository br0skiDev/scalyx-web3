import { ArrowRightIcon, ThickArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { TbArrowBigRightLineFilled } from "react-icons/tb";

const FourStages = () => {
  return (
    <section
      id="chapter"
      className="flex flex-col w-full md:py-[500px] py-[500px]"
    >
      {" "}
      <h1 className="self-center md:text-5xl text-2xl text-primary font-light font-pixel">
        CHAPTER
      </h1>
      <div className="w-full flex justify-around items-start mt-4">
        <div className="flex items-center space-y-2 mt-3 flex-col">
          <Image
            src={"/assets/img/dragon/red/Ei/Ei_rot-125x125.png"}
            alt="STAGE ONE"
            width={180}
            height={180}
            className="stagesImg rounded-full bg-foreground/5 shadow-md border-4 border-primary"
          />
          <p className="font-bold text-sm">SCX1</p>
        </div>
        <TbArrowBigRightLineFilled className="text-2xl text-foreground/10 self-center" />

        <div className="flex items-center space-y-2 mt-3 flex-col">
          <Image
            src={"/assets/img/dragon/red/Babydrachen/rot__baby_-125x125.png"}
            alt="STAGE TWO"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-md"
          />
          <p className="font-bold text-sm">SCX2</p>
        </div>
        <TbArrowBigRightLineFilled className="text-2xl text-foreground/10 self-center" />

        <div className="flex items-center space-y-2 mt-3 flex-col">
          <Image
            src={
              "/assets/img/dragon/red/Jungdrachen/rot__Jungdrache_-125x125.png"
            }
            alt="STAGE THREE"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-lg"
          />
          <p className="font-bold text-sm">SCX3</p>
        </div>
        <TbArrowBigRightLineFilled className="text-2xl text-foreground/10 self-center" />

        <div className="flex items-center space-y-2 mt-3 flex-col">
          <Image
            src={
              "/assets/img/dragon/red/Erwachsener/rot__Erwachsen_-125x125.png"
            }
            alt="STAGE FOUR"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-xl"
          />
          <p className="font-bold text-sm">SCX4</p>
        </div>

        <TbArrowBigRightLineFilled className="text-2xl text-foreground/10 self-center" />

        <div className="flex items-center space-y-2 mt-3 flex-col">
          <Image
            src={
              "/assets/img/dragon/red/Erwachsener/rot__Erwachsen_-125x125.png"
            }
            alt="STAGE FOUR"
            width={180}
            height={180}
            className="stagesImg rounded-full blur-xl"
          />
          <p className="font-bold text-sm">NFT</p>
        </div>
      </div>
      <p className="self-center md:pl-4 px-8 md:px-0 text-sm font-thin text-center mt-6 w-full md:w-[640px]">
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
