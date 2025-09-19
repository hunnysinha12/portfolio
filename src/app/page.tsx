import About from "@/widgets/About";
import { BackgroundBeamsHero } from "@/widgets/BackgroundBeam";
import Contact from "@/widgets/Contact";
import Degree from "@/widgets/Degree";
import { FooterMain } from "@/widgets/FooterMain";
import Project from "@/widgets/Project";

import { TextGenerate } from "@/widgets/TextGenerate";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden max-w-7xl mx-auto">
        <BackgroundBeamsHero />
        <section id="about">
          <About />
        </section>
        <section id="porject">
          <Project />
        </section>
        <section id="degree">
          <Degree />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <FooterMain />
      </div>
    </>
  );
};

export default page;
