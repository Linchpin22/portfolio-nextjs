"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../project/data.js";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Production", value: "production" },
  { label: "Freelance", value: "freelance" },
  { label: "Internship", value: "internship" },
];

const categoryConfig = {
  production: {
    label: "Production",
    badge: "bg-green-50 text-green-800",
    dot: "bg-green-700",
    icon: "text-green-700",
  },
  freelance: {
    label: "Freelance",
    badge: "bg-blue-50 text-blue-800",
    dot: "bg-blue-700",
    icon: "text-blue-700",
  },
  internship: {
    label: "Internship",
    badge: "bg-violet-50 text-violet-800",
    dot: "bg-violet-700",
    icon: "text-violet-700",
  },
};

function ExternalIcon() {
  return (
    <svg
      className="w-3.5 h-3.5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.165c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function ProjectComp() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  const countBycat = (cat) =>
    cat === "all"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <section id="projects" className="max-w-5xl mx-auto py-20 px-4 md:px-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-2">
          Work
        </p>
        <h2 className="text-4xl font-semibold text-gray-900 mb-2">
          Selected projects
        </h2>
        <p className="text-base text-gray-400">
          Production builds, real clients, shipped code
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 justify-center flex-wrap mb-10">
        {FILTERS.map((f) => {
          const cfg = categoryConfig[f.value];
          const isOn = active === f.value;
          return (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`flex items-center cursor-pointer gap-2 px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
                isOn
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-200 text-gray-500 bg-white hover:border-gray-400 hover:text-gray-700"
              }`}
            >
              {cfg && (
                <span
                  className={`w-1.5 h-1.5 text-sm rounded-full ${
                    isOn ? "bg-white opacity-60" : cfg.dot
                  }`}
                />
              )}
              {f.label}
              <span
                className={`text-sm rounded-full px-1.5 py-px ${
                  isOn
                    ? "bg-white/20 text-white/70"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {countBycat(f.value)}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid — mosaic border trick */}
      <div className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-100 grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
        <AnimatePresence>
          {filtered.map((project) => {
            const cat = categoryConfig[project.category];
            return (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="bg-white flex flex-col gap-4 p-6 hover:bg-gray-50 transition-colors duration-150"
              >
                {/* Icon + badge */}
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-xl text-3xl border border-gray-100 flex items-center justify-center bg-white">
                    {project.icon}
                  </div>
                  <span
                    className={`text-sm font-medium px-2.5 py-1 rounded-full ${cat.badge}`}
                  >
                    {cat.label}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 leading-snug">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md border border-gray-100 text-gray-400 bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg bg-white transition-all"
                    >
                      <ExternalIcon /> Live site
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg bg-white transition-all"
                    >
                      <GithubIcon /> Source code
                    </a>
                  )}
                  {!project.live && !project.link && (
                    <span className="text-xs text-gray-300 italic py-1">
                      Internal project
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
