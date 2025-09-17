import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Omniscient Education - Empowering Minds Through Excellence",
//   description:
//     "Discover world-class education opportunities with Omniscient. We bridge the gap between ambition and achievement through innovative learning solutions and global partnerships.",
// };

export const metadata: Metadata = {
  title: {
    default: "Omniscient Education",
    template: "%s | Omniscient Education",
  },
  description:
    "Discover world-class education opportunities with Omniscient. We bridge the gap between ambition and achievement through innovative learning solutions and global partnerships.",
  keywords: [
    "Omniscient Education",
    "higher education",
    "courses in London",
    "student accommodation",
    "career support",
    "alumni network",
  ],
  openGraph: {
    title: "Omniscient Education",
    description:
      "Discover world-class education opportunities with Omniscient. We bridge the gap between ambition and achievement through innovative learning solutions and global partnerships.",
    url: "/",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Omniscient Education",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omniscient Education",
    description:
      "Discover world-class education opportunities with Omniscient. We bridge the gap between ambition and achievement through innovative learning solutions and global partnerships.",
    images: ["/logo.jpg"],
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
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
