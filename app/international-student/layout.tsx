import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "International Students | International Education Exchange",
  description:
    "Your complete pathway to UK higher education: English language courses, foundation, undergraduate, pre-master’s, master’s, and PhD programmes — all supported by expert guidance and university partnerships.",
  keywords: [
    "international student support UK",
    "study in UK for international students",
    "English language courses for university",
    "foundation year for international students",
    "undergraduate degrees UK international",
    "pre-master's programme UK",
    "master’s degrees for international students",
    "PhD and MPhil UK international applicants",
    "UK university admission support",
    "International Education Exchange",
    "study pathway UK",
    "international student services London",
    "UK higher education courses",
    "progression routes to UK universities",
  ],
  openGraph: {
    title: "International Students",
    description:
      "Start your academic journey in the UK with tailored pathways: from English language and foundation courses to undergraduate, master’s, and doctoral programmes — all with expert support from International Education Exchange.",
    url: "/international-student",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "International students studying at UK universities – supported by International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "International Students",
    description:
      "Find your ideal UK study pathway — English courses, foundation, bachelor’s, pre-master’s, master’s, and PhD — with personalised support from application to graduation.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/international-student",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}