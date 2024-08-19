"use client";
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Rocket, X } from "lucide-react";
import Link from "next/link";

const HelpMark = () => {
  const [displayHelp, setDisplayHelp] = useState(false);

  const openHelp = () => {
    setDisplayHelp(true);
  };

  const closeHelp = () => {
    setDisplayHelp(false);
  };

  return (
    <div className="flex">
      <button className="w-fit h-fit" onClick={openHelp}>
        <QuestionMarkCircledIcon className="text-foreground/40 hover:text-foreground" />
      </button>
      {displayHelp && <HelpBox closeHelp={closeHelp} />}
    </div>
  );
};

const HelpBox = ({ closeHelp }) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center backdrop-blur-md bg-black/10 z-50">
      <div className="w-10/12 md:w-[380px] bg-background dark:bg-foreground drop-shadow-lg rounded-lg flex flex-col items-center p-5">
        <button
          onClick={closeHelp}
          className="flex justify-end text-background text-black hover:text-slate-900/60 text-xs py-1 px-2 bg-black/5 rounded-[2px] self-end"
        >
          close
        </button>
        <h1 className="text-md tracking-wider font-bold mb-2 font-pixel dark:text-background self-start text-xl">
          How to get connected?
        </h1>
        <p className="mb-4 text-[7.4pt] dark:text-background font-light">
          <span className="text-[8.6pt] font-semibold">
            Welcome to Scalyx, where we&apos;re here to make your crypto journey
            easy and exciting! Not sure how to connect your wallet or even what
            a wallet is?
          </span>{" "}
          <br />
          <br />
          No worries—we&apos;ve got you covered. <br />
          On our{" "}
          <a
            href="https://scalyx.info/"
            target="_blank"
            className="text-blue-500 font-bold hover:underline"
          >
            info page
          </a>
          , you&apos;ll find simple guides on everything from setting up your
          first wallet to securely connecting it to our platform. It&apos;s
          easier than you think, and we&apos;re here to help you every step of
          the way.
        </p>
        <Link href={"https://scalyx.info"} target="_blank">
          <Button
            onClick={closeHelp}
            variant="default"
            className="py-7 w-full md:w-[280px] rounded-sm flex items-center justify-center gap-1 mt-2"
          >
            GO INFO PAGE
            <Rocket className="w-[19px]" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HelpMark;
