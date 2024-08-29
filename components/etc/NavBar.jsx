import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import HelpMark from "./HelpMark";
import ConnectWalletButton from "./ConnectWalletButton";

const NavBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-fit flex justify-between p-2 z-50 bg-background md:py-6 md:pl-8 md:pr-4">
      <Link href={"/"} className="flex space-x-2">
        <div>
          <Image
            src={"/assets/img/logo/64x85.png"}
            alt="LOGO"
            width={64}
            height={85}
            className="w-[40px] h-auto"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl md:text-3xl font-black tracking-tight">
            SCALYX
          </h1>
          <h2 className="text-[6pt] md:text-[7.8pt] md:text-md font-extralight text-primary">
            UNLEASH THE DRAGON
          </h2>
        </div>
      </Link>

      <div className="flex space-x-2">
        <ConnectWalletButton />

        <div className="flex">
          <HelpMark />
        </div>

        <ModeToggle />
      </div>
    </div>
  );
};

export default NavBar;
