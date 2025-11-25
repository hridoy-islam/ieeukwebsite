"use client";
import { Globe, Briefcase, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudyInUKPage() {
  const advantages = [
    {
      icon: Award,
      title: "Academic Excellence",
      description:
        "UK universities consistently rank among the top institutions globally, known for their high teaching standards, cutting-edge research, and innovative facilities.",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description:
        "A UK degree is highly valued by employers worldwide, enhancing career prospects and earning potential.",
    },
    {
      icon: BookOpen,
      title: "Work and Study Flexibility",
      description:
        "International students are permitted to work part-time (up to 20 hours per week during term time), gaining valuable experience while supporting their studies.",
    },
    {
      icon: Globe,
      title: "Post-Study Work Visa",
      description:
        "Upon graduation, students may be eligible for the PSW visa, allowing you to work full-time in the UK and gain professional experience.",
    },
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
            Study in the UK
          </h1>
          <p className="text-lg text-white/90">
            International Education Exchange is dedicated to providing
            exceptional support to international students aspiring to study in
            the United Kingdom.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The UK remains one of the most sought-after destinations for higher
            education, offering a world-class, globally recognised education
            system. Students benefit from shorter course durations,
            internationally respected degrees, and a rich multicultural learning
            environment.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Choosing to study in the UK is an investment in a future of global
            opportunities, academic excellence, and personal growth.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Key Advantages of Studying in the UK
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <IconComponent className="w-8 h-8 text-[#D04418] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {advantage.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your UK Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our expert advisors are here to guide you every step of the way
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
