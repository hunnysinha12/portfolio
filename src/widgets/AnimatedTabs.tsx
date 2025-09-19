"use client";

import { Tabs } from "@/components/ui/tabs";

import Image from "next/image";
import Ochi from "@/../public/image.png";
import Dashboard from "@/../public/dashboard.png";
import Redux from "@/../public/Redux.png";
import ReactAnimation from "@/../public/React Animation.png";

export function AnimatedTabs() {
  const tabs = [
    {
      title: "Ochi",
      value: "content",
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
      title: "Invoice Generator",
      value: "services",
      content: (
        <a href="https://crud-dashboard-omega.vercel.app/dashboard">
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex gap-4 flex-col text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <p>Invoice Generator</p>
            <Image src={Dashboard} alt="ochi" />
          </div>
        </a>
      ),
    },
    {
      title: "Working with Redux",
      value: "playground",
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
      value: "random",
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
