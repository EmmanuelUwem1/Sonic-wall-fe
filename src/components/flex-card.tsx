"use client";

import { motion } from "framer-motion";

type FlexCardProps = {
  title: string;
  value: string | number; // Accept both string and number
  unit?: string;
};

export default function FlexCard({ title, value, unit }: FlexCardProps) {
  const valueStr = String(value); // Ensure value is a string
  return (
    <div className="flex px-4 glass py-3 w-full gap-4 flex-col justify-center items-start bg-[#2c34406a] rounded-xl">
      <span className="text-base font-normal opacity-85">{title}</span>
      <span className="font-bold text-3xl flex overflow-y-hidden h-[2rem] space-x-1">
        {valueStr.split("").map((digit, index) => (
          <motion.span
            key={index}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {digit}
          </motion.span>
        ))}
        <span>{unit}</span>
      </span>
    </div>
  );
}