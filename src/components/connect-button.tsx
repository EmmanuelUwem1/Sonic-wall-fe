"use client";
import { useEffect, useState } from "react"
import Web3 from "web3";

export default function ConnectButton() {
    const [connectedWallet, setConnectedWallet] = useState("");
    const [isConnected, setIsConnected] = useState(false);
    
      useEffect(() => {
        const providerUrl = process.env.NEXT_PUBLIC_PROVIDER_URL;
        const web3 = new Web3(providerUrl);
          let provider = (window as any).ethereum;
          
        if (typeof provider !== "undefined") {
            provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
                const account = accounts[0];
                setConnectedWallet(account);
          }).catch((err) => {
            console.log(err);
          });
       
        }
      }, [isConnected]);


    function connectWallet() {
        setIsConnected(!isConnected);
    }
    function shortenAddress(address:string) {
      return `${address.slice(0, 6)}...${address.slice(-4)}`;
    }


    return (
    //   
    );
}
{/* <button */}
    //     className="sm:p-3 px-3 py-2 text-base sm:text-lg rounded-lg border border-gray-600 hover:opacity-80 cursor-pointer"
    //     onClick={connectWallet}
    //   >
    //     {" "}
    //     {connectedWallet ? shortenAddress(connectedWallet) : "Connect Wallet"}
    //   </button>