"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Terjadi error:", error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background text-center text-foreground px-6">
      <motion.h1
        className="text-5xl font-bold text-primary"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        Terjadi Kesalahan 😢
      </motion.h1>

      <motion.p
        className="mt-4 text-muted-foreground max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Maaf, ada sesuatu yang tidak berjalan dengan semestinya. Coba muat ulang
        halaman ini.
      </motion.p>

      <motion.button
        onClick={() => reset()}
        className="mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-lg shadow-md hover:opacity-85 transition duration-300"
        whileTap={{ scale: 0.95 }}
      >
        Coba Lagi
      </motion.button>
    </main>
  );
}
