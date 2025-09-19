import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarHero } from "@/widgets/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jyoty Bhushan Sinha",
  description:
    "This portfolio is a reflection of my journey as a developer, showcasing the skills, projects, and passion I bring to building impactful digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarHero />
        {children}
      </body>
    </html>
  );
}
