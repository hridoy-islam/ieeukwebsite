import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Services",
  description:
    "Discover Omniscient Education’s comprehensive services including international admissions, study abroad guidance, visa application support, UK & EU admission assistance, CV training, interview preparation, and more.",
  keywords: [
    "Omniscient Education services",
    "study abroad support",
    "university admission consultants",
    "UK university admission",
    "EU student services",
    "student recruitment",
    "visa application processing",
    "free admission assessment",
    "CV and personal statement training",
    "interview preparation",
    "English language courses London",
    "international education services",
    "student support services London",
    "career development guidance",
  ],
  openGraph: {
    title: "Services",
    description:
      "Explore our wide range of services including admission applications, visa support, CV & personal statement training, interview preparation, and English courses for EU & UK students.",
    url: "/services",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png",
        width: 1200,
        height: 630,
        alt: "Omniscient Education Services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services",
    description:
      "Omniscient Education provides expert-led services to support your academic journey — from applications and visa processing to interview training and free English courses.",
    images: ["/omniscient-logo.png"],
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
