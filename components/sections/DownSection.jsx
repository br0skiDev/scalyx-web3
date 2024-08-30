import React from "react";
import { TokenomicsPieChart } from "../etc/TokenomicsPieChart";
import { SocialsBottom } from "../etc/SocialsBottom";
import Link from "next/link";

const DownSection = () => {
  return (
    <section
      id="down"
      className="relative w-full h-fit py-20 flex flex-col bg-bottom"
    >
      <div className="z-10 absolute top-0 w-full h-[80%] bg-gradient-to-b from-background"></div>
      <div className="w-full pt-10 mb-6 h-fit flex items-center justify-center px-4">
        <TokenomicsPieChart />
      </div>
      <div className="w-full flex items-end md:items-center lg:items-end justify-center z-20">
        <SocialsBottom />
      </div>

      <div className="absolute bottom-4 left-0 w-full bg-background flex items-center justify-center space-x-4 py-2">
        <Link href={"/"} className="font-bold hover:scale-110">
          Terms
        </Link>
        <Link href={"/"} className="font-bold hover:scale-110">
          Privacy
        </Link>
        <Link href={"/"} className="font-bold hover:scale-110">
          Cookies
        </Link>
      </div>
    </section>
  );
};

export default DownSection;
