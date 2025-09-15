import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Courses",
  description:
    "Explore Omniscient Education’s world-class programs designed to advance your career and unlock new opportunities through expert-led courses.",
    keywords: [
    "Omniscient Education courses",
    "UK university programs",
    "international education",
    "career development",
    "higher education",
    "study abroad",
    "professional training",
    "online courses",
    "university admission support",
    "expert-led learning",
  ],
  openGraph: {
    title: "Courses",
    description:
      "Discover Omniscient Education’s global education programs. Join thousands of students transforming their careers with expert-led courses.",
    url: "/courses",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png",
        width: 1200,
        height: 630,
        alt: "Courses",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courses",
    description:
      "Browse Omniscient Education’s programs designed to unlock your potential. Start your learning journey today with expert guidance.",
    images: ["/omniscient-logo.png"],
  },
  alternates: {
    canonical: "/courses",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
