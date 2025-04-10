import { Github, Linkedin, Mail } from "lucide-react";
import Contactform from "../components/Contactform";
export default function Contact() {
  return (
    <div className="px-16 h-screen">
      <div className="flex items-center gap-4 my-6 ">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h1 className="text-2xl font-semibold">Contact</h1>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>
      <div className="flex flex-row space-x-6 justify-center">
        <a
          href="https://github.com/Linchpin22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github color="#000000" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-tiwari-3717a21b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin color="#000000" size={24} />
        </a>
        <a href="mailto:tiwarianuj712@gmail.com">
          <Mail color="#000000" size={24} />
        </a>
      </div>
      <Contactform/>
    </div>
  );
}
