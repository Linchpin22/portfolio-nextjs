import {
  PhoneCall,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="max-w-7xl mx-auto px-5 py-12 bg-white">
      <div className="max-w-5xl mx-auto">
        <hr className="border-t border-gray-200 mb-10" />

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Let's Connect
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            I'm always open to discussing new opportunities,
            collaborations, or just having a chat about technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* Phone */}
            <Link
              href="tel:+918881970855"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              <PhoneCall size={18} />
              <span>+91 888-197-0855</span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:tiwarianuj712@gmail.com"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              <Mail size={18} />
              <span>tiwarianuj712@gmail.com</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/anuj-tiwari-3717a21b4/"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/Linchpin22"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 hover:border-indigo-500 hover:text-indigo-600 transition"
            >
              <Github size={18} />
              <span>GitHub</span>
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500">
          © 2026 Anuj Tiwari. Made with ❤️ using Next.js & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}