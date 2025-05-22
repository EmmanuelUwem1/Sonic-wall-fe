"use client";
import { useEffect, useState } from "react";
import { useAccount, useConnect} from "wagmi";

import { ethers } from "ethers";

export default function WalletGate() {
  const { isConnected, } = useAccount();
  const { connect, connectors } = useConnect();
  const [signature, setSignature] = useState<string | null>(null);

  // Prompt wallet connect on mount if not connected
  useEffect(() => {
    if (!isConnected && connectors.length > 0) {
      connect({ connector: connectors[0] });
    }
  }, [isConnected, connect, connectors]);

  // Request signature once connected
  useEffect(() => {
    const sign = async () => {
      if (isConnected && window.ethereum && !signature) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const message = "Please sign this message to continue.";
        const sig = await signer.signMessage(message);
        setSignature(sig);
      }
    };
    sign();
  }, [isConnected, signature]);

  return null; // No UI needed, but you can show loading or status if you want
}
