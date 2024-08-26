import React from "react";
import { TokenomicsPieChart } from "../etc/TokenomicsPieChart";
import { SocialsBottom } from "../etc/SocialsBottom";

const DownSection = () => {
  return (
    <section id="down" className="w-full h-fit flex flex-col bg-bottom">
      <div className="w-full h-fit flex px-4 py-6">
        <TokenomicsPieChart />
      </div>
      <div className="w-full h-[500px] md:h-screen lg:h-[300px] flex items-end md:items-center lg:items-end pb-20 justify-center">
        <SocialsBottom />
      </div>
    </section>
  );
};

export default DownSection;
