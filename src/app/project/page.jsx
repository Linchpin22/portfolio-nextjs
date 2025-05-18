import projects from "./data.js";
import p1 from "../../../public/p1.png";
import boy from "../../../public/boy.jpg";
import Image from "next/image";
import Navbar2 from "../components/NavBar2.jsx";

export default function Contact() {
  return (
    <>
    <Navbar2/>
    <section className="md:px-16 h-full">
      <div className="flex items-center gap-4 my-6">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h2 className="text-4xl font-semibold">Projects</h2>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>

      {/* projects */}

      <section className="bg-white py-12 px-4 md:px-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{ height: "450px" }}
            >
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{ height: "450px" }} // total card height fixed
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
                    objectFit="contain" // maintain full image without cropping
                    className="brightness-90 hover:brightness-110 transition duration-300"
                  />
                </div>

                {/* Content takes remaining 60% height */}
                <div className="p-6 flex flex-col flex-grow">
  <h3 className="text-2xl font-bold text-gray-900 mb-3">
    {project.name}
  </h3>

  {/* Scrollable description only */}
  <div className="text-gray-600 mb-5 leading-relaxed overflow-y-auto pr-1" style={{ maxHeight: "120px" }}>
    {project.description}
  </div>

  <div className="mt-auto flex md:flex-row flex-col  gap-4">
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

              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
    </>
  );
}
