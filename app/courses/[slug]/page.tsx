"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  Globe,
  Star,
  Download,
  CheckCircle,
  Calendar,
  MapPin,
  GraduationCap,
  Target,
  Briefcase,
  Heart,
  Share2,
  ChevronRight,
  TrendingUp,
  Shield,
  Zap,
  FileText,
  DollarSign,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Sample course data
  const course = {
    id: 1,
    title: "Master of Business Administration (MBA)",
    subtitle: "Advanced Business Leadership & Management",
    university: "University of London",
    location: "London, UK",
    duration: "24 Months",
    mode: "Full-time / Part-time",
    intake: "September 2024",
    tuitionFee: "£18,500",
    rating: 4.8,
    reviews: 156,
    students: 2847,
    image: "https://www.tmu.ac.in/uploads/blogs/mba_Final_BPC-01.jpg",
    description:
      "Our MBA program is designed for ambitious professionals seeking to advance their careers in business leadership. This comprehensive program combines theoretical knowledge with practical application, preparing graduates for senior management roles across various industries.",
    highlights: [
      "Accredited by AACSB and EQUIS",
      "Industry-experienced faculty",
      "Global networking opportunities",
      "Flexible study options",
      "Career placement support",
      "International study tours",
    ],
    modules: [
      { name: "Strategic Management", credits: 20, duration: "12 weeks" },
      { name: "Financial Management", credits: 20, duration: "12 weeks" },
      { name: "Marketing Strategy", credits: 15, duration: "10 weeks" },
      { name: "Operations Management", credits: 15, duration: "10 weeks" },
      { name: "Leadership & Ethics", credits: 15, duration: "8 weeks" },
      { name: "International Business", credits: 15, duration: "8 weeks" },
      { name: "Dissertation Project", credits: 60, duration: "6 months" },
    ],
    requirements: [
      "Bachelor's degree (2:1 or above)",
      "3+ years work experience",
      "IELTS 6.5 or equivalent",
      "Personal statement",
      "Two professional references",
      "CV/Resume",
    ],
    careerOutcomes: [
      "Senior Management Positions",
      "Business Consultant",
      "Project Manager",
      "Entrepreneur/Business Owner",
      "Strategy Analyst",
      "Operations Director",
    ],
  };

  const stats = [
    { icon: Users, label: "Students", value: "2,847" },
    { icon: Award, label: "Accredited", value: "100%" },
    { icon: TrendingUp, label: "Job Rate", value: "94%" },
    { icon: Globe, label: "Countries", value: "45+" },
  ];

  return (
    <main className="bg-white">
      {/* Clean Header */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Courses
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {course.title}
          </h1>
          <p className="text-lg text-white/90">{course.subtitle}</p>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-3">
                <Clock className="w-5 h-5 text-[#D04418] mr-3" />
                <span className="text-sm font-medium text-gray-600">
                  Duration
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {course.duration}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-[#25215C] mr-3" />
                <span className="text-sm font-medium text-gray-600">
                  Location
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {course.location}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-3">
                <DollarSign className="w-5 h-5 text-[#D04418] mr-3" />
                <span className="text-sm font-medium text-gray-600">
                  Tuition Fee
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {course.tuitionFee}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-3">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 mr-3" />
                <span className="text-sm font-medium text-gray-600">
                  Rating
                </span>
              </div>
              <p className="text-xl font-bold text-gray-900">
                {course.rating} ({course.reviews})
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Navigation Tabs */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-3">
                {[
                  { id: "overview", label: "Overview", icon: BookOpen },
                  {
                    id: "curriculum",
                    label: "Curriculum",
                    icon: GraduationCap,
                  },
                  {
                    id: "requirements",
                    label: "Requirements",
                    icon: CheckCircle,
                  },
                  { id: "careers", label: "Career Outcomes", icon: Briefcase },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg font-semibold transition-all text-left ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-[#25215C] to-[#D04418] text-white shadow-md"
                        : "bg-white text-gray-600 hover:bg-gray-50 shadow-sm border border-gray-200"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-8">
              {activeTab === "overview" && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Course Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    {course.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {course.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <CheckCircle className="w-5 h-5 text-[#D04418] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setIsEnrolled(!isEnrolled)}
                      className="bg-gradient-to-r from-[#25215C] to-[#D04418] text-white font-bold px-8 py-3 rounded-lg hover:shadow-lg transition-shadow"
                    >
                      {isEnrolled ? "Already Applied" : "Apply Now"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 font-bold px-8 py-3 rounded-lg hover:border-[#25215C]"
                    >
                      <Download className="w-5 h-5 mr-2" /> Download Brochure
                    </Button>
                  </div>
                </div>
              )}

              {activeTab === "curriculum" && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Course Curriculum
                  </h2>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div
                        key={index}
                        className="p-5 bg-gray-50 rounded-lg border-l-4 border-[#D04418]"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold text-gray-900">
                            {module.name}
                          </h3>
                          <span className="text-sm bg-[#25215C]/10 text-[#25215C] px-3 py-1 rounded-full">
                            {module.credits} Credits
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                          <Clock className="w-4 h-4 mr-2 text-[#D04418]" />
                          Duration: {module.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "requirements" && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Entry Requirements
                  </h2>
                  <div className="space-y-3 mb-8">
                    {course.requirements.map((requirement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gray-50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-[#25215C] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "careers" && (
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Career Outcomes
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.careerOutcomes.map((career, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gradient-to-br from-[#25215C]/5 to-[#D04418]/5 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center">
                          <Target className="w-5 h-5 text-[#D04418] mr-3 flex-shrink-0" />
                          <span className="font-semibold text-gray-900">
                            {career}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Get started with your application today and join thousands of
            successful graduates.
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
