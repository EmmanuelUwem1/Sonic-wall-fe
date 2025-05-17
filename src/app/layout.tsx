import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers/providers";


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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en" className={inter.className}>
      <body className="h-screen w-screen overflow-hidden">
        <Providers>
            {children}
            </Providers>
      </body>
    </html>
  );
}
