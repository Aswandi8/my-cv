"use client";
import { motion } from "framer-motion";

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-[#0F172A] text-center px-6 transition-all duration-500"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[var(--main-color)] mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Projects
      </motion.h2>
      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-5xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 bg-[var(--card-color)] rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-[var(--main-color)] mb-2">
              Project {i}
            </h3>
            <p className="text-[var(--text-secondary)]">
              Description of project {i}. Built using modern web technologies.
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
