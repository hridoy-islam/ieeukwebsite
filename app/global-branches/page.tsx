"use client";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function GlobalBranchesPage() {
  const branches = [
    {
      location: "London, UK",
      address: "80-82 Nelson Street, E1 2DY, London",
      phone: "+44(0)73 6523 3764",
      email: "info@ieeuk.com",
    },
    {
      location: "Birmingham, UK",
      address:
        "Unit 101F The Argent Centre, 60 Frederick Street, Birmingham B1 3HS",
      phone: "+44(0)121 212 0868",
      email: "info@ieeuk.com",
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
            Global Branches
          </h1>
          <p className="text-lg text-white/90">
            Connect with us at our offices across the UK
          </p>
        </div>
      </section>

      {/* Branches */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {branch.location}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        Address
                      </p>
                      <p className="text-gray-700">{branch.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Phone</p>
                      <p className="text-gray-700">{branch.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Email</p>
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-[#D04418] hover:text-[#25215C] transition-colors"
                      >
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Visit Us Today
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Our offices are open and ready to assist you with all your
              international education needs. Whether you're just starting your
              journey or looking for guidance, our expert team is here to help
              you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect with Our Team
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Reach out to us for personalized guidance and support
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
