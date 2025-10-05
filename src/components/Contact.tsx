"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-[var(--bg-color)] dark:bg-[#0F172A] text-center px-6 transition-all duration-500"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[var(--main-color)] mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-lg text-[var(--text-secondary)] max-w-xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Let’s connect! Feel free to reach out for collaborations or any project
        discussions.
      </motion.p>

      <form className="mt-8 flex flex-col gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card-color)] text-[var(--text-color)]"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card-color)] text-[var(--text-color)]"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-[var(--card-color)] text-[var(--text-color)]"
        ></textarea>
        <button
          type="submit"
          className="btn bg-[var(--main-color)] text-white font-semibold py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
