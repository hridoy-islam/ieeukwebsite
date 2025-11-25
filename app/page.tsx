"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import LatestBlog from "@/components/LatestBlog";
import CoursesSection from "@/components/CoursesSection";
import FeatureService from "@/components/FeatureService";
import Statstics from "@/components/Statastics";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Statstics />
      <FeatureService />
      <CoursesSection />
      <LatestBlog />
      <CtaSection />
    </div>
  );
}
