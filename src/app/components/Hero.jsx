import { ChevronsDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center w-full pb-40 h-screen overflow-x-hidden space-y-2">
      <h1 className="text-5xl flex text-center">Hi, I’m Anuj Tiwari</h1>
      <h2 className="text-2xl">I design and build things.</h2>
      <a href="#about">
        <ChevronsDown
          size={36}
          className="mt-20 animate-bounce cursor-pointer"
        />
      </a>
    </section>
  );
}
