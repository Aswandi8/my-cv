"use client";
import { motion } from "framer-motion";

export default function SkillSection() {
  const skills = ["HTML", "CSS", "JavaScript", "Laravel", "Next.js", "IoT"];

  return (
    <section
      id="skill"
      className="min-h-screen flex flex-col justify-center items-center bg-[#EFF6FF] dark:bg-[#1E3A8A] text-center px-6 transition-all duration-500"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[var(--main-color)] mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4 max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-6 py-3 bg-[var(--card-color)] rounded-full shadow-md text-[var(--text-color)] font-semibold hover:bg-[var(--main-color)] hover:text-white transition-colors"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
