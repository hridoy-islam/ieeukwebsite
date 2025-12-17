import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand how International Education Exchange collects, protects, and manages your personal data in accordance with UK GDPR and privacy laws.",
  keywords: [
    "International Education Exchange privacy",
    "IEE UK privacy policy",
    "data protection",
    "UK GDPR compliance",
    "personal data safety",
    "privacy rights",
    "educational consultancy privacy",
    "student data protection"
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn about International Education Exchange’s commitment to your privacy and how we handle your personal information securely.",
    url: "/privacy-policy",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Read the International Education Exchange Privacy Policy to see how we safeguard your information and comply with data regulations.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}