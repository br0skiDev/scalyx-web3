"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";

const ConnectWalletButton = () => {
  const { walletInfo } = useWalletInfo();
  const [isConnected, setIsConnected] = useState(false);
  const { open, close } = useWeb3Modal();

  useEffect(() => {
    if (walletInfo) {
      setIsConnected(true);
    }
  }, [walletInfo]);

  return (
    <div className="flex flex-col items-center">
      {!walletInfo && (
        <Button
          variant="default"
          className="rounded-full px-4"
          onClick={() => {
            open();
          }}
        >
          Connect Wallet
        </Button>
      )}
      {walletInfo && (
        <span className="bg-primary rounded-full dark:bg-primary ">
          <w3m-account-button />
        </span>
      )}
    </div>
  );
};

export default ConnectWalletButton;
