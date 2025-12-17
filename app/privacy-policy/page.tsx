"use client";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90">
            Learn how International Education Exchange collects, uses, and protects your personal data.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. Introduction
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <strong>International Education Exchange</strong> ("we", "us", or "our"), we value your privacy and are committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our educational consultancy services, in compliance with the UK General Data Protection Regulation (UK GDPR).
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. Information We Collect
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide our services effectively, we may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>
                <strong>Identity Data:</strong> First name, last name, username, date of birth, and gender.
              </li>
              <li>
                <strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.
              </li>
              <li>
                <strong>Academic Data:</strong> Educational history, transcripts, certificates, and English language proficiency scores.
              </li>
              <li>
                <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and operating system.
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              3. How We Use Your Data
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>To process your application to universities and colleges.</li>
              <li>To provide you with consultation regarding visa and immigration requirements.</li>
              <li>To manage our relationship with you, including notifying you about changes to our terms or privacy policy.</li>
              <li>To improve our website, services, marketing, and customer relationships.</li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Data Sharing
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We may have to share your personal data with the parties set out below for the purposes set out in this policy:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>
                <strong>Educational Institutions:</strong> Universities and colleges you are applying to.
              </li>
              <li>
                <strong>Service Providers:</strong> IT and system administration service providers.
              </li>
              <li>
                <strong>Professional Advisers:</strong> Including lawyers, bankers, auditors, and insurers.
              </li>
              <li>
                <strong>Regulatory Authorities:</strong> HM Revenue & Customs, regulators, and other authorities who require reporting of processing activities in certain circumstances.
              </li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              5. Data Security
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. Data Retention
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              7. Your Legal Rights
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>Request access to your personal data.</li>
              <li>Request correction of your personal data.</li>
              <li>Request erasure of your personal data.</li>
              <li>Object to processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
              <li>Withdraw consent.</li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">8. Contact Us</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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