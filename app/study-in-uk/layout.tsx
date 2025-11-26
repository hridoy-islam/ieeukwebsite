import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in the UK | International Education Exchange",
  description:
    "Discover how to study in the UK as an international student. Get expert guidance on universities, courses, visas, scholarships, and student life — all supported by International Education Exchange.",
  keywords: [
    "study in the UK",
    "UK universities for international students",
    "UK student visa 2025",
    "study abroad UK",
    "UK undergraduate courses",
    "UK postgraduate programmes",
    "scholarships for international students UK",
    "UK education consultants",
    "how to apply to UK universities",
    "student accommodation UK",
    "UCAS application help",
    "International Education Exchange",
  ],
  openGraph: {
    title: "Study in the UK | International Education Exchange",
    description:
      "Your trusted partner for studying in the UK. Get step-by-step support — from university selection and UCAS applications to visa processing and pre-departure briefings.",
    url: "/study-in-uk",
    siteName: "International Education Exchange",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Study in the UK – International Education Exchange",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in the UK | International Education Exchange",
    description:
      "Start your UK study journey with confidence. Expert advice on courses, visas, funding, and student life — tailored for international students.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/study-in-uk",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}