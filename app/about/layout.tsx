import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Omniscient Education—our mission, values, and global team. We connect students with world-class universities and provide expert guidance for academic and career success.",
  openGraph: {
    title: "About",
    description:
      "Discover Omniscient Education’s mission, values, and expert team dedicated to helping students achieve their goals through world-class education opportunities.",
    url: "/about",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png", // Replace with actual image if needed
        width: 1200,
        height: 630,
        alt: "About",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description:
      "Learn more about Omniscient Education—our mission, values, and team of global advisors dedicated to guiding students toward success.",
    images: ["/omniscient-logo.png"], // Replace with actual image if needed
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
