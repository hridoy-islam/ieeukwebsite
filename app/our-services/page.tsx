"use client";
import {
  GraduationCap,
  DollarSign,
  FileText,
  Dessert as Passport,
  MapPin,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OurServicesPage() {
  const services = [
    {
      icon: GraduationCap,
      title: "College and University Admissions",
      description:
        "Our experienced advisers offer personalised guidance and expert support throughout the entire admission process with our trusted university and college partners in the UK and around the world. We'll help you choose the right course and education provider to match your goals and interests.",
    },
    {
      icon: DollarSign,
      title: "Scholarship Support",
      description:
        "We understand that studying abroad can be a big investment. Our dedicated advisers work with you to find the best available scholarships or tuition discounts at your preferred institutions, helping you reduce costs.",
    },
    {
      icon: FileText,
      title: "Guidance on Financial Documents",
      description:
        "We provide general guidance to students on the preparation and organization of financial documents required for their university and visa applications.",
    },
    {
      icon: Passport,
      title: "Guidance on Visa Applications",
      description:
        "Our experienced advisors offer support and information to help students understand the necessary steps and requirements for applying for a student visa in their respective countries.",
    },
    {
      icon: MapPin,
      title: "Supporting You Every Step",
      description:
        "We understand that moving to a new country can be challenging. Our team can arrange airport pickup and assist with booking accommodation, helping you settle in quickly and comfortably.",
    },
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
            Our Services
          </h1>
          <p className="text-lg text-white/90">
            Comprehensive support for your international education journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#D04418] transition-all"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <IconComponent className="w-10 h-10 text-[#D04418] flex-shrink-0" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Important Notes
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0" />
                <span>
                  We do not provide financial, legal, or immigration advice. All
                  documentation must comply with specific requirements set by
                  relevant authorities.
                </span>
              </p>
              <p className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0" />
                <span>
                  While our team can assist with documentation and procedural
                  advice, we do not provide legal immigration services.
                </span>
              </p>
              <p className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0" />
                <span>
                  For official information on UK Student Visa, please visit
                  www.gov.uk/student-visa
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Contact our team today to learn more about our services
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
