import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rajkshrestha1.com.np"),
  title: {
    default: "Raj Kumar Shrestha — Senior Frontend Engineer",
    template: "%s — Raj Kumar Shrestha",
  },
  description:
    "Senior Frontend Engineer specializing in React, Next.js, TypeScript, Vue and Nuxt.",
  icons: { icon: "/icon.png" },
  openGraph: {
    title: "Raj Kumar Shrestha — Senior Frontend Engineer",
    description:
      "Frontend engineer specializing in React, Next.js, TypeScript, Vue and Nuxt.",
    images: ["/raj-og-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
