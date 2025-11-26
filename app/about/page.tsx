"use client";
import {
  CheckCircle,
  Users,
  Award,
  Globe,
  BookOpen,
  Heart,
  TrendingUp,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const whyChooseReasons = [
    {
      icon: Award,
      title: "Dedicated Academic Advisors",
      description:
        "Our academic advisors are dedicated to advice for undergraduate, postgraduate and mature students across all disciplines.",
    },
    {
      icon: Heart,
      title: "Flexible Learning Environment",
      description:
        "We provide courses to fit with your lifestyle with staff that are approachable and supportive throughout your studies.",
    },
    {
      icon: TrendingUp,
      title: "Top Value for Money",
      description:
        "We deliver top value for money in education through competitive advantages in quality-driven tuition.",
    },
    {
      icon: Users,
      title: "Career Guidance",
      description:
        "Our staffs are available to advise and guide you to secure the job most appropriate for your career.",
    },
    {
      icon: Globe,
      title: "London Location",
      description:
        "We offer a friendly, vibrant environment in the heart of London with rich cultural and social life.",
    },
    {
      icon: Zap,
      title: "International Environment",
      description:
        "Our cosmopolitan character makes student life a challenging, rewarding and exciting experience.",
    },
  ];

  const internationalServices = [
    "Process university admissions to top universities in UK, USA, Canada, Australia, Sweden and Europe",
    "Provide guidelines and information for international students wanting to study abroad",
    "Work with universities to recruit highly talented students from around the world",
    "Process visa applications according to immigration requirements with high success rates",
  ];

  const ukEuServices = [
    "Conduct admission assessment and application process for chosen courses",
    "Provide training to build Academic & Professional CV and Personal Statement",
    "Prepare students for admission interviews",
    "Help EU students get higher education from UK universities",
    "Assist with student finance applications",
    "Offer free English courses in London for EU/local students",
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
            About IEE
          </h1>
          <p className="text-lg text-white/90">
            Your trusted partner in international education
          </p>
        </div>
      </section>

      {/* Hero Section */}

      {/* Welcome Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <img
                  src="/aboutpage.jpg"
                  alt="About IEE"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
                  Welcome to International Education Exchange
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  International Education Exchange is working with reputed
                  colleges and universities in the UK in terms of resourcing the
                  right people for the right place locally and internationally.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  We value openness and friendly service is the core of our
                  organizations. IEE aims to create friendly and effective
                  relations between all the stakeholders and partners.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We have been helping students across Europe getting British
                  degrees. Our branch offices are in Bangladesh and Australia
                  now in partnerships with SMS higher education Group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] text-center mb-16">
            Why Choose IEE As Your Admission Support?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#25215C] mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for International Students */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-[#25215C]">
                Services for International Students
              </h2>
              <div className="space-y-4">
                {internationalServices.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{service}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <img
                  src="/aboutpage2.jpg"
                  alt="International Students"
                  className="w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for UK/EU Students */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative hidden md:block order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96">
                <img
                  src="/hiclipart.com_-778x836.png"
                  alt="UK/EU Students"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#25215C]">
                Services for UK/EU Students
              </h2>
              <div className="space-y-4">
                {ukEuServices.map((service, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-gradient-to-br from-[#25215C]/5 to-[#D04418]/5 rounded-3xl p-12 border-2 border-[#D04418]/20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-8 text-center">
              Our Partnerships
            </h2>
            <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
              We help UK/EU students to enrol at their dream
              Universities/Colleges in the UK. We can help you to ensure a place
              in any Universities of UK if you can fulfil the requirements.
            </p>
            <p className="text-xl text-gray-700 text-center mb-8 leading-relaxed max-w-3xl mx-auto">
              We are also working with lots of Universities from Europe,
              Australia, Canada & USA. We want to ensure that potential young
              people are getting best education from world-class institutions.
              At the same time Universities/Colleges are getting most talented &
              culturally diverse students around the globe.
            </p>
            <p className="text-xl text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
              As such, we have built up one-to-one relationships effectively
              with different Universities/Colleges & other partner organisations
              that are also working on Higher Education.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Educational Journey With IEE
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Connect with our expert consultants to discuss your academic goals
          </p>
          <Link href="/contact">
            <Button className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg transition-shadow">
              Get Expert Guidance
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
