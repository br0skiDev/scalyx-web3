"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import { Coins, Info } from "lucide-react";
import { useAccount, useContractWrite } from "wagmi";
import { useWalletInfo } from "@web3modal/wagmi/react";
import { presaleAbi, presaleAddress } from "@/abi/presaleAbi";
import { useToast } from "../ui/use-toast";
import { TriangleDownIcon } from "@radix-ui/react-icons";

const PaymentCard = () => {
  // useState Variablen
  const [ethInputValue, setEthInputValue] = useState("");
  const [scalyxInputValue, setScalyxInputValue] = useState("");
  const { address, isConnecting, isDisconnected } = useAccount();
  const [presaleState, setPresaleState] = useState(true);
  const { walletInfo } = useWalletInfo();
  const { toast } = useToast();

  // Toasts
  const connectWalletFirst = () => {
    toast({
      title: "No wallet connected",
      description: "Please connect your wallet first.",
    });
  };

  const typeInValueFirst = () => {
    toast({
      description:
        "To purchase Scalyx (SCX1), please enter the amount you wish to buy.",
    });
  };

  const whichAddress = () => {
    toast({
      title: walletInfo.name,
      description: address,
    });
  };

  // Handle Input Change: ETH Value
  const handleEthInputChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,6}$/;
    if (value === "" || regex.test(value)) {
      setEthInputValue(value);
      if (value === "") {
        setScalyxInputValue("");
      } else {
        setScalyxInputValue((value * 250000).toFixed(6)); // Convert ETH to Scalyx
      }
    }
  };

  // Handle Input Change: Scalyx Value
  const handleScalyxInputChange = (e) => {
    const value = e.target.value;
    const regex = /^\d*\.?\d{0,6}$/;
    if (value === "" || regex.test(value)) {
      setScalyxInputValue(value);
      if (value === "") {
        setEthInputValue("");
      } else {
        setEthInputValue((value / 250000).toFixed(6)); // Convert Scalyx to ETH
      }
    }
  };

  const handlePayment = () => {
    if (!address) {
      connectWalletFirst();
      return;
    }

    if (address && !scalyxInputValue) {
      typeInValueFirst();
      return;
    }

    try {
      const { write: buyTokens } = handlePayment({
        address: presaleAddress,
        abi: presaleAbi,
        functionName: "buyTokens",
        overrides: {
          value: ethInputValue ? ethers.utils.parseEther(ethInputValue) : 0,
        },
      });
      buyTokens();
    } catch (error) {
      console.error(error);
      alert("Payment failed: " + error.message);
    }
  };

  return (
    <div className="w-full md:w-[360px] flex justify-center items-center z-40">
      <div className="p-2 border-2 backdrop-blur-sm border-foreground/20 rounded-2xl">
        <Card className="flex flex-col gap-4 w-fit px-1 dark:bg-slate-50/50 bg-slate-900/50 backdrop-blur-lg shadow-xl transform transition-all duration-500 rounded-b-none">
          <CardHeader className="pt-6 pb-0">
            <span>
              <h1 className="font-bold text-2xl text-foreground">
                GET $SCX1 NOW!
              </h1>
              <p className="text-foreground/80 dark:text-foreground-80 text-xs">
                Buy SCX1 with ETH
              </p>
            </span>

            <span className="w-full bg-black dark:bg-background py-3 rounded-lg flex flex-col items-center justify-center">
              {walletInfo && (
                <h2 className="text-green-500 text-sm blur-[0.55px] font-light text-center py-2">
                  Wallet connected! <br />{" "}
                  <button
                    onClick={whichAddress}
                    className="cursor-pointer flex w-full items-center justify-center text-[0.68rem] mt-2 font-medium active:text-foreground"
                  >
                    <h1>{walletInfo.name}</h1>{" "}
                    <Info className="ml-1 w-[12px]" />
                  </button>
                </h2>
              )}
              {!walletInfo && (
                <h2 className="text-primary blur-[0.55px] text-sm font-medium text-center py-2">
                  No wallet connected!
                </h2>
              )}
            </span>

            {presaleState && (
              <>
                <h2 className="text-background dark:text-foreground pt-2 text-sm font-bold">
                  Presale has started
                </h2>
                <h2 className="text-background dark:text-foreground text-sm font-medium">
                  ⏰ 7 days left
                </h2>
              </>
            )}
          </CardHeader>
          <CardContent className="flex flex-col space-y-2">
            <label className="text-sm text-background dark:text-foreground font-bold opacity-50 select-none">
              SCX1
            </label>
            <div className="relative">
              <input
                value={scalyxInputValue}
                onChange={handleScalyxInputChange}
                type="text"
                className="buyInput"
                inputMode="decimal"
              />
              <Image
                src={"/assets/img/logo/etc/scalyx-currency.png"}
                alt="SCX1"
                height={48}
                width={48}
                className="absolute right-[9px] top-1/2 transform -translate-y-1/2 h-[42px] w-auto"
              />
            </div>

            <label className="text-sm text-background dark:text-foreground font-bold opacity-50 select-none">
              ETH
            </label>
            <div className="relative">
              <input
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
              <button
                className="button-82-pushable"
                onClick={handlePayment}
                role="button"
              >
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
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
              target="_blank"
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
