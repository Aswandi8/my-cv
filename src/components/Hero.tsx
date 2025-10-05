"use client";

import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaCode,
  FaLaptopCode,
  FaDraftingCompass,
  FaMicrochip,
} from "react-icons/fa";

export default function Home() {
  // ✅ gunakan useMemo agar tidak memicu re-render yang tidak perlu
  const professions = useMemo(
    () => [
      { icon: <FaCode />, title: "Web Developer" },
      { icon: <FaLaptopCode />, title: "Fullstack Developer" },
      { icon: <FaDraftingCompass />, title: "UI/UX Designer" },
      { icon: <FaMicrochip />, title: "IoT Enthusiast" },
    ],
    []
  );

  const socialLinks = useMemo(
    () => [
      { icon: <FaGithub />, url: "https://github.com/aswandibaso" },
      { icon: <FaLinkedin />, url: "https://linkedin.com/in/aswandibaso" },
      { icon: <FaInstagram />, url: "https://instagram.com/aswandibaso" },
      { icon: <FaTwitter />, url: "https://twitter.com/aswandibaso" },
      { icon: <FaFacebook />, url: "https://facebook.com/aswandibaso" },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ interval rotasi profesi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % professions.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [professions.length]);

  const rotateDeg = -(360 / professions.length) * currentIndex;

  return (
    <section
      id="home"
      className="home bg-[#F9FAFB] dark:bg-[#0F172A] text-[#111827] dark:text-[#F9FAFB] transition-colors duration-500"
    >
      <div className="home-content">
        <h3 className="text-[#6B7280] dark:text-[#94A3B8]">Hello, I am</h3>
        <h1 className="text-[#111827] dark:text-[#F9FAFB]">Aswandi Baso</h1>
        <p className="text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
          A passionate IT Developer from Makassar with experience in web
          development and system design. Skilled in HTML, CSS, JavaScript,
          Laravel, CodeIgniter, and Next.js — I love turning ideas into
          functional, modern applications.
        </p>

        <div className="social-media">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] dark:text-[#3B82F6] hover:text-[#1E3A8A] dark:hover:text-[#60A5FA] transition-transform transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <a
          className="btn inline-block mt-6 px-6 py-3 rounded-lg text-white bg-[#2563EB] dark:bg-[#3B82F6] hover:bg-[#1E3A8A] dark:hover:bg-[#60A5FA] transition-colors duration-300"
          href="/CV_AswandiB.pdf"
          download
        >
          Download CV
        </a>
      </div>

      <div className="profession-container">
        <div
          className="profession-box"
          style={{
            transform: `rotate(${rotateDeg}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {professions.map((prof, index) => (
            <div
              key={index}
              className={`profession text-[#2563EB] dark:text-[#3B82F6] bg-[#F9FAFB] dark:bg-[#0F172A] ${
                index === currentIndex ? "active" : ""
              }`}
              style={
                {
                  "--i": index.toString(),
                } as React.CSSProperties
              }
            >
              <div className="iconHome">{prof.icon}</div>
              <h3>{prof.title}</h3>
            </div>
          ))}
          <div className="circle border-[#2563EB] dark:border-[#3B82F6]"></div>
        </div>
        <div className="overlay"></div>
      </div>

      <div className="home-img">
        <Image
          src="/profile.png" // path relatif dari folder public
          alt="My Picture"
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
