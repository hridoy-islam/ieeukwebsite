"use client";

import { ArrowRight, Clock, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CoursesSection() {
  const featuredCourses = [
    {
      name: "BSc Computer Science",
      university: "University of Manchester",
      duration: "3 Years",
      fees: "£9,250/year",
      description: "Comprehensive program covering computing and AI",
      image: "/computer-science-university.png",
    },
    {
      name: "MBA International Business",
      university: "University of London",
      duration: "1 Year",
      fees: "£25,000",
      description: "Master's degree in global business and strategy",
      image: "/business-school-mba.jpg",
    },
    {
      name: "MSc Data Science",
      university: "University of Edinburgh",
      duration: "1 Year",
      fees: "£15,000",
      description: "Advanced analytics and machine learning expertise",
      image: "/data-science-analytics.jpg",
    },
  ];
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-4">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore some of our popular programs across top UK universities
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCourses.map((course, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#D04418] transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.name}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {course.name}
                </h3>
                <p className="text-gray-600 flex items-center space-x-2 mb-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-[#25215C]" />
                  <span>{course.university}</span>
                </p>
                <p className="text-gray-600 flex items-center space-x-2 mb-4 text-sm">
                  <Clock className="w-4 h-4 text-[#D04418]" />
                  <span>{course.duration}</span>
                </p>
                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-2 text-sm">
                  {course.description}
                </p>
                <Button className="w-full font-semibold py-2 rounded-full bg-[#25215C] text-white hover:bg-[#1A1745] transition-all text-sm">
                  <Link
                    href="/courses"
                    className="flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="btn-iee-secondary font-bold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <Link href="/courses" className="flex items-center gap-2">
              Browse All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
