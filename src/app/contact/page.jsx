import { Mail } from "lucide-react";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import Contactform from "../components/Contactform";
import Navbar2 from "../components/NavBar2";
import ContactPage from "../components/ContactPage"
export default function Contact() {
  return (
    <>
    <Navbar2/>
    <section className="md:px-16 h-full">
      <div className="flex items-center gap-4 my-6 ">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h2 className="text-4xl font-semibold">Contact</h2>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>
      <div className="flex flex-row space-x-6 mb-2 justify-center">
        <a
          href="https://github.com/Linchpin22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="#000000" size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-tiwari-3717a21b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="#000000" size={24} />
        </a>
        <a href="mailto:tiwarianuj712@gmail.com">
          <Mail color="#000000" size={24} />
        </a>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2 w-full"> <Contactform  /></div>
       <div className="md:w-1/2 w-full">  <ContactPage/> </div>
        
      </div>
      
    </section>
    </>
  );
}
