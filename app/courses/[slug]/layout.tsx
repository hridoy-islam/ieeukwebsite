import { courses } from "@/utils/data";
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
      "Explore Omniscient Education courses in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    image: "/educationTraining.jpg",
    keywords: ["courses", "Omniscient Education", "higher education", "London college"],
  };

  // Build dynamic keywords
  const keywords = [
    "Omniscient Education",
    course.title,
   
  ];

  return {
    title: `${course.title} | Omniscient Education`,
    description: course.description,
    keywords,
    openGraph: {
      title: `${course.title} | Omniscient Education`,
      description: course.description,
      url: `/courses/${slug}`,
      siteName: "Omniscient Education",
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
      title: `${course.title} | Omniscient Education`,
      description: course.description,
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
