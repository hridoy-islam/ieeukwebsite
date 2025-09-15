import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Omniscient Education. Reach us by phone, email, or visit our London office to start your educational journey today.",
  openGraph: {
    title: "Contact",
    description:
      "Connect with Omniscient Education—visit our office, call, or email us. We're here to guide you every step of your academic journey.",
    url: "/contact",
    siteName: "Omniscient Education",
    images: [
      {
        url: "/omniscient-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact",
      },
    ],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Contact Omniscient Education today. We're here to help you achieve your educational and career goals.",
    images: ["/omniscient-logo.png"],
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
