import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDegree() {
  const data = [
    {
      title: "2024 - Current",
      content: (
        <div>
          <p className="mb-8 text-4xl font-normal text-neutral-800 md:text-5xl dark:text-neutral-200">
            Frontend Developer
          </p>
          <p className="ml-4 mb-8 text-3xl font-normal text-neutral-700 hover:text-neutral-900 md:text-xl dark:text-blue-200 hover:dark:text-blue-600 underline">
            <span>@</span>
            <a href="https://www.gooseberrytechnovision.com">
              GooseBerry Technovision
            </a>
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="mb-8 text-4xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
            Master's of Computer Applicaton <br />{" "}
            <span className="ml-4">7.7 CGPA</span>
          </p>
          <p className="ml-4 mb-8 text-3xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            Lovely Professional University
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://imgs.search.brave.com/AyeTzfc68n04VaWwm3iuWHJkwJhUEStAfQ1H-KnveKs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXRteXVuaS5j/b20vYXp1cmUvY29s/bGVnZS1pbWFnZXMt/dGVzdC9sb3ZlbHkt/cHJvZmVzc2lvbmFs/LXVuaXZlcnNpdHkt/bHB1LWphbGFuZGhh/ci9pbmZyYXN0dWN0/dXJlLTMzMzIyNWE4/MGQxNGRhZWEyZTBk/OTQ1ZGEwZThlNDQ1/LkpQRw"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/mVS9dpwZuZS-sC7pwyVb1UtC5lk5KWDvQ1fZt7ZRdI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MjUyMzMvMTY1NTU1/MzIzOXBocDRZU09G/NC5qcGVn"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          {/*
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
    {
      title: "2019 - 2022",
      content: (
        <div>
          <p className="mb-8 text-4xl font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
            Bachelor's of Computer Applicaton <br />{" "}
            <span className="ml-4">7.8 CGPA</span>
          </p>
          <p className="ml-4 mb-8 text-3xl font-normal text-neutral-800 md:text-xl dark:text-neutral-200">
            Birla Institute of Technology, Mesra
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://imgs.search.brave.com/k5Y5KKEl5EW7yu55BowWED34dQ1Pu3UFt9KIgs_eIuE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9iaXRt/ZXNyYS5hYy5pbi9V/cGxvYWRlZERvY3Vt/ZW50cy91c2VyX2Rl/YW51Z3BnL0NvdXJz/ZV9JbWFnZS9jc19p/bWFnZTY2ODMzODMx/OGMzYTRhMGJhM2Q2/NzY4ZDg4NTc1NjEy/X0JJVCUyMElNQUdF/LmpwZw"
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://imgs.search.brave.com/BKW0rgl4FSiX-_yXyoRKc8Stixv9MUM-LMJsGvGzgc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1zdGF0aWMuY29s/bGVnZWR1bmlhLmNv/bS9wdWJsaWMvcmV2/aWV3UGhvdG9zLzEx/MjYyNjMvSU1HLTIw/MjUwNjExLVdBMDA2/MC5qcGc"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
          {/*   <img
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/cards.png"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
