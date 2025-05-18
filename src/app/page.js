import Joke from "./components/Joke";
import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Skill from "./components/Skills";
import Experience from "./components/Experience";

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
      <section id="about" className="bg-[#F2F2F2] md:px-16 h-auto p-4 mb-8">
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-t-2 border-gray-900" />
          <h2 className="text-4xl font-semibold">About</h2>
          <hr className="flex-grow border-t-2 border-gray-900" />
        </div>

        <div className="w-full flex md:flex-row md:gap-x-7 flex-col">
          <div className="md:w-1/2 text-justify">
            <p className="text-xl">
              I'm a recent B.Tech graduate and a dedicated full stack developer
              with a strong passion for building efficient, user-friendly web
              applications. I have completed two internships as a developer,
              where I gained hands-on experience with modern technologies like
              React, Next js, Tailwind and JavaScript. During these internships,
              I contributed to real-world projects, improved my problem-solving
              skills, and collaborated with cross-functional teams. I enjoy
              working on both the front-end and back-end, and I'm always curious
              to learn new tools and frameworks. I also have experience using
              Git, GitHub, and RESTful APIs in team environments. My strong
              communication skills and eagerness to adapt make me a reliable
              team player. I'm excited to continue growing as a developer and
              take on challenging opportunities in the fast-paced tech industry.
            </p>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <div className="w-full h-[400px]">
              <Image
                src="https://anuj-portfolio22.netlify.app/assets/icon-BiWBgDQb.svg"
                alt="Boy working"
                width={400}
                height={100}
                className="w-full h-10/12 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>
      <Skill />
      <Experience/>
      <Joke />
    </>
  );
}
