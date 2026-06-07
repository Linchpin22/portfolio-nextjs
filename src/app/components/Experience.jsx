"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const experiences = [
    {
      company: "VIDYAOne IT Solutions",
      role: "Developer (Frontend Focus)",
      website: "https://vidyaone.com",
      duration: "Apr 2025 – Present",
      current: true,
      points: [
        "Inherited and scaled a live product website — independently built 3 fully responsive sub-product pages from scratch",
        "Integrated Razorpay payment gateway, built and tested REST APIs with Postman, and deployed on AWS with CDN asset delivery",
        "Implemented SSG (build-time) and SSR (run-time) APIs, SEO optimization, image optimization, and Google Tag Manager + Analytics",
        "Set up Blogger CMS for dynamic blog and events content; added pagination and fixed DLQ bugs in production",
        "Sole developer on Neelabh Hospital's live website — handled full project lifecycle independently",
        "Also built school website templates and contributed to the company's main website",
      ],
      tech: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "AWS",
        "Razorpay",
        "Postman",
        "GTM",
        "SEO",
        "CDN",
        "Blogger",
        "JIRA",
        "Git",
        "GitHub",
      ],
      accent: "#6366f1",
      accentLight: "#eef2ff",
      logo: "/icon.png",
    },
    {
      company: "Decimal Technology",
      role: "App Developer Intern",
      website: "https://decimaltech.com",
      duration: "Nov 2024 – Apr 2025",
      current: false,
      points: [
        "Developed applications on the company's proprietary low-code/app development platform",
        "Learned app development workflows specific to internal tooling and enterprise use cases",
        "Adapted quickly to a non-standard tech environment, strengthening problem-solving and adaptability",
      ],
      tech: ["JavaScript", "HTML", "CSS", "Proprietary Platform"],
      accent: "#10b981",
      accentLight: "#ecfdf5",
      logo: "/decimaltech_logo.jfif",
    },
    {
      company: "Baoiam Innovations Pvt Ltd",
      role: "Frontend Developer Intern",
      website: "https://site-innovations.vercel.app/",
      duration: "Jul 2024 – Oct 2024",
      current: false,
      points: [
        "Contributed to a 15-member team building a full-stack production website using React and Tailwind CSS",
        "Proposed and implemented UI decisions that were accepted and shipped into the live product",
        "Mentored and led peers in select frontend areas; also performed code reviews for team members",
        "Managed version control and collaborative workflows using Git and GitHub",
      ],
      tech: ["React.js", "Tailwind CSS", "JavaScript", "Git", "GitHub"],
      accent: "#f59e0b",
      accentLight: "#fffbeb",
      logo: "https://baoiam-undertesting.vercel.app/assets/logoLight-CdO4H5tM.png",
    },
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto md:px-8 px-4 my-20">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-16">
        <hr className="flex-grow border-t border-gray-200" />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 whitespace-nowrap">
          Experience Journey
        </h2>
        <hr className="flex-grow border-t border-gray-200" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 md:left-8" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="relative flex gap-6 md:gap-10 pl-16 md:pl-20"
    >
      {/* Timeline dot with logo */}
      <div
        className="absolute left-0 top-5 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white border-2 shadow-sm shrink-0"
        style={{ borderColor: exp.accent }}
      >
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          className="w-7 h-7 md:w-10 md:h-10 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentElement.innerHTML = `<span style="font-size:11px;font-weight:700;color:${exp.accent}">${exp.company.slice(0, 2).toUpperCase()}</span>`;
          }}
        />
      </div>

      {/* Card */}
      <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        {/* Accent bar */}
        <div className="h-1 w-full" style={{ backgroundColor: exp.accent }} />

        <div className="p-5 md:p-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                {exp.current && (
                  <span
                    className="text-sm font-semibold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: exp.accentLight,
                      color: exp.accent,
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <a
                href={exp.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 block text-base font-medium text-gray-500 hover:text-blue-600 transition-colors duration-300"
              >
                {exp.company}
              </a>
            </div>
            <span className="text-xs text-gray-400 font-medium bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
              {exp.duration}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-4" />

          {/* Bullet points */}
          <ul className="space-y-2 mb-5">
            {exp.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed"
              >
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: exp.accent }}
                />
                {point}
              </li>
            ))}
          </ul>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs font-medium px-2.5 py-1 rounded-md border transition-colors duration-150"
                style={{
                  backgroundColor: exp.accentLight,
                  color: exp.accent,
                  borderColor: `${exp.accent}30`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
