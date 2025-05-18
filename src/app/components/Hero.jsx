"use client"
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react" 

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full pb-40 h-screen overflow-x-hidden space-y-2">
   <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl text-center"
      >
        Hi, I’m Anuj Tiwari
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-2xl"
      >
        I design and build things.
      </motion.h2>
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      >
        <ChevronsDown
          size={36}
          className="mt-20 animate-bounce cursor-pointer"
        />
      </motion.a>
    </section>
  );
}
