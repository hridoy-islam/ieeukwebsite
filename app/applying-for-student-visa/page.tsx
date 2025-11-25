"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  CheckCircle,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StudentVisaPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "tier-4-system"
  );

  const sections = [
    {
      id: "tier-4-system",
      title: "THE NEW STUDENT TIER OF THE POINTS BASED SYSTEM",
      content: `If you want to apply to come to the UK to study for more than six months after the end of March 2009, you will have to apply under Tier 4 and pass a points-based assessment.

Tier 4 will consist of two sub-categories:

Adult Student (also known as General Student) – if you are coming to the UK for post-16 education.
Child Student – for children aged between 4 and 16 attending independent schools.`,
    },
    {
      id: "required-documents",
      title: "DOCUMENTS THAT ARE REQUIRED FOR A STUDENT VISA",
      content: `• Student Visa Application Form
• Photograph – 45 millimeters (mm) high by 35 mm wide
• CAS statement from the Institution (CAS – Confirmation of Acceptance for Studies)
• IELTS / PTE score, if applicable
• Valid Passport
• Visa fees to be paid Online
• Copies of Academic Mark sheets and Certificates
• Work Experience Certificates, if applicable
• Proof of payment of fees, if applicable
• Proof of Funds – Applicants must demonstrate that they have sufficient liquid assets to pay the tuition fees, living expenses, and traveling cost without engaging in employment in the UK. Even Bank Loans are accepted.
• Letter from the sponsor
• Medical Report from an Approved Panel Doctor`,
    },
    {
      id: "where-to-apply",
      title: "WHERE TO APPLY",
      content: `You should apply for your Tier 4 (General) student entry clearance at your nearest British Embassy or Consulate with a visa section. The processing times will vary, but it is best to apply at least 6-8 weeks before you begin your course.`,
    },
    {
      id: "maintenance-requirements",
      title: "MAINTENANCE REQUIREMENTS",
      content: `As an adult student, you get 10 points if you have enough money to cover the course fees and living costs shown below. This is known as the maintenance (funds) requirement.

Your money must be held in cash and you must show that you have held the money for at least 28 days prior to the date of application. Shares, bonds, pension funds, and similar savings accounts will not be accepted. You would have to ensure that your bank balance has not fallen below the required amount for a full 28 day period.

You can prove you have the money if you have:
• Cash in a bank account in your name (this includes joint accounts with your name)
• A loan in your name
• Official financial or government sponsorship (for example your government, the British Council or any international organization, company or university).`,
    },
    {
      id: "entry-timing",
      title: "WHEN WILL YOU BE ALLOWED TO COME TO THE UK?",
      content: `If you are granted an Adult Student Visa you will be allowed to enter the UK up to one month in advance of a course that lasts for six months or more. If you are granted an Adult Student Visa and your course is less than six months you will be allowed to enter seven days before the course starts. If you are granted and Adult Student Visa for a pre-sessional before going onto a degree course you will be allowed to come one month before your course starts.`,
    },
  ];

  const requiredDocs = [
    "Student Visa Application Form",
    "Valid Passport",
    "CAS Statement from Institution",
    "IELTS / PTE Score",
    "Academic Certificates",
    "Proof of Funds",
    "Medical Report",
    "Visa Fees Payment",
  ];

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Applying For Student Visa
          </h1>
          <p className="text-lg text-white/90">
            IEE - Advice on Applying for Student Visa
          </p>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <FileText className="w-12 h-12 text-[#D04418] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Points-Based System
              </h3>
              <p className="text-gray-600">
                Score 70 points through CAS (50pts), Funds (10pts), and English
                (10pts).
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <Building2 className="w-12 h-12 text-[#25215C] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Embassy Application
              </h3>
              <p className="text-gray-600">
                Apply at your nearest British Embassy or Consulate 6-8 weeks
                before your course.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <CheckCircle className="w-12 h-12 text-[#D04418] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                28-Day Fund Proof
              </h3>
              <p className="text-gray-600">
                Demonstrate sufficient funds held for at least 28 days before
                application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Required Documents Checklist
          </h2>
          <div className="bg-gradient-to-r from-[#25215C]/10 to-[#D04418]/10 rounded-lg p-8 border border-[#25215C]/20">
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.map((doc, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#D04418] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Visa Application Details
          </h2>

          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                  className="w-full px-6 py-4 hover:bg-gray-50 flex items-center justify-between transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">
                    {section.title}
                  </h3>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-[#D04418] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {expandedSection === section.id && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Visa Application Support?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our experienced advisors can guide you through the entire student
            visa process.
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
    </main>
  );
}
