"use client"

import Joke from "./components/Joke";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Skill from "./components/Skills";
import Experience from "./components/Experience";
import { motion} from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://videos.pexels.com/video-files/2611250/2611250-sd_640_360_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0" />

        {/* Foreground content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="bg-[#F2F2F2] md:px-16 p-6 md:py-12 py-8 mb-12">
  <div className="flex items-center gap-4 mb-10">
    <hr className="flex-grow border-t-2 border-gray-900" />
    <h2 className="text-4xl font-bold text-gray-800 tracking-wide">About</h2>
    <hr className="flex-grow border-t-2 border-gray-900" />
  </div>

  <div className="flex flex-col md:flex-row md:gap-10 items-center">
    {/* Text Section */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="md:w-1/2 text-justify text-gray-700 text-lg leading-relaxed space-y-4"
    >
  <p>
  I&apos;m a B.Tech graduate and a passionate full stack developer skilled in building clean, user-friendly web apps using React, Next.js, Tailwind CSS, and JavaScript.
</p>
<p>
  Through two internships, I gained hands-on experience, improved my problem-solving skills, and worked closely with cross-functional teams.
</p>
<p>
  I’m confident in both frontend and backend tasks, and I’m always eager to learn, adapt, and contribute effectively to any team.
</p>
    </motion.div>

    {/* Image Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="md:w-1/2 w-full mt-8 md:mt-0"
    >
      <div className="w-full h-[400px] bg-white rounded-md shadow-md overflow-hidden">
        <Image
          src="https://anuj-portfolio22.netlify.app/assets/icon-BiWBgDQb.svg"
          alt="Boy working"
          width={500}
          height={400}
          className="w-full h-full object-contain p-6"
        />
      </div>
    </motion.div>
  </div>
</section>
      <Skill />
      <Experience/>
      <Joke />
    </>
  );
}
