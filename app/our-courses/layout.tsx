import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Courses | International Education Exchange",
  description:
    "Discover accredited undergraduate, postgraduate, foundation, and pathway courses offered through our partner universities in the UK and EU — including business, engineering, computing, health sciences, and arts programmes.",
  keywords: [
    "UK university courses for international students",
    "undergraduate degrees UK",
    "postgraduate taught programmes UK",
    "foundation year courses London",
    "international pathway programmes",
    "partner university courses",
    "business degree UK",
    "engineering courses for international students",
    "computing and AI degrees UK",
    "health and nursing courses UK",
    "arts and humanities degrees",
    "study in the UK with International Education Exchange",
    "accredited degree programmes",
    "on-campus university courses",
  ],
  openGraph: {
    title: "Our Courses",
    description:
      "Explore accredited academic courses — from foundation and undergraduate to master’s degrees — delivered by our UK and EU university partners across disciplines including Business, Engineering, Computing, and Health Sciences.",
    url: "/our-courses",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "University-level courses offered by International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Courses",
    description:
      "Enrol in recognised undergraduate and postgraduate degree programmes via our university partnerships in the UK and EU — designed for international students seeking academic excellence and career success.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/our-courses",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}