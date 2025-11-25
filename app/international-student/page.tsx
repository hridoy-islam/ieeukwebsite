"use client";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  FileText,
  DollarSign,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function InternationalStudentPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "student-route-visa"
  );

  const sections = [
    {
      id: "student-route-visa",
      title: "STUDENT ROUTE VISA GUIDANCE",
      content: `For students who intend to study in the United Kingdom, the Student Route Visa is part of the UK visas and immigration's points-based system. To submit a successful application, you must meet all of the immigration rules requirements and score 70 points.

BREAKDOWN OF 70 POINTS
The Confirmation of Acceptance for Studies (CAS) that the university sends you will get you 50 points. For the financial criteria, you will receive 10 points, demonstrating that you have enough money to cover your course costs and living expenses. For your English language skills, you will receive ten points.

WHAT IS A CONFIRMATION OF ACCEPTANCE FOR STUDIES (CAS)?
An electronic document with a unique reference number is known as a Confirmation of Acceptance for Studies (CAS). The University will give you a CAS, which you must use as a reference number when applying for a student visa. Before you may apply for a student visa, you must first obtain a CAS. A CAS is only valid for 6 months and can be used only once.

HOW DO I GET A CAS?
To receive your CAS the following documents are required by the University:
• Unconditional offer to study at the University
• Completed University application – including a detailed personal statement
• Copies of your qualifications
• Completed Immigration History Questionnaire (IHQ)
• Copy of your passport photo/name page
• Copy of any previous UK visas (if applicable)
• Copy of any previous CAS that you used to obtain a Tier 4 visa (if applicable)
• Copy of all visa refusals you have received for any country (if applicable)
• ATAS certificate (if applicable)
• Tuition fee deposit
• If requested – your bank statements/sponsor letter

FINANCIAL REQUIREMENTS
To apply for a student visa, you must demonstrate that you have the funds to cover your first year's tuition fees as well as to sustain yourself (and any dependents) while you study. Because meeting the financial requirements for a Student visa accounts for 10 of the required 70 points, it's critical that you know which financial documentation to submit with your visa application.

If you're applying for a programme that lasts more than nine months, the maximum amount you'll need to prove for financial criteria is £9,207, or £1,023 per month.`,
    },
    {
      id: "worldwide-recognition",
      title: "WORLDWIDE RECOGNITION",
      content: `The degrees and qualifications from UK higher education institutions are known around the world as high quality and world class. The standard of excellence is set by some of the older universities with recognizable names, like Oxford and Cambridge, but the tradition carries through to many of the universities and colleges throughout the UK. When looking for work in the future, this can be a great selling point in your favour!`,
    },
    {
      id: "growing-destination",
      title: "GROWING DESTINATION",
      content: `International students have always been an important presence in the UK, and the numbers have been growing steadily. With a huge number of international students every year, the UK is the second most popular destination for international students, behind the US.`,
    },
    {
      id: "education-costs",
      title: "EDUCATION COSTS ARE LOWER",
      content: `The cost of education for an international student in the UK can be lower compared to the USA and other countries. Some courses in the USA can be $25,000 plus a year in tuition alone. Tuition for the majority of UK higher education institutions is in the region of £3,000 to £7,000 a year – considerably less!

You can also save a lot of money because your degree will generally take less time to complete in the UK than in other countries. Although four-year programs are increasing in popularity, most degree programs in the UK require a three-year course and a masters program is typically between one and two years.`,
    },
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
            International Student
          </h1>
          <p className="text-lg text-white/90">
            IEE - If You Are Planning To Study Abroad, Then The Following
            Information May Help You To Take A Right Decision!
          </p>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <Globe className="w-12 h-12 text-[#D04418] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Worldwide Recognition
              </h3>
              <p className="text-gray-600">
                UK qualifications are globally respected and highly valued by
                employers worldwide.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <DollarSign className="w-12 h-12 text-[#25215C] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Lower Costs
              </h3>
              <p className="text-gray-600">
                Study for 3 years instead of 4-5 years at competitive UK tuition
                rates.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 text-center">
              <Users className="w-12 h-12 text-[#D04418] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Top Destination
              </h3>
              <p className="text-gray-600">
                UK is the 2nd most popular destination for international
                students globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Important Information for International Students
          </h2>

          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedSection(
                      expandedSection === section.id ? null : section.id
                    )
                  }
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex items-center justify-between transition-colors"
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Connect with our advisors to plan your study abroad journey with
            IEE.
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
