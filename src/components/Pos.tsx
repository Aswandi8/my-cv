"use client";

import {
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300"
    >
      {/* <div className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-20 py-20 bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300"></div> */}
      {/* Left Side — Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center relative"
      >
        <div className="about-image">
          <Image
            src="/profile.png"
            alt="My Picture"
            width={300}
            height={300}
            priority
          />
        </div>
      </motion.div>

      {/* Right Side — Content */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="about-subtitle ">My Intro</p>
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Halo 👋, saya{" "}
          <span className="font-semibold text-[var(--text-color)]">Wandi</span>{" "}
          — seorang{" "}
          <span className="text-[var(--main-color)]">Web Developer</span> yang
          berfokus pada pengembangan antarmuka modern, performa tinggi, dan
          desain yang menarik. Saya memiliki pengalaman dengan{" "}
          <span className="font-medium text-[var(--secondary-color)]">
            HTML, CSS, JavaScript, Laravel, dan Next.js
          </span>
          .
        </p>

        {/* Grid Biografi */}
        <div className="about-grid">
          <div className="flex items-center gap-3">
            <UserIcon className="w-6 h-6]" />
            <span>Nama : Aswandi</span>
          </div>
          <div className="flex items-center gap-3">
            <UserIcon className="w-6 h-6]" />
            <span>Phone : Aswandi</span>
          </div>
          <div className="flex items-center gap-3">
            <UserIcon className="w-6 h-6]" />
            <span>Email : Aswandi</span>
          </div>
        </div>
        <div>
          <span>My Interests</span>
          <div className="about-flex flex items-center gap-3">
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6]" />
              <span>Musik</span>
            </div>
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6]" />
              <span>Movie</span>
            </div>
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6]" />
              <span>Membaca</span>
            </div>
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6]" />
              <span>Membaca</span>
            </div>
            <div className="flex items-center gap-3">
              <UserIcon className="w-6 h-6]" />
              <span>Membaca</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
