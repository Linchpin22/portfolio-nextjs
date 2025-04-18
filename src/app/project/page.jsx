import Image from 'next/image';
import boy from '../../../public/boy.jpg'

export default function Contact() {
  return (
    <section className="md:px-16 px-8 h-full">
      <div className="flex items-center gap-4 my-6">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h2 className="text-4xl font-semibold">Projects</h2>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>

      {/* projects */}

      <div className="w-full flex md:flex-row flex-col md:gap-x-7 space-y-7">
        <div className="md:w-1/2 text-justify">
          <h2 className="text-3xl">Project Name</h2>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          
             <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <hr className="my-2 bg-gray-800" />
          <span className="gap-x-3 flex flex-row">HTML | CSS | Js | Next js</span>
        </div>
        <div className="md:w-1/2">
          <Image
            src={boy}
            alt="Boy working"
            width={200}
            height={200}
            className="w-full h-50 mt-7 object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col-reverse md:gap-x-7 space-y-7 ">
        <div className="md:w-1/2">
          <Image
            src={boy}
            alt="Boy working"
            width={200}
            height={200}
            className="w-full h-50 object-cover mt-7 rounded-md"
          />
        </div>
        <div className="md:w-1/2 text-justify mb-7">
          <h2 className="text-3xl">Project Name</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          
             <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <hr className="my-2 bg-gray-800" />
          <span className="gap-x-3 flex flex-row">HTML | CSS | Js | Next js</span>
        </div>
      </div>
    </section>
  );
}
