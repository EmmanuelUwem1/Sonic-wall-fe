"use client";
import React from "react";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { usePathname } from "next/navigation";

function Heading() {
  const pathName = usePathname();
  console.log(pathName);

  // Determine what to display in h2
  let title = "Dashboard";
  if (pathName.startsWith("/dashboard/")) {
    title =
      pathName.replace("/dashboard/", "").charAt(0).toUpperCase() +
      pathName.replace("/dashboard/", "").slice(1);
  }

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex justify-start items-center gap-3">
        <h1 className="flex justify-start items-center gap-3 font-bold text-2xl lg:hidden">
          <span className="relative h-10 w-10 md:h-14 md:w-14 rounded-2xl overflow-hidden">
            <Image
              alt=" logo"
              src={"/apple-touch-icon.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </span>
          <span className="max-sm:hidden">Sonic Wall</span>
        </h1>
        <h2 className="text-lg font-semibold max-lg:hidden">{title}</h2>
      </div>
      <div className="flex justify-center items-center">
        <ConnectButton />
      </div>
    </div>
  );
}

export default Heading;
