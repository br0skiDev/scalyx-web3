"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ButtonIcon } from "@radix-ui/react-icons";
import { FaMoneyBill } from "react-icons/fa6";
import { Coins } from "lucide-react";
import HelpMark from "./HelpMark";

const PaymentCard = () => {
  // useState Variablen
  const [ethInputValue, setEthInputValue] = useState(null);
  const [scalyxInputValue, setScalyxInputValue] = useState(null);

  const submitForm = () => {
    alert("Form submitted");
  };

  //   Handle Input Change: ETH-Wert
  const handleEthInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d*\.?\d*$/.test(value) && value >= 0)) {
      setEthInputValue(value);
    }
  };

  //   Handle Input Change: SCALYX-Wert
  const handleScalyxInputChange = (e) => {
    const value = e.target.value;
    if (value === "" || (/^\d*\.?\d*$/.test(value) && value >= 0)) {
      setScalyxInputValue(value);
    }
  };

  return (
    <div className="w-full md:w-[360px] flex justify-center items-center z-40">
      <div>
        <Card className="flex flex-col gap-4 w-fit dark:bg-slate-50/50 bg-slate-900/40 backdrop-blur-lg shadow-xl transform transition-all duration-500 rounded-b-none">
          <CardHeader className="">
            <span>
              <h1 className="font-black text-xl dark:text-primary text-primary">
                GET $SCX1 NOW!
              </h1>
              <p className="text-background/40 dark:text-background-40 text-xs">
                Here you can buy SX1 with ETH.
              </p>
            </span>
            <span className="w-full bg-background py-3 rounded-lg flex items-center justify-center">
              <h2 className="text-green-500 text-sm">Presale has started</h2>
            </span>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <div className="w-full flex flex-col">
              <h1 className="text-background text-sm dark:text-foreground">
                Supported Provider:{" "}
              </h1>
              <div className="flex space-x-2">
                <Image
                  src="https://github.com/MetaMask/brand-resources/raw/master/SVG/SVG_MetaMask_Icon_Color.svg"
                  alt="METAMASK"
                  width={45}
                  height={45}
                />
                <Image
                  src="https://www.exodus.com/brand/img/logo.svg"
                  alt="EXODUS"
                  width={30}
                  height={30}
                />
              </div>
            </div>
            <p className="text-[7.5pt] text-background dark:text-foreground select-none">
              To purchase SCALYX, please use a web3 browser within your wallet
              app on your smartphone. <br />
              If you&apos;re on a desktop, you&apos;ll need a browser extension
              like MetaMask.
            </p>

            <label className="text-sm text-background dark:text-foreground font-bold opacity-50 select-none">
              SCX1
            </label>
            <div className="relative">
              <input
                placeholder="SCX1"
                value={scalyxInputValue}
                onChange={handleScalyxInputChange}
                type="text"
                className="buyInput"
                inputMode="decimal"
              />
              <Image
                src={"/assets/img/logo/64x85.png"}
                alt="SCX1"
                height={48}
                width={48}
                className="absolute right-[20px] top-1/2 transform -translate-y-1/2 h-[42px] w-auto"
              />
            </div>

            <label className="text-sm text-background dark:text-foreground font-bold opacity-50 select-none">
              ETH
            </label>
            <div className="relative">
              <input
                placeholder="ETH"
                value={ethInputValue}
                onChange={handleEthInputChange}
                type="text"
                className="buyInput"
                inputMode="decimal"
              />
              <Image
                src={"/assets/img/logo/etc/eth.png"}
                alt="ETH"
                height={48}
                width={48}
                className="absolute right-[9px] top-1/2 transform -translate-y-1/2 h-[42px] w-auto"
              />
            </div>

            <div className="pt-2 w-full">
              <Button
                variant="default"
                className="w-full py-8 text-xl rounded-none"
              >
                <Coins className="w-[20px] mr-1" />
                BUY SCALYX
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex justify-center items-center mt-2 rounded-b-sm rounded-t-none bg-slate-900/40 dark:bg-slate-50/50 backdrop-blur-lg shadow-md">
          <CardContent className="flex items-center space-x-1 py-2">
            <p className="text-background/70 text-sm select-none dark:text-foreground">
              Not sure? -
            </p>
            <Link
              href={"https://www.scalyx.info/"}
              className="text-xs font-semibold text-background dark:text-foreground hover:underline underline-offset-2"
            >
              INFO PAGE
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentCard;
