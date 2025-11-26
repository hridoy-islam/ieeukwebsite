"use client";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-lg h-96">
              <img
                src="/aboutiee.jpg"
                alt="About IEE"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-4">
                About IEE
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                International Education Exchange is working with reputed
                colleges and universities in the UK in terms of resourcing the
                right people for the right place locally and internationally.
              </p>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              We value openness and friendly service is the core of our
              organizations. IEE aims to create friendly and effective relations
              between all the stakeholders and partners. We have been helping
              students across Europe getting British degrees.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#25215C] mb-1">
                    Expert Guidance
                  </h3>
                  <p className="text-gray-700">
                    Professional education consultants with years of experience
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-[#D04418] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[#25215C] mb-1">
                    Global Network
                  </h3>
                  <p className="text-gray-700">
                    Connected with top universities across the UK
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
