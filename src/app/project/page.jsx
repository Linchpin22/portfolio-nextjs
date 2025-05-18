"use client"
import { motion } from "framer-motion";
import projects from "./data.js";
import Image from "next/image";
import Navbar2 from "../components/NavBar2.jsx";

export default function Contact() {
  // Variants for the project cards container (stagger children)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // Variants for each project card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar2 />
      <section className="md:px-16 h-full">
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-t-2 border-gray-900" />
          <h2 className="text-4xl font-semibold">Projects</h2>
          <hr className="flex-grow border-t-2 border-gray-900" />
        </div>

        {/* projects */}
        <motion.section
          className="bg-white py-12 px-4 md:px-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between cursor-pointer"
                style={{ height: "450px", transition: "box-shadow 0.3s ease" }}
              >
                {/* Image container is 40% height */}
                <div
                  className="relative w-full overflow-hidden rounded-t-2xl bg-gray-100"
                  style={{ height: "40%" }}
                >
                  <Image
                    src={project.img}
                    alt={project.name}
                    layout="fill"
                    objectFit="contain"
                    className="brightness-90 hover:brightness-110 transition duration-300"
                  />
                </div>

                {/* Content takes remaining 60% height */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>

                  {/* Scrollable description only */}
                  <div
                    className="text-gray-600 mb-5 leading-relaxed overflow-y-auto pr-1"
                    style={{ maxHeight: "120px" }}
                  >
                    {project.description}
                  </div>

                  <div className="mt-auto flex md:flex-row flex-col gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-5 py-2 text-indigo-600 border-2 border-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition"
                    >
                      View Project →
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 text-indigo-600 border-2 border-indigo-600 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>
    </>
  );
}
