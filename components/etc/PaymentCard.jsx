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
      <div className="p-2 border-2 border-foreground/20 rounded-2xl">
        <Card className="flex flex-col gap-4 w-fit dark:bg-slate-50/50 bg-slate-900/40 backdrop-blur-lg shadow-xl transform transition-all duration-500 rounded-b-none">
          <CardHeader className="pt-6 pb-0">
            <span>
              <h1 className="font-bold text-2xl text-foreground">
                GET $SCX1 NOW!
              </h1>
              <p className="text-foreground/80 dark:text-foreground-80 text-xs">
                Buy SX1 with ETH
              </p>
            </span>
            <span className="w-full bg-background py-3 rounded-lg flex flex-col items-center justify-center">
              <h2 className="text-primary dark:text-green-500 text-sm font-semibold">
                Presale has started
              </h2>
              <h2 className="text-primary dark:text-green-500 text-sm font-light">
                No wallet connected!
              </h2>
            </span>
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
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
              <button class="button-82-pushable" role="button">
                <span class="button-82-shadow"></span>
                <span class="button-82-edge"></span>
                <span class="button-82-front text">
                  <Coins className="w-[20px] mr-1" />
                  BUY SCALYX
                </span>
              </button>
            </div>
          </CardContent>
        </Card>

        <Card className="flex justify-center items-center mt-2 rounded-b-sm rounded-t-none bg-slate-900/40 dark:bg-slate-50/50 backdrop-blur-lg shadow-md">
          <CardContent className="flex items-center space-x-1 py-2">
            <p className="text-background/70 text-sm select-none dark:text-foreground">
              Not sure yet? -
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
