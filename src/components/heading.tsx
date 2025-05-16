
import Image from "next/image";
import ConnectButton from "./connect-button";
function Heading() {



    return (
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-center gap-3">
          <h1 className="flex justify-start items-center gap-3 font-bold text-2xl lg:hidden">
            <span className="relative h-12 w-12 md:h-14 md:w-14 rounded-2xl overflow-hidden">
              <Image
                alt=" logo"
                src={"/sonic wal logo.jpg"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              ></Image>
              {/* // "viem": "^2.27.3", // "wagmi": "^2.14.16", //
              "@rainbow-me/rainbowkit": "^2.2.3", // "@reown/appkit": "^1.7.3",
              // "@reown/appkit-adapter-wagmi": "^1.7.3", // "ethers": "^6.13.5" */}
            </span>
            <span className="max-sm:hidden">Sonic Wall</span>
          </h1>
          <h2 className="text-lg font-semibold max-lg:hidden">Dashboard</h2>
        </div>
        <ConnectButton />
      </div>
    );
}
export default Heading