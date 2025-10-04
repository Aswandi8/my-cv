"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center bg-background text-foreground px-6">
      <motion.h1
        className="text-8xl font-extrabold text-primary tracking-wider"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.h2
        className="mt-4 text-2xl md:text-3xl font-semibold text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Halaman Tidak Ditemukan
      </motion.h2>

      <motion.p
        className="mt-3 text-muted-foreground max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Sepertinya kamu tersesat di dunia maya 🧭. Mari kembali ke halaman
        utama!
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <Link
          href="/"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:opacity-85 transition duration-300"
        >
          Kembali ke Beranda
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-10 opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Wandi Portfolio
        </p>
      </motion.div>
    </main>
  );
}
