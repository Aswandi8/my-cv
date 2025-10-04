import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wandi | Portfolio",
    template: "Wandi | %s",
  },
  description:
    "Portfolio pribadi Wandi — Web Developer & IT Enthusiast. Menampilkan proyek, keahlian, dan kontak.",
  metadataBase: new URL("https://wandi.vercel.app"),

  openGraph: {
    title: "Wandi | Portfolio",
    description:
      "Jelajahi karya dan proyek terbaik dari Wandi, seorang Web Developer dengan passion di dunia IT.",
    url: "https://wandi.vercel.app",
    siteName: "Wandi Portfolio",
    images: [
      {
        url: "/images/og-image.jpg", // simpan di public/images/
        width: 1200,
        height: 630,
        alt: "Preview Portfolio Wandi",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  other: {
    "instagram:profile": "https://instagram.com/basoaswandi",
    "facebook:profile": "https://facebook.com/aswandi.baso.2025",
    "tiktok:profile": "https://tiktok.com/@aswandibaso563",
    "github:profile": "https://github.com/Aswandi8",
  },

  alternates: {
    canonical: "https://wandi.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
