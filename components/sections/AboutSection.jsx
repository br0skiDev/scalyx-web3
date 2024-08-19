import Link from "next/link";
import React from "react";
import { ScalyxPieChart } from "../etc/ScalyxPieChart";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-screen  flex items-center justify-center"
    >
      <div className="w-full flex items-center justify-center py-10 px-4">
        <div className="flex flex-col w-fit">
          <h1 className="md:text-5xl text-2xl text-primary font-light font-pixel">
            SCALYX
          </h1>
          <p className="md:text-xl text-md md:w-[50%] w-full mt-3">
            Scalyx is an innovative ERC-20 token project created by a dedicated
            small team striving to enliven the cryptocurrency market with a new
            and engaging concept. The Scalyx token series is set in a vibrant
            pixel dragon world, where every token depicts the evolution phases
            in the life of a dragon within this mythical realm. The project is
            designed to offer more than just financial value - it aims to create
            an immersive experience that blends real life digital assets with
            the fantasy of the dragon lore.
          </p>
          <p className="text-gray-400 mt-6">
            How to participate?
            <Link href={"https://www.scalyx.info/"} target="_blank">
              <span className="hover:underline underline-offset-4 text-blue-500 text-md ml-1">
                SCALYX INFO PAGE
              </span>
            </Link>
          </p>
          {/* <ScalyxPieChart /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
