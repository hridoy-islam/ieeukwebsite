import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Partner | IEE UK Recruitment Partner Application",
  description:
    "Join IEE UK as an approved recruitment partner and help international students access UK higher education opportunities. Apply now — we work with education agents, consultants, schools, colleges and international recruitment organisations.",
  keywords: [
    "become an IEE UK partner",
    "education agent application UK",
    "become a recruitment partner",
    "UK education agent partnership",
    "international student recruitment partner",
    "IEE UK agent application",
    "education consultancy partnership UK",
    "apply to become an education partner",
    "International Education Exchange",
  ],
  openGraph: {
    title: "Become a Partner | IEE UK Recruitment Partner Application",
    description:
      "Apply to become an approved IEE UK recruitment partner. Access UK university and college opportunities with dedicated partner support.",
    url: "/partner/become-a-partner",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Become a Partner – International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Become a Partner | IEE UK Recruitment Partner Application",
    description:
      "Join IEE UK as an approved recruitment partner and help international students access UK higher education opportunities.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/partner/become-a-partner",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}