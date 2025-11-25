"use client";
import {
  GraduationCap,
  Clock,
  DollarSign,
  ArrowRight,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function CoursesPage() {
  const allCourses = [
    {
      name: "BSc Computer Science",
      university: "University of Manchester",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "A comprehensive program covering fundamental and advanced concepts in computing, software development, and artificial intelligence.",
      image: "/computer-science-students.jpg",
      link: "#",
    },
    {
      name: "MBA International Business",
      university: "University of London",
      duration: "1 Year",
      fees: "£25,000 (Intl)",
      description:
        "An intensive Master of Business Administration focusing on global markets, strategy, and leadership in an international context.",
      image: "/business-school-students.jpg",
      link: "#",
    },
    {
      name: "MSc Data Science",
      university: "University of Edinburgh",
      duration: "1 Year",
      fees: "£15,000 (UK)",
      description:
        "Develop expertise in data analysis, machine learning, and statistical modeling to solve complex real-world problems.",
      image: "/data-science-analytics.jpg",
      link: "#",
    },
    {
      name: "MEng Mechanical Engineering",
      university: "Imperial College London",
      duration: "4 Years",
      fees: "£9,250/year (UK)",
      description:
        "A rigorous engineering program focusing on design, analysis, and manufacturing of mechanical systems.",
      image: "/mechanical-engineering.jpg",
      link: "#",
    },
    {
      name: "BA (Hons) Law",
      university: "University of Birmingham",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "A foundational law degree covering core legal principles, critical thinking, and legal research skills.",
      image: "/law-school-students.jpg",
      link: "#",
    },
    {
      name: "BSc Psychology",
      university: "University of Glasgow",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "Explore the science of mind and behavior, covering cognitive, developmental, social, and clinical psychology.",
      image: "/psychology-education.jpg",
      link: "#",
    },
    {
      name: "BEng Chemical Engineering",
      university: "University of Cambridge",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "Study the design and manufacture of chemical and pharmaceutical products with industrial applications.",
      image: "/chemical-engineering.jpg",
      link: "#",
    },
    {
      name: "MSc Finance",
      university: "London School of Economics",
      duration: "1 Year",
      fees: "£28,000 (Intl)",
      description:
        "Advanced program in financial markets, investment analysis, and corporate finance for aspiring finance professionals.",
      image: "/finance-investment.png",
      link: "#",
    },
    {
      name: "BSc Nursing",
      university: "University of Oxford",
      duration: "3 Years",
      fees: "£9,250/year (UK)",
      description:
        "Comprehensive nursing program combining clinical practice with theoretical knowledge in healthcare delivery.",
      image: "/nursing-healthcare.jpg",
      link: "#",
    },
  ];

  const coursesPerPage = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = allCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.university.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + coursesPerPage
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

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
            Explore Our Courses
          </h1>
          <p className="text-lg text-white/90">
            Find the perfect academic program to match your ambitions and unlock
            your potential
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses by name or university..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-12 pr-6 py-4 rounded-lg border-2 border-gray-200 focus:border-[#D04418] focus:outline-none transition-colors text-gray-700 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          {paginatedCourses.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {paginatedCourses.map((course, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#D04418] transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={
                      course.image ||
                      "/placeholder.svg?height=150&width=250&query=university course"
                    }
                    alt={course.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 flex items-center space-x-2 mb-2">
                      <GraduationCap className="w-5 h-5 text-[#25215C]" />
                      <span>{course.university}</span>
                    </p>
                    <p className="text-gray-600 flex items-center space-x-2 mb-4">
                      <Clock className="w-5 h-5 text-[#D04418]" />
                      <span>{course.duration}</span>
                      <DollarSign className="w-5 h-5 text-[#25215C] ml-4" />
                      <span>{course.fees}</span>
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-6 line-clamp-3">
                      {course.description}
                    </p>
                    <Button className="w-full font-semibold py-3 rounded-full bg-[#25215C] text-white hover:bg-[#1A1745] transition-all">
                      <Link
                        href={course.link}
                        className="flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No courses found matching your search.
              </p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12 pt-8 border-t border-gray-200">
              <Button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      currentPage === page
                        ? "bg-[#25215C] text-white"
                        : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
              <Button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing a Course?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our expert advisors can help you find the perfect program that
            aligns with your career goals
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Book a Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
