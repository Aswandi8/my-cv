"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ThemeProvider({ children }: Props) {
  return (
    <NextThemesProvider
      attribute="class" // Tailwind akan pakai class 'dark'
      defaultTheme="system" // mengikuti theme device
      enableSystem // aktifkan mode sistem
      disableTransitionOnChange // cegah flicker saat load
    >
      {children}
    </NextThemesProvider>
  );
}
