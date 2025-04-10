export default function Contact() {
  return (
    <div className="md:px-16 px-8 h-full">
      <div className="flex items-center gap-4 my-6">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h1 className="text-2xl font-semibold">Projects</h1>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>

      {/* projects */}

      <div className="w-full flex md:flex-row flex-col md:gap-x-7 space-y-7">
        <div className="md:w-1/2 text-justify">
          <h1 className="text-3xl">Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <hr className="my-2 bg-gray-800" />
          <p className="gap-x-3 flex flex-row">HTML CSS Js Next js</p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Boy working"
            className="w-full h-50 mt-7  object-cover rounded-md"
          />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col-reverse md:gap-x-7 space-y-7 ">
        <div className="md:w-1/2">
          <img
            src="https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJveSUyMHdvcmtpbmd8ZW58MHx8MHx8fDA%3D"
            alt="Boy working"
            className="w-full h-50 object-cover mt-7 rounded-md"
          />
        </div>
        <div className="md:w-1/2 text-justify mb-7">
          <h1 className="text-3xl">Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet vestibulum felis. Vivamus facilisis ligula id fringilla
            gravida.
          </p>
          <hr className="my-2 bg-gray-800" />
          <p className="gap-x-3 flex flex-row">HTML CSS Js Next js</p>
        </div>
      </div>
    </div>
  );
}
