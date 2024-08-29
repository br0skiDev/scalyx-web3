"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useWeb3Modal } from "@web3modal/wagmi/react";

const ConnectWalletButton = () => {
  const { open, close } = useWeb3Modal();

  return (
    <div className="flex flex-col items-center">
      <Button
        variant="default"
        onClick={() => {
          open();
        }}
      >
        Connect Wallet
      </Button>
    </div>
  );
};

export default ConnectWalletButton;
