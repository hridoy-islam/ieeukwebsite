"use client";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function UniversitiesCollegesPage() {
  const institutions = [
    "Anglia Ruskin University",
    "Aston University",
    "Bangor University",
    "Birmingham City University",
    "Bournemouth University",
    "Bloomsbury Institute London",
    "Coventry University",
    "De Montfort University",
    "London Metropolitan University",
    "London South Bank University",
    "Middlesex University",
    "Northumbria University",
    "Nottingham Trent University",
    "Regent College London",
    "Teesside University",
    "University College Birmingham",
    "University for the Creative Arts",
    "University of Bedfordshire",
    "University of Dundee",
    "University of East London",
    "University of Greenwich",
    "University of Hertfordshire",
    "University of Law",
    "University of Lancashire",
    "University of Portsmouth",
    "University of Sunderland (London Campus)",
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Universities & Colleges
          </h1>
          <p className="text-lg text-white/90">
            Partner institutions offering world-class education and
            opportunities
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            At IEE, we partner with a wide range of reputable universities and
            colleges across the UK to provide students with high-quality
            education and opportunities. Our partnerships ensure that students
            have access to a variety of programs, expert faculty, and excellent
            facilities.
          </p>
        </div>
      </section>

      {/* Institutions Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {institutions.map((institution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg hover:border-[#D04418] border border-gray-200 transition-all"
              >
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-[#25215C] flex-shrink-0 mt-1" />
                  <p className="text-lg font-semibold text-gray-900">
                    {institution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore Our Partner Institutions
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Find the perfect university or college that matches your academic
            goals
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Get More Information
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
