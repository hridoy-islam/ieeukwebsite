import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Learn how International Education Exchange uses cookies to enhance website functionality, improve user experience, analyze traffic, and support marketing, in compliance with UK GDPR.",
  keywords: [
    "International Education Exchange cookies",
    "IEE UK cookies policy",
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
      "Read International Education Exchange’s Cookies Policy to understand how we use cookies for functionality, analytics, and marketing, and how you can manage them.",
    url: "/cookie-policy",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy - International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy",
    description:
      "Discover how International Education Exchange uses cookies to improve your experience, analyze traffic, and support marketing while complying with UK GDPR.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}