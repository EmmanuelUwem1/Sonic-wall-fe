"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { http, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bscTestnet,
  bsc,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "sonic wall",
  projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
  chains: [mainnet, polygon, optimism, arbitrum, base, bscTestnet, bsc],
  ssr: true, // If your dApp uses server side rendering (SSR),
  transports: {
    [bsc.id]: http(process.env.NEXT_PUBLIC_RPC_URL),
  },
});
const queryClient = new QueryClient();
export function AppWagmiProvider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
