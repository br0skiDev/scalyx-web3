"use client";
import React, { createContext, useState, useEffect } from "react";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletID, setWalletID] = useState(null);
  const [tokenBalance, setTokenBalance] = useState(0);

  return (
    <WalletContext.Provider
      value={{
        isWalletConnected,
        setIsWalletConnected,
        walletID,
        setWalletID,
        tokenBalance,
        setTokenBalance,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContext;
