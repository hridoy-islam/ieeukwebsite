"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CookiesPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
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
            Cookie Policy
          </h1>
          <p className="text-lg text-white/90">
            Learn how International Education Exchange  uses cookies to improve your
            experience.
          </p>
        </div>
      </section>

      {/* Cookies Policy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. What Are Cookies?
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cookies are small text files placed on your device to store data
              that can be recalled by a web server. They help us remember your
              preferences and understand how you interact with our website.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. How We Use Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use cookies to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Enhance website functionality and user experience</li>
              <li>Analyze website traffic and visitor behavior</li>
              <li>Remember your preferences and settings</li>
              <li>
                Support marketing and advertising initiatives (if applicable)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              3. Types of Cookies We Use
            </h3>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us analyze how
                visitors use the website
              </li>
              <li>
                <strong>Functional Cookies:</strong> Remember user choices to
                improve your experience
              </li>
              <li>
                <strong>Targeting Cookies:</strong> Used for delivering relevant
                ads (only with consent)
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Managing Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You can manage or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect website
              functionality.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              5. Third-Party Cookies
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may use third-party services like Google Analytics, which place
              their own cookies to help us understand usage trends. These
              cookies are subject to their respective privacy policies.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. Changes to This Policy
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may update this Cookies Policy from time to time. The latest
              version will always be available on this page with an updated
              effective date.
            </p>

            <h3 className="text-3xl font-black text-gray-900">7. Contact Us</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about this Cookies Policy, please
              contact:
              <br />
              <br />
              <strong>International Education Exchange</strong>
              <br />
              80-82 Nelson Street
              <br />
              London, E1 2DY, UK
              <br />
              📞 +44 (0) 203 3719 168 / +44 (0) 73 6523 3764
              <br />
              ✉️{" "}
              <a
                href="mailto:info@ieeuk.com"
                className="text-blue-600 underline"
              >
                info@ieeuk.com
              </a>
            </p>
          </div>
        </div>
      </section>


    </div>
  );
}
