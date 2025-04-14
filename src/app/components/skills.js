"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [joke, setJoke] = useState(null);
  useEffect(() => {
    fetch("//official-joke-api.appspot.com/jokes/programming/random")
      .then((res) => res.json())
      .then((res) => {
        setJoke(res[0]);
        console.log(res[0]);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  return (
  <div className="md:px-16 my-6 h-full">
       <div className="flex items-center gap-4 my-6 ">
        <hr className="flex-grow border-t-2 border-gray-900" />
        <h1 className="text-2xl font-semibold"> 404 – Boredom Not Found </h1>
        <hr className="flex-grow border-t-2 border-gray-900" />
      </div>
    
    
    {joke ? <div className="flex flex-col justify-center items-center">
  <h1 className="text-3xl px-1.5 md:px-0 font-light">{joke.setup}</h1>
  <h2 className="text-xl font-light">{joke.punchline}</h2>
  </div> :
  <div className="flex items-center justify-center min-h-screen">
  <div className="relative">
    <div className="relative w-32 h-32">
      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-[#F2F2F2] border-b-[#0ff] animate-spin"
        style={{ animationDuration: "3s" }}
      ></div>

      <div
        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-[#0ff] animate-spin"
        style={{ animationDuration: "2s", animationDirection: "reverse" }}
      ></div>
    </div>

    <div
      className="absolute inset-0 bg-gradient-to-tr from-[#0ff]/10 via-transparent to-[#0ff]/5 animate-pulse rounded-full blur-sm"
    ></div>
  </div>
</div>

}</div>
  );
}
