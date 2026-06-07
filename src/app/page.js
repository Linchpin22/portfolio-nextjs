"use client";

import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Skill from "./components/Skills";
import Experience from "./components/Experience";
import { motion } from "framer-motion";
import ProjectComp from "./components/ProjectComp";

export default function Home() {
  return (
    <>
      <div className="relative h-[60vh] w-full overflow-hidden text-white">
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

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 z-0" />

        {/* Foreground */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="bg-white md:px-16 p-6 md:py-20 py-14 mb-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
                      {/* Illustration */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:w-3/5 w-full flex justify-center items-center"
            >
              <svg
                viewBox="0 0 680 520"
                className="w-full max-w-2xl md:scale-135"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`
                  @keyframes float1 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
                  @keyframes float2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
                  @keyframes float3 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
                  @keyframes blink  { 0%,100%{opacity:1} 49%{opacity:1} 50%{opacity:0} 99%{opacity:0} }
                  .f1 { animation: float1 3.2s ease-in-out infinite; }
                  .f2 { animation: float2 2.8s ease-in-out infinite 0.5s; }
                  .f3 { animation: float3 3.8s ease-in-out infinite 1s; }
                  .f4 { animation: float1 4.1s ease-in-out infinite 1.5s; }
                  .f5 { animation: float2 3.5s ease-in-out infinite 0.8s; }
                  .cur { animation: blink 1s step-end infinite; }
                `}</style>
 
                {/* BG decorative dots */}
                <g opacity="0.18">
                  <circle cx="60" cy="60" r="3" fill="#7F77DD"/>
                  <circle cx="100" cy="60" r="3" fill="#7F77DD"/>
                  <circle cx="140" cy="60" r="3" fill="#7F77DD"/>
                  <circle cx="60" cy="100" r="3" fill="#7F77DD"/>
                  <circle cx="100" cy="100" r="3" fill="#7F77DD"/>
                  <circle cx="140" cy="100" r="3" fill="#7F77DD"/>
                  <circle cx="60" cy="140" r="3" fill="#7F77DD"/>
                  <circle cx="100" cy="140" r="3" fill="#7F77DD"/>
                  <circle cx="140" cy="140" r="3" fill="#7F77DD"/>
                  <circle cx="540" cy="360" r="3" fill="#1D9E75"/>
                  <circle cx="580" cy="360" r="3" fill="#1D9E75"/>
                  <circle cx="620" cy="360" r="3" fill="#1D9E75"/>
                  <circle cx="540" cy="400" r="3" fill="#1D9E75"/>
                  <circle cx="580" cy="400" r="3" fill="#1D9E75"/>
                  <circle cx="620" cy="400" r="3" fill="#1D9E75"/>
                  <circle cx="540" cy="440" r="3" fill="#1D9E75"/>
                  <circle cx="580" cy="440" r="3" fill="#1D9E75"/>
                  <circle cx="620" cy="440" r="3" fill="#1D9E75"/>
                </g>
 
                {/* Decorative rings */}
                <circle cx="160" cy="430" r="55" fill="none" stroke="#CECBF6" strokeWidth="2" opacity="0.6"/>
                <circle cx="160" cy="430" r="35" fill="none" stroke="#CECBF6" strokeWidth="1.5" opacity="0.4"/>
                <circle cx="520" cy="90" r="45" fill="none" stroke="#9FE1CB" strokeWidth="2" opacity="0.5"/>
 
                {/* Laptop body */}
                <rect x="190" y="160" width="300" height="190" rx="12" fill="#2C2C2A"/>
                <rect x="200" y="170" width="280" height="170" rx="8" fill="#1a1a18"/>
                <rect x="208" y="178" width="264" height="154" rx="5" fill="#0d1117"/>
 
                {/* Editor chrome bar */}
                <rect x="208" y="178" width="264" height="22" rx="5" fill="#1e1e1e"/>
                <circle cx="222" cy="189" r="4" fill="#E24B4A"/>
                <circle cx="236" cy="189" r="4" fill="#EF9F27"/>
                <circle cx="250" cy="189" r="4" fill="#639922"/>
                <rect x="266" y="184" width="90" height="10" rx="3" fill="#2d2d2d"/>
                <text x="311" y="192" textAnchor="middle" fontSize="7" fill="#888780" fontFamily="monospace">page.jsx</text>
 
                {/* Code lines */}
                <text x="218" y="218" fontSize="9" fill="#534AB7" fontFamily="monospace">import</text>
                <text x="262" y="218" fontSize="9" fill="#D3D1C7" fontFamily="monospace">Hero</text>
                <text x="286" y="218" fontSize="9" fill="#D3D1C7" fontFamily="monospace">from</text>
                <text x="312" y="218" fontSize="9" fill="#3B6D11" fontFamily="monospace">&apos;./Hero&apos;</text>
 
                <text x="218" y="232" fontSize="9" fill="#D85A30" fontFamily="monospace">export</text>
                <text x="261" y="232" fontSize="9" fill="#534AB7" fontFamily="monospace">default</text>
                <text x="315" y="232" fontSize="9" fill="#BA7517" fontFamily="monospace">function</text>
                <text x="373" y="232" fontSize="9" fill="#1D9E75" fontFamily="monospace">Home</text>
                <text x="403" y="232" fontSize="9" fill="#D3D1C7" fontFamily="monospace">() {"{"}</text>
 
                <text x="228" y="246" fontSize="9" fill="#D85A30" fontFamily="monospace">return</text>
                <text x="265" y="246" fontSize="9" fill="#D3D1C7" fontFamily="monospace">(</text>
 
                <text x="238" y="260" fontSize="9" fill="#7F77DD" fontFamily="monospace">&lt;main</text>
                <text x="275" y="260" fontSize="9" fill="#BA7517" fontFamily="monospace">className</text>
                <text x="335" y="260" fontSize="9" fill="#D3D1C7" fontFamily="monospace">=</text>
                <text x="342" y="260" fontSize="9" fill="#3B6D11" fontFamily="monospace">&quot;flex&quot;</text>
                <text x="377" y="260" fontSize="9" fill="#7F77DD" fontFamily="monospace">&gt;</text>
 
                <text x="248" y="274" fontSize="9" fill="#7F77DD" fontFamily="monospace">&lt;Hero</text>
                <text x="286" y="274" fontSize="9" fill="#BA7517" fontFamily="monospace">title</text>
                <text x="314" y="274" fontSize="9" fill="#D3D1C7" fontFamily="monospace">=</text>
                <text x="322" y="274" fontSize="9" fill="#3B6D11" fontFamily="monospace">&quot;Anuj&quot;</text>
                <text x="362" y="274" fontSize="9" fill="#7F77DD" fontFamily="monospace">/&gt;</text>
 
                <text x="248" y="288" fontSize="9" fill="#7F77DD" fontFamily="monospace">&lt;Skills /&gt;</text>
 
                <text x="248" y="302" fontSize="9" fill="#7F77DD" fontFamily="monospace">&lt;Exp</text>
                <rect x="284" y="294" width="6" height="10" rx="1" fill="#7F77DD" className="cur"/>
 
                <text x="238" y="316" fontSize="9" fill="#7F77DD" fontFamily="monospace">&lt;/main&gt;</text>
                <text x="228" y="330" fontSize="9" fill="#D3D1C7" fontFamily="monospace">)</text>
                <text x="218" y="340" fontSize="9" fill="#D3D1C7" fontFamily="monospace">{"}"}</text>
 
                {/* Laptop base */}
                <rect x="170" y="350" width="340" height="14" rx="4" fill="#1a1a18"/>
                <rect x="290" y="352" width="100" height="4" rx="2" fill="#2C2C2A"/>
                <ellipse cx="340" cy="370" rx="155" ry="8" fill="#2C2C2A" opacity="0.12"/>
 
                {/* Floating badges */}
                <g className="f1">
                  <rect x="60" y="170" width="72" height="32" rx="16" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1.5"/>
                  <text x="96" y="190" textAnchor="middle" fontSize="11" fontWeight="600" fill="#3C3489" fontFamily="monospace">Next.js</text>
                </g>
 
                <g className="f2">
                  <rect x="548" y="155" width="66" height="32" rx="16" fill="#E1F5EE" stroke="#5DCAA5" strokeWidth="1.5"/>
                  <text x="581" y="175" textAnchor="middle" fontSize="11" fontWeight="600" fill="#085041" fontFamily="monospace">React</text>
                </g>
 
                <g className="f3">
                  <rect x="548" y="240" width="60" height="32" rx="16" fill="#FAEEDA" stroke="#EF9F27" strokeWidth="1.5"/>
                  <text x="578" y="260" textAnchor="middle" fontSize="11" fontWeight="600" fill="#633806" fontFamily="monospace">AWS</text>
                </g>
 
                <g className="f4">
                  <rect x="60" y="270" width="56" height="32" rx="16" fill="#FAECE7" stroke="#F0997B" strokeWidth="1.5"/>
                  <text x="88" y="290" textAnchor="middle" fontSize="11" fontWeight="600" fill="#712B13" fontFamily="monospace">API</text>
                </g>
 
                <g className="f5">
                  <rect x="270" y="100" width="52" height="30" rx="15" fill="#FCEBEB" stroke="#F09595" strokeWidth="1.5"/>
                  <text x="296" y="119" textAnchor="middle" fontSize="11" fontWeight="600" fill="#791F1F" fontFamily="monospace">Git</text>
                </g>
 
                <g className="f2">
                  <rect x="360" y="95" width="54" height="30" rx="15" fill="#EAF3DE" stroke="#97C459" strokeWidth="1.5"/>
                  <text x="387" y="114" textAnchor="middle" fontSize="11" fontWeight="600" fill="#27500A" fontFamily="monospace">SEO</text>
                </g>
 
                {/* Terminal label */}
                <rect x="272" y="400" width="136" height="30" rx="15" fill="#EEEDFE" stroke="#AFA9EC" strokeWidth="1"/>
                <text x="340" y="420" textAnchor="middle" fontSize="11" fontWeight="600" fill="#3C3489" fontFamily="monospace">anuj@dev:~$</text>
 
                {/* Dashed connectors */}
                <line x1="190" y1="245" x2="138" y2="245" stroke="#AFA9EC" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
                <line x1="490" y1="220" x2="548" y2="220" stroke="#5DCAA5" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
                <line x1="490" y1="260" x2="548" y2="260" stroke="#EF9F27" strokeWidth="1" strokeDasharray="4,3" opacity="0.5"/>
              </svg>
            </motion.div>


            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:w-3/5 space-y-6"
            >
              {/* Name + title */}
              <div>
                <p className="text-sm font-semibold text-indigo-500 tracking-widest uppercase mb-1">
                  Who I am
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  Anuj Tiwari — Frontend Developer
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  Based in Kanpur · 1.5 years production experience
                </p>
              </div>

              {/* Paragraphs */}
              <div className="space-y-3 text-gray-600 text-base leading-relaxed">
                <p>
                  I build fast, production-ready web applications — from UI to
                  deployment. Currently at{" "}
                  <span className="font-semibold text-gray-800">
                    VIDYAOne IT Solutions
                  </span>
                  , where I&apos;ve shipped multiple live websites solo, including a
                  school SaaS platform and a hospital website.
                </p>
                <p>
                  My work goes beyond writing components. I&apos;ve integrated
                  payment gateways, built and consumed REST APIs, deployed on
                  AWS, set up CDN delivery, handled SEO and analytics — and kept
                  things running in production.
                </p>
                <p>
                  I care about performance, clean architecture, and shipping
                  things that actually work.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "3+", label: "Live websites shipped" },
                  { value: "3", label: "Internships" },
                  { value: "1.5y", label: "Experience" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-100 rounded-xl p-3 text-center"
                  >
                    <p className="text-xl font-bold text-indigo-500">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Daily tech */}
              <div>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-2">
                  Daily stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "Tailwind CSS",
                    "REST APIs",
                    "AWS",
                    "Razorpay",
                    "Git",
                    "Postman",
                  ].map((t, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Skill />
      <Experience />
      <ProjectComp/>
    </>
  );
}
