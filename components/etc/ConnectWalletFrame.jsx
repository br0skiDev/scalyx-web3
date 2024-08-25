"use client";
import React, { useEffect, useState } from "react";
import {
  detectInjectedProviders,
  connectWallet,
} from "../../lib/walletConnector";

export const ConnectWalletFrame = () => {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [walletID, setWalletID] = useState(null);

  useEffect(() => {
    const availableProviders = detectInjectedProviders();
    setProviders(availableProviders);

    if (availableProviders.length === 1) {
      // Wenn nur ein Provider verfügbar ist, automatisch auswählen
      setSelectedProvider(availableProviders[0]);
    }
  }, []);

  const handleConnect = async () => {
    if (selectedProvider) {
      const { walletID } = await connectWallet(selectedProvider);
      setWalletID(walletID);
    }
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center z-50">
      <div className="">
        {walletID ? (
          <p>Wallet Connected: {walletID}</p>
        ) : (
          <div>
            <select
              onChange={(e) => setSelectedProvider(providers[e.target.value])}
            >
              {providers.map((provider, index) => (
                <option key={index} value={index}>
                  {provider.name || "Unknown Provider"}
                </option>
              ))}
            </select>
            <button onClick={handleConnect} disabled={!selectedProvider}>
              Connect Wallet
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
