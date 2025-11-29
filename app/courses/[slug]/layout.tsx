import { courses } from "@/utils/courseData";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>; // params is a Promise
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;

  // Find course by slug or fallback
  const course = courses.find((c) => c.slug === slug) || {
    title: "Courses",
    description:
      "Explore International Education Exchange courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    image: "/educationTraining.jpg",
    keywords: ["courses", "International Education Exchange", "higher education", "London college"],
  };

  // Build dynamic keywords
  const keywords = [
    "International Education Exchange",
    course.title,
   
  ];

  return {
    title: `${course.title} | International Education Exchange`,
    keywords,
    openGraph: {
      title: `${course.title} | International Education Exchange`,
      url: `/courses/${slug}`,
      siteName: "International Education Exchange",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title,
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | International Education Exchange`,
      images: [course.image],
    },
    alternates: {
      canonical: `/courses/${slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
