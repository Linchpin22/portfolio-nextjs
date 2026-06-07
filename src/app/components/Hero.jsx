"use client";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center w-full h-screen my-10 pb-40 px-4 overflow-x-hidden space-y-2">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:text-5xl md:text-4xl text-3xl text-center"
      >
        Frontend Developer — Next.js & React
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        className="text-2xl max-w-4xl text-center pt-5"
      >
        I build production-grade web applications — not tutorial projects.
        Currently shipping real features at a SaaS company serving institutions
        across India.
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
