import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | International Education Exchange",
  description:
    "Read International Education Exchange’s Terms & Conditions to understand the rules, intellectual property rights, liability limitations, and legal obligations when using our website and services.",
  keywords: [
    "International Education Exchange terms",
    "terms and conditions",
    "website use policy",
    "intellectual property",
    "liability limitations",
    "legal compliance",
    "UK education website terms",
    "student services terms",
    "website usage policy",
    "International Education Exchange legal notice"
  ],
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Review International Education Exchange’s Terms & Conditions for website usage, intellectual property, liability, and governing law.",
    url: "/terms",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions",
    description:
      "Learn the Terms & Conditions for using International Education Exchange’s website, including intellectual property, liability, and legal compliance.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
