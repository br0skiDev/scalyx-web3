import { ethers } from "ethers";

// Funktion zur Erkennung aller verfügbaren injected Wallet-Provider
export const detectInjectedProviders = () => {
  if (typeof window === "undefined") return [];

  let providers = [];

  if (window.ethereum) {
    if (window.ethereum.providers?.length) {
      providers = window.ethereum.providers.map((provider) => {
        let providerInfo = { ...provider }; // Erstellen einer neuen Kopie des Providers
        if (provider.isMetaMask) {
          providerInfo.name = "MetaMask";
        } else if (provider.isBraveWallet) {
          providerInfo.name = "Brave Wallet";
        } else if (provider.isCoinbaseWallet) {
          providerInfo.name = "Coinbase Wallet";
        } else if (provider.isExodus) {
          providerInfo.name = "Exodus";
        } else {
          providerInfo.name = "Unknown Provider";
        }
        return providerInfo;
      });
    } else {
      let provider = { ...window.ethereum }; // Erstellen einer neuen Kopie von window.ethereum
      if (provider.isMetaMask) {
        provider.name = "MetaMask";
      } else if (provider.isBraveWallet) {
        provider.name = "Brave Wallet";
      } else if (provider.isCoinbaseWallet) {
        provider.name = "Coinbase Wallet";
      } else if (provider.isExodus) {
        provider.name = "Exodus";
      } else {
        provider.name = "Unknown Provider";
      }
      providers = [provider];
    }
  }

  // Zusätzliche spezifische Wallets (wenn kein `window.ethereum` genutzt wird)
  if (window.BinanceChain) {
    const binanceProvider = {
      ...window.BinanceChain,
      name: "Binance Chain Wallet",
    };
    providers.push(binanceProvider);
  }

  if (window.bitget && window.bitget.ethereum) {
    const bitgetProvider = { ...window.bitget.ethereum, name: "Bitget Wallet" };
    providers.push(bitgetProvider);
  }

  return providers;
};

export const connectWallet = async (provider) => {
  if (!provider) {
    throw new Error("No provider found");
  }

  try {
    // Überprüfen, ob der Provider die `eth_requestAccounts` Methode unterstützt
    if (!provider.request) {
      throw new Error("Provider does not support the required method");
    }

    // Anfrage zur Verbindung der Wallet
    await provider.request({ method: "eth_requestAccounts" });

    // Erstellen eines Ethers Providers und Signers
    const ethersProvider = new ethers.providers.Web3Provider(provider);
    const signer = ethersProvider.getSigner();
    const walletID = await signer.getAddress();

    return { provider: ethersProvider, signer, walletID };
  } catch (error) {
    console.error("Wallet connection failed", error);
    throw new Error(`Wallet connection failed: ${error.message}`);
  }
};
