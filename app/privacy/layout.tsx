import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Omniscient Education’s Privacy Policy to understand how we collect, use, store, and protect your personal information in compliance with UK GDPR and the Data Protection Act 2018.",
  keywords: [
    "Omniscient Education privacy policy",
    "UK GDPR compliance",
    "data protection",
    "student privacy policy",
    "education privacy UK",
    "data security Omniscient",
    "student data protection",
    "website privacy terms",
    "personal data rights",
    "GDPR education sector",
  ],
  openGraph: {
    title: "Privacy Policy",
    description:
      "Omniscient Education is committed to protecting your personal data in line with UK GDPR and the Data Protection Act 2018. Learn more about how we handle your information.",
    url: "/privacy",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - Omniscient Education",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Learn how Omniscient Education collects, stores, and protects your personal information under UK GDPR and the Data Protection Act 2018.",
    images: ["/omniscient-logo.png"],
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
