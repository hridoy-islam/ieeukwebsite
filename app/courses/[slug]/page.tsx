"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "lucide-react";
import { courses } from "@/utils/courseData";


export default function CourseDetailsPage({
  params,
}: {
  params: { slug: string };
}) {

  const course = courses.find((b) => b.slug === params.slug);

  if (!course) {
    return (
      <main className="bg-white py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900">
          Course not found
        </h1>
        <Link
          href="/courses"
          className="mt-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Courses
        </Link>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Header */}
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
        </div>
      </section>

      {/* Key Info Cards */}
    
      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto ">
          <img
            src={
              course.image ||
              "/placeholder.svg?height=400&width=800&query=blog article detail"
            }
            alt={course.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg mb-10"
          />

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: course.content }}
          />
        </div>
      </section>

      {/* CTA */}
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
            <Button className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg transition-shadow">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
