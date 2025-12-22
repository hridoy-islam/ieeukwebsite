"use client";
import { useState } from "react";
import type React from "react";
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Facebook,
  Twitter,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    countryToStudy: "",
    interestedCourse: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   await new Promise((resolve) => setTimeout(resolve, 2000));

  //   console.log("Form Data:", formData);
  //   setIsSubmitted(true);
  //   setIsLoading(false);

  //   setTimeout(() => setIsSubmitted(false), 5000);
  //   setFormData({
  //     fullName: "",
  //     email: "",
  //     phone: "",
  //     nationality: "",
  //     countryToStudy: "",
  //     interestedCourse: "",
  //   });
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isLoading) return; // Prevent double submission
    setIsLoading(true);

    try {
      // Send to admin
      const adminRes = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Send confirmation to user
      const userRes = await fetch("/api/send-email-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if ( userRes.ok) {
        setIsSubmitted(true);

        // Reset form
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          nationality: "",
          countryToStudy: "",
          interestedCourse: "",
        });

        // Hide success message after 3 seconds
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Always stop loading
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const countries = ["USA", "UK", "Canada", "Australia", "Germany", "UAE"];
  const intakes = [
    "January 2025",
    "February 2025",
    "March 2025",
    "April 2025",
    "May 2025",
    "June 2025",
    "July 2025",
    "August 2025",
    "September 2025",
    "October 2025",
    "November 2025",
    "December 2025",
  ];

  return (
    <main className="bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact
              </h1>
              <p className="text-lg text-white/90">IEE - Contact</p>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-gray-200">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Book Your Free Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Choosing to study in a foreign country is an important
                  decision, and we are aware that you will probably have many
                  questions before you come to desired colleges and
                  universities. If you cannot find the answer to your question
                  on our website or wish to get further information please do
                  feel free to contact us using the phone number on the right or
                  through the form below. We will try and answer your query as
                  early as possible.
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Full Name: *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Your full name"
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Phone Number: *
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
                      <div>
                        <label
                          htmlFor="nationality"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Nationality: *
                        </label>
                        <input
                          type="text"
                          id="nationality"
                          name="nationality"
                          required
                          value={formData.nationality}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="Your nationality"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="countryToStudy"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Select The Country You Want To Study: *
                        </label>
                        <Select
                          value={formData.countryToStudy}
                          onValueChange={(value) =>
                            handleSelectChange("countryToStudy", value)
                          }
                        >
                          <SelectTrigger
                            id="countryToStudy"
                            className="w-full h-auto px-4 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D04418] focus:ring-offset-0"
                          >
                            <SelectValue placeholder="Please select" />
                          </SelectTrigger>

                          <SelectContent>
                            {countries.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label
                          htmlFor="interestedCourse"
                          className="block text-sm font-semibold text-gray-900 mb-2"
                        >
                          Interested Course: *
                        </label>
                        <input
                          type="text"
                          id="interestedCourse"
                          name="interestedCourse"
                          required
                          value={formData.interestedCourse}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D04418] focus:border-transparent"
                          placeholder="e.g. Business, Engineering"
                        />
                      </div>
                    </div>

                    <input type="hidden" name="form_check" value="" />

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#25215C] to-[#D04418] text-white font-bold py-3 rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar - Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Main Contact Info */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">IEE</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-[#D04418] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Address
                        </h4>
                        <p className="text-gray-600 text-sm">
                          International Education Exchange
                          <br />
                          80-82 Nelson Street London E1 2DY, UK
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <Mail className="w-5 h-5 text-[#D04418] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          E-mail
                        </h4>
                        <a
                          href="mailto:info@ieeuk.com"
                          className="text-[#D04418] hover:text-[#25215C] transition-colors text-sm"
                        >
                          info@ieeuk.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#D04418] flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Phone
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>
                            <a
                              href="tel:+442033719168"
                              className="text-[#D04418] hover:text-[#25215C] transition-colors"
                            >
                              +44 (0) 203 3719 168
                            </a>
                          </p>
                          <p>
                            <a
                              href="tel:+442073652376"
                              className="text-[#D04418] hover:text-[#25215C] transition-colors"
                            >
                              +44 (0) 73 6523 3764
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
