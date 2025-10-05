"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const navItems = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "project", label: "Project" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      let current = "home";
      document.querySelectorAll("section").forEach((section) => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;
        if (scrollY >= top && scrollY < top + height) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Tutup menu setelah klik di mobile
  };

  if (!mounted) return null;

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md shadow-md bg-[color:var(--bg-color)]/90"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-[7%] py-5">
        {/* 🧩 LOGO */}
        <h1
          onClick={() => scrollToSection("home")}
          className="font-extrabold text-[1.2rem] md:text-[3rem] tracking-wider cursor-pointer transition-colors duration-300"
          style={{
            color: "var(--main-color)",
          }}
        >
          Portofolio
          <span style={{ color: "var(--secondary-color)" }}>.</span>
        </h1>

        {/* 🧭 NAVIGATION - DESKTOP */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={` text-base text-[1.3rem] font-bold  tracking-wider cursor-pointer transition-colors duration-300 ${
                active === item.id
                  ? "text-[color:var(--main-color)]"
                  : "text-[color:var(--text-color)] hover:text-[color:var(--main-color)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* ☀️🌙 TOGGLE THEME */}
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              setTheme(resolvedTheme === "light" ? "dark" : "light")
            }
            className="p-2 rounded-lg transition-all duration-300"
            style={{
              backgroundColor: "var(--card-color)",
              boxShadow: "0 2px 8px var(--shadow-color)",
            }}
            aria-label="Toggle theme"
          >
            {resolvedTheme === "light" ? (
              <MoonIcon
                className="w-6 h-6"
                style={{ color: "var(--main-color)" }}
              />
            ) : (
              <SunIcon
                className="w-6 h-6"
                style={{ color: "var(--secondary-color)" }}
              />
            )}
          </button>

          {/* 🍔 HAMBURGER (MOBILE) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors duration-300"
            style={{
              backgroundColor: "var(--card-color)",
              boxShadow: "0 2px 8px var(--shadow-color)",
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon
                className="w-6 h-6"
                style={{ color: "var(--main-color)" }}
              />
            ) : (
              <Bars3Icon
                className="w-6 h-6"
                style={{ color: "var(--main-color)" }}
              />
            )}
          </button>
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div
          className="flex flex-col items-center md:hidden gap-6 pb-6 bg-[color:var(--bg-color)] shadow-md"
          style={{
            boxShadow: "0 4px 8px var(--shadow-color)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`capitalize text-lg font-medium tracking-wide transition-colors duration-300 ${
                active === item.id
                  ? "text-[color:var(--main-color)]"
                  : "text-[color:var(--text-color)] hover:text-[color:var(--main-color)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
