"use client";
import { Users, Briefcase, BookOpen, Home, Heart } from "lucide-react";

export default function FeatureService() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-4">
            Why Choose IEE?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We provide comprehensive support for your journey to UK education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: BookOpen,
              title: "Hassle-Free Admission Service",
              description:
                "Get the support of our expert admission consultants for free of cost.",
            },
            {
              icon: Users,
              title: "One To One Consultation",
              description:
                "You will get to have a dedicated consultant for your total admission service.",
            },
            {
              icon: Briefcase,
              title: "Expert Career Consultants",
              description:
                "You might need a career consultancy from our experienced career counselors.",
            },
            {
              icon: BookOpen,
              title: "Student Finance Application",
              description:
                "We offer dedicated Help for your Student Finance Application.",
            },
            {
              icon: Home,
              title: "Accommodation Help",
              description:
                "We can help you to find a suitable on-campus or off-campus accommodation after your admission.",
            },
            {
              icon: Heart,
              title: "Our Service Is Free",
              description:
                "We do not charge anything from our students for any of our services.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-white border border-gray-200 hover:border-[#D04418] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#25215C] to-[#D04418] rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#25215C] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
