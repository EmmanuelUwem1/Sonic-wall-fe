"use client"
import { motion } from "framer-motion";

export default function PageTransitionEffect({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <motion.div
        className="flex h-screen w-screen overflow-x-hidden overflow-y-scroll relative pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    );
}
