"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown10,
  ArrowDownCircle,
  ArrowDownFromLineIcon,
  ArrowRightCircle,
  Coins,
  Info,
} from "lucide-react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
  useReadContract,
  useBalance,
} from "wagmi";
import { useWalletInfo } from "@web3modal/wagmi/react";
import { presaleAbi, presaleAddress } from "@/abi/presaleAbi";
import { useToast } from "../ui/use-toast";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import { formatEther, parseEther } from "viem";

const PaymentCard = () => {
  const { walletInfo } = useWalletInfo();
  const [ethInputValue, setEthInputValue] = useState("");
  const [scalyxInputValue, setScalyxInputValue] = useState("");
  const { address, isConnecting, isDisconnected } = useAccount();
  const [presaleState, setPresaleState] = useState(true);
  const { toast } = useToast();
  const [remainingTime, setRemainingTime] = useState("");
  const [presaleBalance, setPresaleBalance] = useState("");

  const abi = presaleAbi.abi;

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

  // Presale Timer
  const {
    data: endTime,
    refetch: refetchEndTime,
    isError: isEndTimeError,
    error: endTimeError,
  } = useReadContract({
    address: presaleAddress,
    abi: abi,
    functionName: "endTime",
  });

  useEffect(() => {
    const updateRemainingTime = async () => {
      try {
        // Refetch endTime to get the most up-to-date data
        const { data: updatedEndTime, isError, error } = await refetchEndTime();

        if (isError) {
          console.error("Error fetching end time:", error);
          setRemainingTime("Error fetching end time");
          return;
        }

        if (updatedEndTime) {
          const now = Math.floor(Date.now() / 1000);
          const timeLeft = Number(updatedEndTime) - now;

          if (timeLeft <= 0) {
            setRemainingTime("Presale ended");
            setPresaleState(false);
          } else {
            const days = Math.floor(timeLeft / (24 * 60 * 60));
            const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
            const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
            setRemainingTime(`${days}d ${hours}h ${minutes}m left`);
          }
        } else {
          console.warn("End time is undefined");
          setRemainingTime("Unable to determine remaining time");
        }
      } catch (error) {
        console.error("Unexpected error updating remaining time:", error);
        setRemainingTime("Error updating time");
      }
    };

    // Initial update
    updateRemainingTime();

    // Set up interval only if we successfully fetched the end time
    let timer;
    if (endTime) {
      timer = setInterval(updateRemainingTime, 60000); // Update every minute
    } else {
      console.warn("Initial end time fetch failed, not setting up interval");
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [refetchEndTime, endTime]);

  // Additional useEffect for logging
  useEffect(() => {
    if (isEndTimeError) {
      console.error("Error in useReadContract for endTime:", endTimeError);
    }
  }, [isEndTimeError, endTimeError]);

  // Get Balance
  const { data: presaletBalanceData, refetch: refetchBalance } = useBalance({
    address: presaleAddress,
  });

  const seeBalance = async () => {
    try {
      const { data: updatedBalance } = await refetchBalance();

      if (updatedBalance) {
        const balanceInEth = formatEther(updatedBalance.value);
        setPresaleBalance(balanceInEth);
        toast({
          title: "Contract Balance",
          description: `${balanceInEth} ETH`,
        });
      } else {
        throw new Error("Unable to fetch presale balance");
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      toast({
        title: "Error",
        description: "Unable to fetch presale balance",
        variant: "destructive",
      });
    }
  };

  // Buy Tokens
  const { data: hash, error, isPending, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  useEffect(() => {
    console.log("Write Error:", error);
    console.log("Is Write Available:", Boolean(writeContract));
    console.log("Wallet Address:", address);
    console.log("ETH Input Value:", ethInputValue);
    console.log("ABI:", abi);
  }, [error, writeContract, address, ethInputValue, abi]);

  const buyTokens = async () => {
    if (!writeContract) {
      console.error("Write function is not available");
      toast({
        title: "Error",
        description:
          "Transaction cannot be initiated. Please check your wallet connection and input values.",
        variant: "destructive",
      });
      return;
    }

    try {
      await writeContract({
        address: presaleAddress,
        abi: abi,
        functionName: "buyTokens",
        args: [],
        value: ethInputValue ? parseEther(ethInputValue) : undefined,
      });
    } catch (error) {
      console.error("Error buying tokens:", error);
      toast({
        title: "Error",
        description: `Failed to buy tokens: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handlePayment = () => {
    if (!address) {
      connectWalletFirst();
      return;
    }

    if (!ethInputValue || ethInputValue === "0") {
      typeInValueFirst();
      return;
    }

    buyTokens();
  };

  return (
    <div className="w-full md:w-[360px] flex justify-center items-center z-40">
      <div className="p-2 border-2 backdrop-blur-sm border-foreground/20 rounded-2xl">
        <Card className="flex flex-col gap-4 w-fit px-1 dark:bg-slate-50/50 bg-slate-900/50 backdrop-blur-lg shadow-xl transform transition-all duration-500 rounded-b-none">
          <CardHeader className="pt-6 pb-0">
            <span className="">
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
                    <ArrowRightCircle className="mr-1 w-[12px]" />
                    <h1>{walletInfo.name}</h1>{" "}
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
                <div className="flex space-x-1 text-background dark:text-foreground pt-2 text-md font-bold">
                  <span className="font-light">Event: </span>
                  <span>
                    <h1>
                      <span className="font-black">PRESALE</span> has started
                    </h1>
                    <h2 className="text-background dark:text-foreground text-sm font-medium">
                      ⏰ {remainingTime}
                    </h2>
                    <button
                      onClick={seeBalance}
                      className="rounded py-[2.5px] px-[10px] text-xs font-light mt-2 border-[0.8px] border-foreground/20 active:border-foreground/80 active:bg-foreground/20"
                    >
                      See balance
                    </button>
                  </span>
                </div>
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
