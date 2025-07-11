import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ContextProvider from "@/context/AppkitProvider";
import PageTransitionEffect from "@/components/page-transition-effect";
import SideNav from "@/components/side-nav";
import Heading from "@/components/heading";
import WalletGate from "@/components/WalletGate";
// import { headers } from "next/headers"; 


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose the weights you need
});



export const metadata: Metadata = {
  title: "Sonic Wall",
  description:
    "Enhance security with advanced blockchain firewall—prevent unauthorized access, detect threats, and protect your decentralized assets. Stay secure in the evolving digital landscape.",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  // const pathname = await headers().get("x-next-pathname");
  // const headersObj = await headers();
  // const pathName = headersObj.get("x-next-pathname");
  // // const cookies = headersObj.get("cookie");
  // console.log(pathName);
  
  return (
    <html lang="en" className={inter.className}>
      <body className="gradient-class bg-[#000000] ">
        <ContextProvider>
        <WalletGate />
          <PageTransitionEffect>
            <main className="flex w-full h-full relative max-lg:pb-20">
              <SideNav />
              <div className="flex flex-col w-full justify-start items-start gap-4 pt-4 pl-4 pr-4 pb-8 sm:pt-6 sm:pl-6 sm:pr-6 sm:pb-10 md:overflow-y-scroll">
                <Heading />
                {children}
              </div>
            </main>
          </PageTransitionEffect>
        </ContextProvider>
      </body>
    </html>
  );
}
