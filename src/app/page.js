
import { ChevronsDown } from "lucide-react";
import Skills from "./components/skills";
import Image from 'next/image';
import boy from '../../public/boy.jpg'



export default function Home() {
 
  return (
    <>
      {/* hero-section */}

      <div className="flex flex-col items-center justify-center w-full pb-40 h-screen overflow-x-hidden space-y-2">
        <h1 className="text-5xl flex text-center">Hi, I’m Anuj Tiwari</h1>
        <h4>I design and build things.</h4>
        <ChevronsDown size={24} className="mt-20" />
      </div>

      {/* About_section */}

      <div className="bg-[#F2F2F2] md:px-16 h-auto p-4 mb-8">
        <div className="flex items-center gap-4 my-6">
          <hr className="flex-grow border-t-2 border-gray-900" />
          <h1 className="text-2xl font-semibold">About</h1>
          <hr className="flex-grow border-t-2 border-gray-900" />
        </div>
        <div className="w-full flex md:flex-row md:gap-x-7 flex-col ">
          <div className="md:w-1/2 text-justify">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
              gravida. Suspendisse ultricies sollicitudin lacus, et rutrum nunc
              bibendum sed.<br></br> Donec tincidunt tellus sed libero
              ultricies, eu semper enim molestie. Etiam lorem quam, tincidunt
              nec malesuada eu, interdum nec leo. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; Morbi
              placerat tortor sed felis tristique. <br></br> Nunc aliquam magna
              ut nunc vestibulum, ut dictum nulla sagittis. Cras egestas magna
              sed nisl pellentesque, sed lobortis felis convallis. Phasellus
              eget ex at est lobortis iaculis eget non risus. Etiam ultricies at
              est sit amet condimentum.
            </p>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <Image
              src={boy}
              alt="Boy working"
              className="w-full h-50 object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <Skills/>
    </>
  );
}