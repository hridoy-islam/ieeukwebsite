"use client";
import {
  CheckCircle,
  Users,
  FileText,
  Briefcase,
  Award,
  Globe,
  BookOpen,
  Heart,
  Zap,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  const recruits = [
    {
      title: "UK Students",
      description:
        "Supporting domestic students throughout their academic journey",
    },
    {
      title: "EU Students",
      description:
        "Comprehensive guidance for EU citizens pursuing UK education",
    },
    {
      title: "International Students",
      description:
        "Expert support for Asian, Middle Eastern, and worldwide applicants",
    },
  ];

  const helps = [
    "Applications",
    "Student Finance Applications",
    "Scholarships",
    "Interviews",
    "Student Counselling",
  ];

  const courseTypes = [
    "Bachelor Degrees",
    "Master Degrees",
    "Foundation Diploma Courses",
    "Higher National Diploma",
    "Higher National Certificate",
  ];

  const courses = [
    "Business Management",
    "Law",
    "Health & Social Care",
    "ICT",
    "Hospitality Management",
    "Project Management",
    "Finance and Accounting",
    "And many more",
  ];

  const services = [
    {
      icon: Users,
      title: "Expert Admission Consultants",
      description:
        "Our experienced team processes university applications with a 100% success rate to top UK institutions",
    },
    {
      icon: FileText,
      title: "Application Processing",
      description:
        "Complete support for UCAS applications and university-specific requirements",
    },
    {
      icon: BookOpen,
      title: "Personal Statement Editing",
      description:
        "Professional guidance to craft compelling personal statements",
    },
    {
      icon: Award,
      title: "Interview Preparation",
      description: "Comprehensive interview coaching and mock sessions",
    },
    {
      icon: Heart,
      title: "Visa Assistance",
      description:
        "Expert visa consultation following immigration requirements",
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Career counselling to secure the right job opportunities",
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
            Our Services
          </h1>
          <p className="text-lg text-white/90">
            Comprehensive support for your educational journey in the UK
          </p>
        </div>
      </section>

      {/* Hero Section */}

      {/* We Recruit Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            We Recruit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recruits.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-[#D04418]/20 hover:border-[#D04418] transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#25215C] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help With Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            We Help Our Students With
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {helps.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border-2 border-[#D04418]/20 hover:border-[#D04418] hover:shadow-lg transition-all duration-300 group text-center"
              >
                <CheckCircle className="w-8 h-8 text-[#D04418] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-[#25215C]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Types Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Types of Courses We Assist
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {courseTypes.map((course, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-gradient-to-br from-[#25215C]/5 to-[#D04418]/5 border-2 border-[#25215C]/20 hover:border-[#D04418] hover:shadow-lg transition-all duration-300 group"
              >
                <BookOpen className="w-6 h-6 text-[#D04418] mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-bold text-[#25215C] text-sm">{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses We Mainly Assist */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Courses We Mainly Assist With
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border-2 border-[#D04418]/20 hover:border-[#D04418] hover:bg-[#D04418]/5 transition-all duration-300 group text-center"
              >
                <Zap className="w-6 h-6 text-[#D04418] mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-bold text-[#25215C] group-hover:text-[#D04418] transition-colors">
                  {course}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Our Key Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#25215C] to-[#D04418] rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#25215C] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Our Services?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get in touch with our consultants to start your educational journey
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Get Expert Guidance
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
