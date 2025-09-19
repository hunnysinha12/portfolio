"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export function FooterMain() {
  return (
    <div className="py-20  text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-6">
          {/* Left */}
          <div className="text-lg font-semibold">Jyoty Bhushan Sinha</div>

          {/* Right - Links */}
          <div className="flex gap-6">
            <FooterLinkGroup className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center sm:text-left">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#degree">Degree</FooterLink>
              <FooterLink href="#porject">Project</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-8" />

        {/* Bottom Section */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <FooterCopyright by="copyright" year={2025} />

          {/* Social Icons */}
          <div className="flex space-x-6">
            <FooterIcon
              href="https://www.facebook.com/hunnysinha127"
              icon={BsFacebook}
            />
            <FooterIcon
              href="https://www.instagram.com/hunnysinha12/"
              icon={BsInstagram}
            />
            <FooterIcon href="https://x.com/SinhaHunny" icon={BsTwitter} />
            <FooterIcon
              href="https://github.com/hunnysinha12"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
