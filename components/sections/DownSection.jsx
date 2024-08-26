import React from "react";
import { TokenomicsPieChart } from "../etc/TokenomicsPieChart";
import { SocialsBottom } from "../etc/SocialsBottom";
import Link from "next/link";

const DownSection = () => {
  return (
    <section
      id="down"
      className="w-full h-fit flex flex-col bg-bottom relative"
    >
      <div className="w-full h-fit flex px-4 py-6">
        <TokenomicsPieChart />
      </div>
      <div className="w-full h-[500px] md:h-screen lg:h-[300px] flex items-end md:items-center lg:items-end pb-20 justify-center">
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
