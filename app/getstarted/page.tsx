"use client";
import { useState } from "react";
import type React from "react";
import {
  Send,
  CheckCircle,
  Share2,
  Mail,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    subject: "",
    intake: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", formData);
    setIsSubmitted(true);
    setIsLoading(false);

    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      subject: "",
      intake: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const countries = ["USA", "UK", "Canada", "Australia", "Germany", "UAE"];
  const intakes = [
    "January 2024",
    "February 2024",
    "March 2024",
    "April 2024",
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get Started
              </h1>
              <p className="text-lg text-white/90">
                Begin your journey to international education with IEE
              </p>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4">
              <span className="text-white/80 text-sm font-medium">Share:</span>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Mail className="w-5 h-5 text-white" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Share2 className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          {/* Consultation Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Free Consultation
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choosing to study in a foreign country is an important decision,
                and we are aware that you will probably have many questions
                before you come to your desired colleges and universities. If
                you cannot find the answer to your question on our website or
                wish to get further information, please feel free to contact us
                using the phone number on the right or through the form below.
                We will try and answer your query as early as possible.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enquiry Received!
                </h3>
                <p className="text-gray-600 mb-4">
                  Thank you for reaching out. We'll contact you shortly to
                  discuss your educational goals.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-[#25215C] to-[#D04418] text-white"
                >
                  Submit Another Enquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Full Name: <span className="text-[#D04418]">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Email Address: <span className="text-[#D04418]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Phone Number: <span className="text-[#D04418]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                    placeholder="+44 (0)xxx xxx xxxx"
                  />
                </div>

                {/* Country Selection */}
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Select The Country You Want To Study:{" "}
                    <span className="text-[#D04418]">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                  >
                    <option value="">Please select</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Subject Name */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Subject Name: <span className="text-[#D04418]">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                    placeholder="e.g., Business Administration, Computer Science"
                  />
                </div>

                {/* Intake Selection */}
                <div>
                  <label
                    htmlFor="intake"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Intake: <span className="text-[#D04418]">*</span>
                  </label>
                  <select
                    id="intake"
                    name="intake"
                    required
                    value={formData.intake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#25215C] focus:border-transparent"
                  >
                    <option value="">Please select</option>
                    {intakes.map((intake) => (
                      <option key={intake} value={intake}>
                        {intake}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-[#25215C] to-[#D04418] text-white font-bold py-4 rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    {isLoading ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#25215C] to-[#1a1643] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Response Time</h3>
              <p className="text-white/90">
                We typically respond to all enquiries within 24 hours during
                business days.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#D04418] to-[#a03311] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">No Obligation</h3>
              <p className="text-white/90">
                This consultation is completely free with no commitment. We're
                here to help you make the best decision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enquire Now CTA */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your educational goals and find the perfect program
            for you.
          </p>
          <Button
            onClick={() =>
              document
                .querySelector("form")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-[#25215C] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg"
          >
            Enquire Now
          </Button>
        </div>
      </section>
    </main>
  );
}
