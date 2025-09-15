import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read Omniscient Education’s Terms & Conditions to understand the rules, intellectual property rights, liability limitations, and legal obligations when using our website and services.",
  keywords: [
    "Omniscient Education terms",
    "terms and conditions",
    "website use policy",
    "intellectual property",
    "liability limitations",
    "legal compliance",
    "UK education website terms",
    "student services terms",
    "website usage policy",
    "Omniscient Education legal notice"
  ],
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Review Omniscient Education’s Terms & Conditions for website usage, intellectual property, liability, and governing law.",
    url: "/terms",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - Omniscient Education",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions",
    description:
      "Learn the Terms & Conditions for using Omniscient Education’s website, including intellectual property, liability, and legal compliance.",
    images: ["/omniscient-logo.png"],
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
