import { createContext, useContext, useState } from "react";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [walletProvider, setWalletProvider] = useState("");
  const [walletAddress, setWalletAddress] = useState(null);

  return (
    <WalletContext.Provider
      value={{
        walletAddress,
        setWalletAddress,
        walletProvider,
        setWalletProvider,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
