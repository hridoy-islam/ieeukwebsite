import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Agent Quality Framework | IEE UK",
  description:
    "IEE UK is committed to high standards of professionalism, integrity and quality across international student recruitment. Explore our UK Agent Quality Framework, essential resources and key reference materials.",
  keywords: [
    "UK agent quality framework",
    "education agent quality framework UK",
    "ethical recruitment practices UK",
    "UK education agent resources",
    "British Council agent training",
    "National Code of Ethical Practice for Education Agents",
    "IEE UK quality framework",
    "student-centred recruitment",
    "international student recruitment standards",
    "International Education Exchange",
  ],
  openGraph: {
    title: "UK Agent Quality Framework | IEE UK",
    description:
      "Our commitment to quality across international student recruitment partnerships — promoting ethical practices, professional knowledge and accountability.",
    url: "/partner/uk-agent-quality-framework",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UK Agent Quality Framework – International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "UK Agent Quality Framework | IEE UK",
    description:
      "Quality recruitment. Professional partnerships. Better outcomes for students.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/partner/uk-agent-quality-framework",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}