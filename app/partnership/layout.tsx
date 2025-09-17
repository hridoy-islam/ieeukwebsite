import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Partnerships",
  description:
    "Discover Omniscient Education’s university and institutional partnerships. Learn how we connect talented students with world-class universities worldwide.",
  openGraph: {
    title: "Partnerships",
    description:
      "Omniscient Education partners with universities and institutions across the UK, EU, USA, Canada, and beyond to provide global education opportunities.",
    url: "/partnership",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Partnerships",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnerships",
    description:
      "Building strong partnerships with universities worldwide to ensure students access the best educational opportunities.",
    images: ["/logo.jpg"],
  },
  alternates: {
    canonical: "/partnership",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
