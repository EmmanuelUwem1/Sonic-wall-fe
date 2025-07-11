"use client";

import { wagmiAdapter, projectId } from "./config"; 
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { mainnet, arbitrum, bsc } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
// import { cookieToInitialState, type Config } from "wagmi";
import { AppWagmiProvider } from "./WagmiProvider";

// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "sonic-wall",
  description:
    "smart contract firewall built on sonic for real-time fraud detection",
  url: "https://sonic-wall-fe.vercel.app/", // origin must match your domain & subdomain
  icons: ["https://sonic-wall-fe.vercel.app/favicon-32x32.png"], // 512x512px icon
};

// Create the modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum, bsc],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

function ContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Removed unused initialState assignment

  return (
    <AppWagmiProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AppWagmiProvider>
  );
}

export default ContextProvider;
