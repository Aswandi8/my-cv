"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <motion.div
        className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />

      <motion.p
        className="mt-6 text-muted-foreground text-lg font-medium tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        Memuat halaman...
      </motion.p>
    </main>
  );
}
