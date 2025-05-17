"use client";

import { useState } from "react";
// import { Account } from "@/app/wallet-connect/account";
import { useAccount, useConnect } from "wagmi";

export default function ConnectButton() {
  const { isConnected, address } = useAccount();
  const { connect, connectors } = useConnect();
  const [showOptions, setShowOptions] = useState(false);

  return isConnected ? (
    <div className="p-3 border border-gray-600 rounded-lg">
      Connected:{" "}
      {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : "Loading..."}
    </div>
  ) : (
    <div>
      <button
        className="sm:p-3 px-3 py-2 text-base sm:text-lg rounded-lg border border-gray-600 hover:opacity-80 cursor-pointer"
        onClick={() => setShowOptions(!showOptions)}
      >
        {"Connect Wallet"}
      </button>

      {showOptions && (
        <div className="mt-2">
          {connectors.map((connector) => (
            <button
              key={connector.id}
              onClick={() => connect({ connector })}
              className="block p-2 border border-gray-600 rounded-lg mt-1 hover:opacity-80"
            >
              {connector.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
