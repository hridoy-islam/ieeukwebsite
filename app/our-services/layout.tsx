import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Our Services | International Education Exchange",
  description:
    "Discover International Education Exchange’s comprehensive services including international admissions, study abroad guidance, visa application support, UK & EU admission assistance, CV training, interview preparation, and more.",
  keywords: [
    "International Education Exchange services",
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
    title: "Our Services",
    description:
      "Explore our wide range of services including admission applications, visa support, CV & personal statement training, interview preparation, and English courses for EU & UK students.",
    url: "/our-services",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "International Education Exchange Services",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services",
    description:
      "International Education Exchange provides expert-led services to support your academic journey — from applications and visa processing to interview training and free English courses.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/our-services",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
