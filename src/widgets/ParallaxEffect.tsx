"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function ParallaxEffect() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "React",
    thumbnail: "https://icon.icepanel.io/Technology/svg/React.svg",
  },
  {
    title: "Tailwind CSS",
    thumbnail: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    title: "MongoDB",
    thumbnail: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
  },

  {
    title: "Node.js",
    thumbnail: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
  },
  {
    title: "Angular.js",
    thumbnail: "https://icon.icepanel.io/Technology/svg/AngularJS.svg",
  },
  {
    title: "MySQL",

    thumbnail: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
  },

  {
    title: "Azure Devop",
    thumbnail: "https://icon.icepanel.io/Technology/svg/Azure-Devops.svg",
  },
  {
    title: "Webflow",

    thumbnail: "https://icon.icepanel.io/Technology/svg/Webflow.svg",
  },
  {
    title: "WordPress",
    thumbnail:
      "https://icon.icepanel.io/Technology/png-shadow-512/WordPress.png",
  },
  {
    title: "Git",
    thumbnail: "https://icon.icepanel.io/Technology/svg/Git.svg",
  },
  {
    title: "Git Hub",
    thumbnail: "https://icon.icepanel.io/Technology/png-shadow-512/GitHub.png",
  },
];
