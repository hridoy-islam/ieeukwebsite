import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Course Search | International Education Exchange",
  description:
    "Explore International Education Exchange’s world-class programs designed to advance your career and unlock new opportunities through expert-led courses.",
    keywords: [
    "International Education Exchange courses",
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
    title: "Course Search",
    description:
      "Discover International Education Exchange’s global education programs. Join thousands of students transforming their careers with expert-led courses.",
    url: "/course-search",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.jpg",
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
    title: "Course Search",
    description:
      "Browse International Education Exchange’s programs designed to unlock your potential. Start your learning journey today with expert guidance.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/course-search",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
