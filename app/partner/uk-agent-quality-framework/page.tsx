"use client";
import Link from "next/link";
import {
  CheckCircle,
  ShieldCheck,
  BookOpen,
  FileText,
  Award,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UKAgentQualityFrameworkPage() {
  const frameworkPromises = [
    "Student-centred recruitment",
    "Ethical and professional practices",
    "Accurate and transparent information",
    "Professional knowledge and competency",
    "Accountability and responsible agent management",
    "Continuous professional development",
  ];

  const essentialResources = [
    {
      title: "UK Agent & Counsellor Engagement Hub",
      description:
        "Access guidance and resources for UK education agents and counsellors.",
      href: "https://www.britishcouncil.org/education/agents-counsellors/the-hub",
    },
    {
      title: "UK Agent & Counsellor Training",
      description:
        "Develop professional knowledge and understanding of UK education.",
      href: "https://www.britishcouncil.org/education/education-agents/training-agents",
    },
    {
      title: "Database of Certified Agents & Counsellors",
      description:
        "Access the British Council's database of certified professionals.",
      href: "https://agent-counsellor-ukhub.britishcouncil.org/gal",
    },
  ];

  const keyReferenceMaterials = [
    {
      title: "National Code of Ethical Practice for Education Agents",
      href: "https://buila-assets.ams3.cdn.digitaloceanspaces.com/docs/the_national_code_of_ethical_practice_for_uk_education_agents.pdf",
    },
    {
      title: "Good Practice Guide for Providers Using Education Agents",
      href: "https://buila-assets.ams3.cdn.digitaloceanspaces.com/docs/good-practice-guide-for-uk-providers-using-education-agents.pdf",
    },
    {
      title: "Good Practice Guide for UK Education Agents: Partnering for Quality",
      href: "https://buila-assets.ams3.cdn.digitaloceanspaces.com/docs/the_good_practice_guide_for_uk_education_agents_partnering_for_quality.pdf",
    },
    {
      title: "Student Guide to Choosing an Education Agent",
      href: "https://www.navitas.com/wp-content/uploads/2025/04/A-Student-Guide-to-Choosing-an-Education-Agent_3.pdf",
    },
    {
      title: "UK International Education Sector's Agent Quality Framework Pledge",
      href: "https://www.navitas.com/wp-content/uploads/2025/04/UK-Agent-Quality-Framework-Pledge-UK-International-Education-Sector.pdf",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto ">
          <Link
            href="/partner"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back to Partner
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            UK Agent Quality Framework
          </h1>
          <p className="text-lg text-white/90">
            Quality recruitment. Professional partnerships. Better outcomes for
            students.
          </p>
        </div>
      </section>

      {/* Our Commitment to Quality */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto ">
          <div className="mx-auto">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-6 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
              Our Commitment to Quality
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              At IEE UK, we are committed to maintaining high standards of
              professionalism, integrity and quality across our international
              student recruitment partnerships.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              We believe education agents and counsellors play an important role
              in helping students make informed decisions about studying in the
              UK. Our Agent Quality Framework promotes:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {frameworkPromises.map((promise, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white border-2 border-gray-200 hover:border-[#D04418] rounded-xl p-5 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg font-medium">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Our Recruitment Partners */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto ">
          <div className=" mx-auto">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-6 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
              Supporting Our Recruitment Partners
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              We encourage our partners to use recognised industry resources and
              maintain the highest standards of professional practice.
            </p>

            {/* Essential Resources */}
            <h3 className="text-2xl font-bold text-[#25215C] mb-6">
              Essential Resources
            </h3>
            <div className="space-y-4 mb-12">
              {essentialResources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 bg-white border-2 border-gray-200 hover:border-[#D04418] rounded-xl p-6 transition-all hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 flex items-center gap-2">
                      {resource.title}
                      <ExternalLink className="w-4 h-4 text-[#D04418] flex-shrink-0" />
                    </h4>
                    <p className="text-gray-600">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Key Reference Materials */}
            <h3 className="text-2xl font-bold text-[#25215C] mb-6">
              Key Reference Materials
            </h3>
            <div className="space-y-4">
              {keyReferenceMaterials.map((material, idx) => (
                <a
                  key={idx}
                  href={material.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white border-2 border-gray-200 hover:border-[#D04418] rounded-xl p-5 transition-all hover:shadow-lg"
                >
                  <FileText className="w-6 h-6 text-[#D04418] flex-shrink-0" />
                  <span className="flex-1 text-gray-700 font-medium group-hover:text-[#25215C] transition-colors">
                    {material.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#D04418] transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Standard */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#25215C]/5 to-[#D04418]/5 rounded-3xl p-12 border-2 border-[#D04418]/20 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#D04418] to-[#25215C] rounded-xl mb-6 flex items-center justify-center mx-auto">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
              Our Standard
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              IEE UK expects all recruitment partners to act professionally,
              ethically and transparently, always putting the interests of
              students first.
            </p>
            <p className="text-lg text-[#D04418] font-semibold">
              Quality recruitment. Professional partnerships. Better outcomes
              for students.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
}