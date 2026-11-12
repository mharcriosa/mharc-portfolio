import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Mharc Riosa — Software Engineer",
  description:
    "Portfolio of Mharc Riosa, a software engineer with 4+ years of experience building enterprise web applications with Vue.js, Nuxt.js, Vuetify, and Laravel.",
  openGraph: {
    title: "Mharc Riosa — Software Engineer",
    description:
      "Frontend engineer crafting enterprise web apps — Vue.js, Nuxt.js, Vuetify, Laravel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
