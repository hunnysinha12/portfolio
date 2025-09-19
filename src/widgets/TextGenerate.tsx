"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `I’m Jyoty Bhushan — a chai-fueled Frontend Developer turning boring screens into pixel-perfect`;

export function TextGenerate() {
  return (
    <>
      <div>
        <TextGenerateEffect words={words} />
      </div>
    </>
  );
}
