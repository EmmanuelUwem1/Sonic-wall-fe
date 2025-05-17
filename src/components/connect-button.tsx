"use client"

import { Account } from "@/app/wallet-connect/account";
import { WalletOptions } from "@/app/wallet-connect/wallet-options";
import { useAccount } from "wagmi";
export default function ConnectButton() {
   
  
    const { isConnected } = useAccount();

    return isConnected ? <Account /> : <WalletOptions />;
  }



{/* <button */}
    //     className="sm:p-3 px-3 py-2 text-base sm:text-lg rounded-lg border border-gray-600 hover:opacity-80 cursor-pointer"
    //     onClick={connectWallet}
    //   >
    //     {" "}
    //     {connectedWallet ? shortenAddress(connectedWallet) : "Connect Wallet"}
    //   </button>