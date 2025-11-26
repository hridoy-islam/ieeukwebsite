import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IEE - International Education Exchange | UK Universities",
  description:
    "Connect with reputed colleges and universities in the UK. Find the right people for the right place, locally and internationally.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
   keywords: [
    "International Education Exchange blogs",
    "UK university programs",
    "international education",
    "career development",
    "higher education",
    "study abroad",
    "professional training",
    "online blogs",
    "university admission support",
    "expert-led learning",
  ],
  openGraph: {
    title: "IEE - International Education Exchange | UK Universities",
    description:
      "Discover IEE’s global education programs. Join thousands of students transforming their careers with expert-led blogs.",
    url: "/",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/students.jpg",
        width: 1200,
        height: 630,
        alt: "IEE Blogs",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Education Exchange",
    description:
      "Browse IEE’s programs designed to unlock your potential. Start your learning journey today with expert guidance.",
    images: ["/students.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
