"use client";
import { useState } from "react";
import type React from "react";
import Link from "next/link";
import { CheckCircle, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BecomeAPartnerPage() {
  const [formData, setFormData] = useState({
    organisationName: "",
    organisationType: "",
    website: "",
    country: "",
    city: "",
    contactPerson: "",
    email: "",
    phone: "",
    countriesRecruit: "",
    annualStudents: "",
    universities: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const whyPartner = [
    "Access to UK University and College opportunities",
    "Support with student applications and admissions",
    "Dedicated partner support",
    "Guidance throughout the student journey",
    "Opportunities to develop long-term recruitment partnerships",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    try {
      const adminRes = await fetch("/api/send-partner-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const userRes = await fetch("/api/send-partner-application-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (adminRes.ok && userRes.ok) {
        setIsSubmitted(true);
        setFormData({
          organisationName: "",
          organisationType: "",
          website: "",
          country: "",
          city: "",
          contactPerson: "",
          email: "",
          phone: "",
          countriesRecruit: "",
          annualStudents: "",
          universities: "",
          message: "",
        });
      } else {
        console.error("Failed to send application");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/partner"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back to Partner
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Become a Partner
          </h1>
          <p className="text-lg text-white/90">
            Partner with IEE UK and grow your international student recruitment
          </p>
        </div>
      </section>

      {/* Join IEE UK */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
            <div>
              <Handshake className="w-12 h-12 text-[#D04418] mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
                Partner with IEE UK
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Join IEE UK as an approved recruitment partner and help
                international students access UK higher education
                opportunities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work with education agents, consultants, schools, colleges
                and international recruitment organisations.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/business-school-students.jpg"
                alt="International students studying in the UK"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with IEE UK */}
      <section className="py-16 md:py-20 bg-gray-50">
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

      {/* Agent Application */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-6">
              Agent Application
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Interested in becoming an IEE UK recruitment partner? Complete the
              short application form below. Our Partnerships Team will review
              your details and contact you regarding the next steps.
            </p>

            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your application has been submitted. Our Partnerships Team
                    will review your details and contact you regarding the next
                    steps.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Organisation */}
                  <div>
                    <h3 className="text-xl font-bold text-[#25215C] mb-6 pb-3 border-b border-gray-200">
                      Organisation
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="organisationName"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Organisation Name: *
                        </label>
                        <input
                          type="text"
                          id="organisationName"
                          name="organisationName"
                          required
                          value={formData.organisationName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Your organisation name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="organisationType"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Organisation Type: *
                        </label>
                        <input
                          type="text"
                          id="organisationType"
                          name="organisationType"
                          required
                          value={formData.organisationType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="e.g. Education Agency"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="website"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Website: *
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="https://www.example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="country"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Country: *
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Your country"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          City: *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Your city"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <h3 className="text-xl font-bold text-[#25215C] mb-6 pb-3 border-b border-gray-200">
                      Contact
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contactPerson"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Contact Person: *
                        </label>
                        <input
                          type="text"
                          id="contactPerson"
                          name="contactPerson"
                          required
                          value={formData.contactPerson}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Email Address: *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Phone / WhatsApp: *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="+44 (0)xxx xxx xxxx"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Recruitment Profile */}
                  <div>
                    <h3 className="text-xl font-bold text-[#25215C] mb-6 pb-3 border-b border-gray-200">
                      Recruitment Profile
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="countriesRecruit"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Countries You Recruit From: *
                        </label>
                        <input
                          type="text"
                          id="countriesRecruit"
                          name="countriesRecruit"
                          required
                          value={formData.countriesRecruit}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="e.g. Bangladesh, India, Nepal"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="annualStudents"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Approximate Students Recruited Annually
                        </label>
                        <input
                          type="text"
                          id="annualStudents"
                          name="annualStudents"
                          value={formData.annualStudents}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="e.g. 50"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="universities"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Universities Currently Represented
                        </label>
                        <input
                          type="text"
                          id="universities"
                          name="universities"
                          value={formData.universities}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="List universities you currently represent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-bold text-[#25215C] mb-6 pb-3 border-b border-gray-200">
                      Additional Information
                    </h3>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-gray-900 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                        placeholder="Tell us more about your organisation..."
                      ></textarea>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50"
                  >
                    {isLoading ? "Submitting..." : "Submit Agent Application"}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you confirm that the information
                    provided is accurate and agree to be contacted by IEE UK
                    regarding your partnership application.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}