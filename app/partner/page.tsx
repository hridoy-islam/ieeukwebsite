"use client";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Handshake,
  ShieldCheck,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartnerPage() {
  const whyPartner = [
    "Access to UK University and College opportunities",
    "Support with student applications and admissions",
    "Dedicated partner support",
    "Guidance throughout the student journey",
    "Opportunities to develop long-term recruitment partnerships",
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
            Partner with IEE UK
          </h1>
          <p className="text-lg text-white/90">
            Grow your international student recruitment with a trusted UK
            education partner.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                IEE works with universities and colleges across the UK and
                supports students from application through enrolment, helping
                our partners connect with qualified students and build long-term
                recruitment opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/partner/become-a-partner">
                  <Button className="bg-primary text-white font-bold px-8 py-4 rounded-lg hover:shadow-lg transition-shadow">
                    Become an IEE Partner
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/uk.jpg"
                alt="UK universities and colleges"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>


     

      {/* Why Partner with IEE UK */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-12 text-center">
            Why Partner with IEE UK?
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {whyPartner.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white border-2 border-gray-200 hover:border-[#D04418] rounded-xl p-5 transition-colors"
              >
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Routes */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-12 text-center">
            Explore Our Partnerships
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/partner/become-a-partner"
              className="group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Handshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#25215C] mb-3">
                Become a Partner
              </h3>
              <p className="text-gray-700 mb-4">
                Join IEE UK as an approved recruitment partner and help
                international students access UK higher education opportunities.
              </p>
              <span className="inline-flex items-center text-[#D04418] font-semibold group-hover:gap-2 transition-all">
                Apply Now <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>

            <Link
              href="/partner/uk-agent-quality-framework"
              className="group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#25215C] mb-3">
                UK Agent Quality Framework
              </h3>
              <p className="text-gray-700 mb-4">
                Our commitment to professionalism, integrity and quality across
                our international student recruitment partnerships.
              </p>
              <span className="inline-flex items-center text-[#D04418] font-semibold group-hover:gap-2 transition-all">
                View Framework <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      
    </>
  );
}
