"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesText } from "./SparklesText";
import { TextGenerate } from "./TextGenerate";

export function BackgroundBeamsHero() {
  return (
    <div className="h-full max-w-7xl mx-auto w-full rounded-md bg-neutral-950  grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center antialiased px-16 py-2">
      <div className="w-full">
        <TextGenerate />
        <BackgroundBeams />
      </div>
      <div className="w-full sm:mt-16 md:mt-16 lg:mt-2 mt-8">
        <div className="w-full relative">
          <img
            className="shadow-2xl shadow-rose-600 animate-[spin_12s_linear_infinite] absolute left-0 right-0 rounded-full lg:max-w-[75%] max-w-[60%] mx-auto"
            src="https://avatars.githubusercontent.com/u/89442990?s=400&u=1cc27912fee357ce2d88142a284dfc80c7cfb940&v=4"
            alt="My Image"
          />
          <img
            className="relative z-10 rounded-full lg:max-w-[65%] max-w-[55%] mx-auto outline-[.7rem] outline-offset-[.1rem] outline-rose-400/30"
            src="https://avatars.githubusercontent.com/u/89442990?s=400&u=1cc27912fee357ce2d88142a284dfc80c7cfb940&v=4"
            alt="My Image"
          />
        </div>
      </div>
    </div>
  );
}
