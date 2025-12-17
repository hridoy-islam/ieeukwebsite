"use client";
import Link from "next/link";

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-white/90">
            Please read these terms carefully before using International Education Exchange services.
          </p>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            <h3 className="text-3xl font-black text-gray-900">
              1. Acceptance of Terms
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              By accessing and using the website of <strong>International Education Exchange</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              2. Description of Services
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              International Education Exchange provides educational consultancy, student recruitment, and guidance services. While we strive to provide accurate information regarding universities, courses, and visa requirements, we do not guarantee admission to any specific institution or the issuance of visas, as these decisions remain with the respective authorities.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              3. User Conduct
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              You agree to use the site only for lawful purposes. You are prohibited from posting or transmitting to or from this site any material:
            </p>
            <ul className="list-disc pl-6 text-lg text-gray-600 leading-relaxed">
              <li>That is threatening, defamatory, obscene, indecent, seditious, offensive, pornographic, abusive, or liable to incite racial hatred.</li>
              <li>That constitutes or encourages conduct that would be considered a criminal offence.</li>
              <li>That is technically harmful (including, without limitation, computer viruses, logic bombs, Trojan horses, worms, or harmful data).</li>
            </ul>

            <h3 className="text-3xl font-black text-gray-900">
              4. Intellectual Property
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              The content, layout, design, data, databases, and graphics on this website are protected by UK and other international intellectual property laws. Unless expressly permitted in writing, you are not permitted to copy, modify, republish, transmit, or distribute any of these materials.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              5. Limitation of Liability
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              International Education Exchange will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages. We do not warrant that the site will be uninterrupted or error-free.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              6. External Links
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. These links are provided solely as a convenience to you. International Education Exchange has no control over the content of these sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              7. Changes to Terms
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              We reserve the right to modify these terms at any time. Your continued use of the site after any such changes constitutes your acceptance of the new Terms of Service. We encourage you to review this page periodically.
            </p>

            <h3 className="text-3xl font-black text-gray-900">
              8. Governing Law
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              These terms are governed by and construed in accordance with the laws of the United Kingdom. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of the UK.
            </p>

            <h3 className="text-3xl font-black text-gray-900">9. Contact Us</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact:
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