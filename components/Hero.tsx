"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

import Lottie from "lottie-react";
import heroAnimation from "@/public/heroAnimation.json";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#D04418]/8 rounded-full blur-3xl animate-orbit-float"></div>
        <div
          className="absolute bottom-20 -left-20 w-96 h-96 bg-[#25215C]/8 rounded-full blur-3xl"
          style={{
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        ></div>
        <div
          className="absolute top-40 left-1/3 w-72 h-72 bg-[#D04418]/5 rounded-full blur-3xl"
          style={{
            animationDelay: "2s",
            animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div
              className="inline-block animate-float-up"
              style={{ animationDelay: "0s" }}
            >
              <div className="px-4 py-2 bg-gradient-to-r from-[#D04418]/10 to-[#25215C]/10 backdrop-blur rounded-full border border-[#D04418]/30 w-fit">
                <p className="text-sm font-semibold text-[#25215C] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D04418]" />
                  Welcome to IEE
                </p>
              </div>
            </div>

            <div
              style={{ animationDelay: "0.2s" }}
              className="animate-float-up"
            >
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#25215C] mb-6">
                Your Gateway to
                <span className="block bg-gradient-to-r from-[#D04418] to-[#25215C] bg-clip-text text-transparent">
                  UK Education
                </span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                International Education Exchange is working with reputed
                colleges and universities in the UK to resource the right people
                for the right place locally and internationally.
              </p>
            </div>

            <div
              style={{ animationDelay: "0.4s" }}
              className="animate-float-up pt-4 flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-iee-secondary font-bold px-8 py-4 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                <Link href="/courses" className="flex items-center gap-2">
                  Explore Courses
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button className="btn-iee-outline font-bold px-8 py-4 rounded-full text-base border-2 transition-all duration-300 hover:bg-[#25215C] hover:text-white">
                <Link href="/about" className="flex items-center gap-2">
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div
              style={{ animationDelay: "0.6s" }}
              className="animate-float-up pt-8 flex gap-8"
            >
              <div>
                <p className="text-3xl font-bold text-[#D04418]">4700+</p>
                <p className="text-sm text-gray-600 font-medium">
                  Students Served
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#25215C]">95+</p>
                <p className="text-sm text-gray-600 font-medium">
                  Courses Offered
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative hidden md:flex justify-center animate-float-down"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-md">
              {/* Floating Cards Background */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#D04418] to-[#D04418]/30 rounded-3xl opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gradient-to-br from-[#25215C] to-[#25215C]/30 rounded-3xl opacity-20 blur-2xl"></div>

              {/* Main Image Container */}
              <div className="relative  overflow-hidden  h-96  ">
            

                <Lottie
                  animationData={heroAnimation}
                  loop={true}
                  autoplay={true}
            
                />
              </div>

              {/* Floating Stats Cards */}
              {/* <div
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-[#D04418]/10"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#25215C] text-sm">96%</p>
                    <p className="text-xs text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div> */}

              {/* <div
                className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-2xl border border-[#D04418]/10"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1s",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#25215C] to-[#D04418] rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-[#25215C] text-sm">20+</p>
                    <p className="text-xs text-gray-600">Universities</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
