import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Universities & Colleges | International Education Exchange",
  description:
    "Explore our network of 26+ UK partner universities and colleges — including Anglia Ruskin, Aston, Coventry, UCLan, University of Law, and more — offering accredited courses for international students.",
  keywords: [
    "UK partner universities",
    "international student universities UK",
    "study at UK universities with support",
    "Anglia Ruskin University international",
    "Coventry University courses",
    "University of Law programmes",
    "London Metropolitan University",
    "Birmingham City University",
    "University of Sunderland London",
    "UK university partnerships",
    "accredited UK higher education institutions",
    "international admissions UK universities",
    "study in UK with education consultant",
    "International Education Exchange partners",
  ],
  openGraph: {
    title: "Partner Universities & Colleges",
    description:
      "Discover our trusted network of 26+ UK universities and colleges — all offering globally recognised degrees and dedicated support for international students.",
    url: "/universities-colleges",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Partner universities and colleges of International Education Exchange in the UK",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Universities & Colleges",
    description:
      "Study at leading UK institutions — including Aston, Northumbria, UCLan, Middlesex, and more — with seamless application and visa support from International Education Exchange.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/universities-colleges",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}