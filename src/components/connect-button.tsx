

import { Account } from "@/app/wallet-connect/account";
import { WalletOptions } from "@/app/wallet-connect/wallet-options";
import { useAccount } from "wagmi";
export default function ConnectButton() {
   
  function ConnectWallet() {
    const { isConnected } = useAccount();
    if (isConnected) return <Account />;
    return <WalletOptions />;
  }
 
    return (
  <ConnectWallet />
    );
}
{/* <button */}
    //     className="sm:p-3 px-3 py-2 text-base sm:text-lg rounded-lg border border-gray-600 hover:opacity-80 cursor-pointer"
    //     onClick={connectWallet}
    //   >
    //     {" "}
    //     {connectedWallet ? shortenAddress(connectedWallet) : "Connect Wallet"}
    //   </button>