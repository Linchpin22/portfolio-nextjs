import Slider from "./Slider";

export default function Skill() {
    return(
<section id="skill" className="md:px-16 my-6 h-full">
      <div className="flex items-center gap-4 my-6 ">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h2 className="text-4xl font-semibold"> Skills </h2>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>
      <div className="py-5">
    <Slider/>
      </div>
</section>
    )
}