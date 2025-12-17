import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review the Terms of Service for International Education Exchange. Understand the rules, guidelines, and legal agreements governing the use of our educational consultancy services.",
  keywords: [
    "International Education Exchange terms",
    "IEE UK terms of service",
    "legal agreement",
    "user conduct",
    "educational consultancy terms",
    "service agreement",
    "UK education services terms",
    "IEE terms and conditions"
  ],
  openGraph: {
    title: "Terms of Service",
    description:
      "Read the official Terms of Service for International Education Exchange to understand your rights and responsibilities when using our website and services.",
    url: "/terms-of-service",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Terms of Service - International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service",
    description:
      "Review the Terms of Service for International Education Exchange, governing our educational consultancy and recruitment services.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}