"use client";

import Header from "@/components/Header";
import HomeSection from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden scroll-smooth">
      <Header />
      <HomeSection />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}
