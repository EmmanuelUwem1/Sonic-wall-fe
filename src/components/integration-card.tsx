import Image from "next/image";

export default function IntegrationCard() {
    return (
      <div className="flex p-4 w-full gap-4 flex-col justify-center items-start bg-[#2c344078] glass rounded-xl">
        <div className="flex self-start items-center justify-start gap-4">
          <span className="relative flex justify-center items-center h-12 w-12 rounded-2xl overflow-hidden">
            <Image
              alt="icon"
              src="/flat-color-icons--data-configuration.png"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            ></Image>
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">Integration wizard</h2>
            <p className="text-base font-normal opacity-80">Plug and play </p>
            <p className="text-base font-normal opacity-80">Coming soon</p>
          </div>
        </div>
        <button className="self-end text-right gradient-button-bg opacity-100 text-[#DDDDDD] px-3 py-2 rounded-lg cursor-pointer hover:opacity-90 transition-class">
          Configure
        </button>
      </div>
    );
}