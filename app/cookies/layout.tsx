import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Learn how Omniscient Education uses cookies to enhance website functionality, improve user experience, analyze traffic, and support marketing, in compliance with UK GDPR.",
  keywords: [
    "Omniscient Education cookies",
    "cookies policy",
    "website cookies",
    "cookie usage",
    "user data",
    "privacy compliance",
    "UK GDPR cookies",
    "analytics cookies",
    "functional cookies",
    "tracking cookies"
  ],
  openGraph: {
    title: "Cookies Policy",
    description:
      "Read Omniscient Education’s Cookies Policy to understand how we use cookies for functionality, analytics, and marketing, and how you can manage them.",
    url: "/cookies",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cookies Policy - Omniscient Education",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy",
    description:
      "Discover how Omniscient Education uses cookies to improve your experience, analyze traffic, and support marketing while complying with UK GDPR.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/cookies",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
