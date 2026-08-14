import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner with IEE UK | Become a Recruitment Partner",
  description:
    "Join IEE UK as an approved recruitment partner and help international students access UK higher education opportunities. Learn about our UK Agent Quality Framework and apply to become a partner today.",
  keywords: [
    "partner with IEE UK",
    "become an education agent partner",
    "UK student recruitment partner",
    "education agent UK",
    "international student recruitment",
    "UK agent quality framework",
    "UK university admissions partner",
    "education consultancy partnership",
    "IEE UK partnerships",
    "International Education Exchange",
  ],
  openGraph: {
    title: "Partner with IEE UK | Become a Recruitment Partner",
    description:
      "Grow your international student recruitment with a trusted UK education partner. Apply to become an IEE UK partner and access UK university and college opportunities.",
    url: "/partner",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Partner with IEE UK – International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with IEE UK | Become a Recruitment Partner",
    description:
      "Join IEE UK as an approved recruitment partner and help international students access UK higher education opportunities.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/partner",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}