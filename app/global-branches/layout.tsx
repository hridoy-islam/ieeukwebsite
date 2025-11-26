import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Branches | International Education Exchange",
  description:
    "Explore our global branches across the UK. Connect with International Education Exchange and receive support from the office closest to you.",
  openGraph: {
    title: "Global Branches",
    description:
      "Discover International Education Exchange's branches across the UK. Visit or contact our regional offices for dedicated support.",
    url: "/global-branches",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Global Branches",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Branches",
    description:
      "Explore International Education Exchange's UK branch network and get personalized guidance from your nearest office.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/global-branches",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
