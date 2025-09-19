import React from "react";
import { TextGenerate } from "./TextGenerate";
import { HoverText } from "./HoverText";
import { ParallaxEffect } from "./ParallaxEffect";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";
import { PixelatedCanvasDemo } from "./PixelatedCanvas";

const About = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-center items-center pt-20 sm:pt-32 md:pt-40 lg:pt-52 xl:pt-60">
      <div className="max-w-7xl relative mx-auto w-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl l font-bold dark:text-white">
          Turning Ideas into Scalable <br />
          Solutions with Code & Precision
        </h1>
        <p className="max-w-2xl text-sm sm:text-base md:text-xl lg:text-xl mt-4 sm:mt-6 md:mt-8 dark:text-neutral-200 leading-relaxed">
          I'm a Full-Stack Developer based in Chennai, India (Remote), currently
          working at Gooseberry Technovision. With over 2 years of professional
          experience, I specialize in building high-performance, scalable web
          applications using modern technologies like React, Next.js, Node.js,
          and MongoDB.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>I'm passionate about solving
          real-world problems through clean, maintainable code and intuitive
          user experiences. From automating business workflows to enhancing
          system reliability, I bring a balance of technical depth and product
          thinking to every project.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>I work best in Agile teams, thrive
          under deadlines, and love continuously learning to stay at the
          forefront of web development.
        </p>
      </div>
      <div className=" px-16 py-2">
        <PixelatedCanvasDemo />
      </div>
    </div>
  );
};

export default About;
