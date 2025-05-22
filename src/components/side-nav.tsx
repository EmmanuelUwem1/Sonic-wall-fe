"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
function SideNav() {
    const pathName = usePathname();


    const navLinks = [
      {
        title: "Dashboard",
        href: "/",
        icon: "/dasboard.png",
        active: "/dasboard.png",
      },
      {
        title: "Rules",
        href: "/dashboard/rules",
        icon: "/trade.png",
        active: "/trade.png",
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: "/Vector.png",
        active: "/Vector.png",
      },
      {
        title: "Integration",
        href: "/dashboard/integration",
        icon: "/carbon_integration.png",
        active: "/carbon_integration.png",
      },
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: "/settings.png",
        active: "/Settings.png",
      },
    ];

    return (
      <>
        {/* // for desktop */}
        <div className="flex glass flex-col justify-start fixed -left-full transition-class lg:sticky lg:top-0 items-start lg:h-screen p-4 bg-[#06122438] w-[20vw] min-w-60 max-lg:hidden cursor-pointer">
          <h1 className="flex justify-start items-center gap-3 font-bold text-2xl pt-4">
            <span className="relative h-10 w-10 rounded-2xl overflow-hidden">
              <Image
                alt=" logo"
                src={"/apple-touch-icon.png"}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              ></Image>
            </span>
            Sonic Wall
          </h1>
          <nav
            className={`flex flex-col w-full justify-start items-start gap-2 rounded-2xl py-6 px-3`}
          >
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.title}
                className={`text-base flex py-2 hover-button text-[#DDDDDD] transition-class px-4 gap-3 font-medium w-full rounded-lg ${
                  link.href === pathName
                    ? "gradient-button-bg opacity-100 text-[#DDDDDD]"
                    : "opacity-70"
                }`}
              >
                <span className="relative h-6 w-6 flex justify-center items-center">
                  <Image
                    alt={link.title}
                    src={link.active}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                  ></Image>
                </span>
                {link.title}
              </Link>
            ))}
          </nav>
        </div>
        {/* // for mobile */}
        <div className="flex w-full justify-between shadow-lg fixed bottom-0 left-0 lg:hidden bg-[#06122460] h-18 z-[10000] py-1 px-2 gap-1 glass rounded-t-lg">
          {navLinks.map((link) => (
            <Link
              href={link.href}
              key={link.title}
              className={`text-xs flex flex-col justify-center items-center opacity-90 py-2 px-1 transition-class hover-button sm:px-4 gap-3 font-medium w-full rounded-lg ${
                link.href === pathName
                  ? " gradient-button-bg opacity-100 text-[#DDDDDD]"
                  : "text-[#ffffffa5]"
              }`}
            >
              <span className="relative h-6 w-6 flex justify-center items-center">
                <Image
                  alt={link.title}
                  src={link.active}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                ></Image>
              </span>
              {link.title}
            </Link>
          ))}
        </div>
      </>
    );
}
export default SideNav