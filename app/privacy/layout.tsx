import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | International Education Exchange",
  description:
    "Read International Education Exchange’s Privacy Policy to understand how we collect, use, store, and protect your personal information in compliance with UK GDPR and the Data Protection Act 2018.",
  keywords: [
    "International Education Exchange privacy policy",
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
      "International Education Exchange is committed to protecting your personal data in line with UK GDPR and the Data Protection Act 2018. Learn more about how we handle your information.",
    url: "/privacy",
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
      "Learn how International Education Exchange collects, stores, and protects your personal information under UK GDPR and the Data Protection Act 2018.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
