import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | International Education Exchange",
  description:
    "Stay informed with expert insights on studying in the UK, university admissions, visa updates, student life, scholarships, and international education trends — from International Education Exchange.",
  keywords: [
    "study in UK blog",
    "international student advice",
    "UK university admission tips",
    "student visa UK updates",
    "scholarships for international students",
    "preparing for UK studies",
    "UCAS application guide",
    "student life in London",
    "higher education insights",
    "International Education Exchange blog",
    "education consultant blog UK",
    "study abroad resources",
  ],
  openGraph: {
    title: "Blog | International Education Exchange",
    description:
      "Expert articles, guides, and updates for international students — covering UK admissions, visas, scholarships, student life, and career readiness.",
    url: "/blogs",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "International Education Exchange Blog – Study in the UK Insights",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | International Education Exchange",
    description:
      "Practical advice, latest updates, and success stories for international students planning to study in the UK — from application to graduation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/blogs",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}