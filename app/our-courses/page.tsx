"use client";
import { BookOpen, ArrowRight, CheckCircle, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OurCoursesPage() {
  const courseTypes = [
    {
      title: "English Language Courses",
      description:
        "Improve your English proficiency with our comprehensive language programs designed to prepare you for university study",
      icon: BookOpen,
    },
    {
      title: "Foundation Degree Courses",
      description:
        "Build a strong foundation before progressing to undergraduate studies at leading UK institutions",
      icon: GraduationCap,
    },
    {
      title: "Undergraduate Courses",
      description:
        "Pursue your bachelor's degree across diverse subjects and disciplines from top UK universities",
      icon: BookOpen,
    },
    {
      title: "Pre-Master's Courses",
      description:
        "Prepare for your master's level studies with specialized pre-master's programs",
      icon: GraduationCap,
    },
    {
      title: "Master's Courses",
      description:
        "Advance your career with master's degrees in various fields from prestigious UK institutions",
      icon: BookOpen,
    },
    {
      title: "MPhil/PhD Programs",
      description:
        "Pursue doctoral research and advanced studies at the UK's leading research universities",
      icon: GraduationCap,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
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
            Our Courses
          </h1>
          <p className="text-lg text-white/90">
            A wide variety of programs through our trusted university and
            college partners across the UK
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At IEE, we offer a wide variety of programs through our trusted
              university and college partners across the UK. Whether you're just
              beginning your academic journey or pursuing advanced studies, we
              can help you find the right course to achieve your goals.
            </p>
            <div className="inline-flex items-center justify-center px-6 py-3 bg-[#D04418]/10 rounded-full border border-[#D04418]/20">
              <span className="text-[#D04418] font-semibold">
                Diverse Range of Programs Available
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs Include */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Our Programs Include
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courseTypes.map((course, idx) => {
              const IconComponent = course.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-2xl bg-white border-2 border-[#D04418]/20 hover:border-[#D04418] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#25215C] mb-3">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Why Choose Our Programs?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Students can choose from a diverse range of subjects and study options offered by our partner institutions",
              "Ensuring the perfect match for your academic interests and career aspirations",
              "Expert guidance throughout the entire application and enrollment process",
              "Support from our experienced team at every step of your educational journey",
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-xl bg-gradient-to-br from-[#25215C]/5 to-[#D04418]/5 border border-[#D04418]/20"
              >
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Specializations */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Popular Study Areas
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Engineering",
              "Business & Management",
              "Law",
              "Medicine & Health",
              "Computer Science",
              "Psychology",
              "Economics",
              "Education",
            ].map((area, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border-2 border-[#D04418]/20 hover:border-[#D04418] hover:shadow-lg transition-all duration-300 group text-center"
              >
                <p className="font-bold text-[#25215C] group-hover:text-[#D04418] transition-colors">
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Find the Right Program?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our team today and let us guide you every step of the way!
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
