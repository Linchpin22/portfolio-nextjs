export default function ContactForm() {
  return (
    <div className="bg-[#F2F2F2] py-10 px-4 md:px-16 flex justify-center">
      <form className="bg-white p-6 md:p-10 rounded-lg  w-full max-w-xl flex flex-col gap-4">
        <div className="flex flex-col">
          <label className="mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Mobile Number</label>
          <input
            type="tel"
            placeholder="Mobile number"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-2 font-medium">Gender</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="male" />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" value="female" />
              Female
            </label>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 font-medium">Message</label>
          <textarea
            placeholder="Write your message here..."
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
