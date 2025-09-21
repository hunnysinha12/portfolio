"use client";

import { Tabs } from "@/components/ui/tabs";

import Image from "next/image";
import Ochi from "@/../public/image.png";
import GTA from "@/../public/GTA-VI.png";
import Redux from "@/../public/Redux.png";
import ReactAnimation from "@/../public/React Animation.png";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Ochi",
      value: "Ochi",
      content: (
        <a href="https://ochi-two-green.vercel.app/">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex gap-4 flex-col text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Ochi Website</p>
            <Image src={Ochi} alt="ochi" />
          </div>
        </a>
      ),
    },
    {
      title: "GTA VI",
      value: "GTA VI",
      content: (
        <a href="https://gta-vi-seven-vert.vercel.app/">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex gap-4 flex-col text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>GTA VI Animating Website usign GSAP</p>
            <Image src={GTA} alt="ochi" />
          </div>
        </a>
      ),
    },
    {
      title: "Working with Redux",
      value: "Working with Redux",
      content: (
        <a href="https://working-with-redux.vercel.app/">
          {" "}
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex gap-4 flex-col text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Working with Redux Took Kit</p>
            <Image src={Redux} alt="ochi" />
          </div>
        </a>
      ),
    },

    {
      title: "React Animated Website",
      value: "React Animated Website",
      content: (
        <a href="https://react-animated-website-xi.vercel.app/">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex gap-4 flex-col text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>React Animated Website</p>
            <Image src={ReactAnimation} alt="ochi" />
          </div>
        </a>
      ),
    },
  ];

  return (
    <div className="h-[30rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start ">
      <Tabs tabs={tabs} />
    </div>
  );
}
