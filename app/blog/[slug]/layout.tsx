
import { blogs } from "@/utils/blog";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>; // params is a Promise
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { slug } = await props.params;

  // Find blog by slug or fallback
  const blog = blogs.find((c) => c.slug === slug) || {
    title: "blogs",
    description:
      "Explore International Education Exchange blogs in Business, Technology, Healthcare, and Education. Find the right program for your career and academic goals.",
    image: "/educationTraining.jpg",
    keywords: ["blogs", "International Education Exchange", "higher education", "London college"],
  };

  // Build dynamic keywords
  const keywords = [
    "International Education Exchange",
    blog.title,
   
  ];

  return {
    title: `${blog.title} | International Education Exchange`,
    keywords,
    openGraph: {
      title: `${blog.title} | International Education Exchange`,
      url: `/blog/${slug}`,
      siteName: "International Education Exchange",
      images: [
        {
          url: blog.image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "website",
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | International Education Exchange`,
      images: [blog.image],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
