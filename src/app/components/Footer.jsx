import { PhoneCall, Mail } from "lucide-react";

export default function footer() {
  return (
    <div className="flex flex-col px-5 pt-3 space-y-6">
      {/* <hr className="flex-grow border-t-2 border-gray-900" /> */}
      <div className="flex md:flex-row flex-col justify-between space-y-8 md:space-y-0 ">
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">Anuj</h2>
          <h2 className="font-light text-xl">Subscribe now</h2>
          <input
            className="border-b-2 border-gray-400 focus:outline-none focus:border-black"
            type="email"
            placeholder="Email"
          />
          <a href="#_" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Subscribe</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>
        <div className="flex flex-row gap-3 space-x-3.5 ">
          <div className="flex flex-col space-y-2 text-xl font-light">
            <h2 className="text-2xl font-medium">Information</h2>
            <h3>About</h3>
            <h3>More Information</h3>
            <h3>Blog</h3>
            <h3>Events</h3>
          </div>
          <div className="flex flex-col space-y-2 text-xl font-light">
            <h2 className="text-2xl font-medium">Information</h2>
            <h3>About</h3>
            <h3>More Information</h3>
            <h3>Blog</h3>
            <h3>Events</h3>
          </div>
          {/* <div className="flex flex-col space-y-2 text-xl font-light">
            <h1 className="text-2xl font-medium">Information</h1>
            <h3>About</h3>
            <h3>More Information</h3>
            <h3>Blog</h3>
            <h3>Events</h3>
          </div> */}
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-medium">Contact us</h2>
          <h2 className="flex flex-row gap-3">
            <PhoneCall color="#000000" />
            +91 xxx xxx xxxx
          </h2>
          <h2 className="flex flex-row gap-3">
            <Mail color="#000000" />
            emailid@provider.com
          </h2>
        </div>
      </div>
      <div>
      <hr className="flex-grow border-t-2 border-gray-900" />
      <h2 className="flex justify-center font-medium">© 2025 AnujTiwari All rights reserved.</h2>
      </div>
    </div>
  );
}
