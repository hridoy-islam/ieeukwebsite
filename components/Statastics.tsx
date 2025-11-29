"use client";

import Counter from "./Counter";


export default function Statstics() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-[#25215C] via-[#25215C] to-[#D04418]">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {[
            { number: 4700, label: "Student Served" },
            { number: 96, label: "Student Satisfaction" },
            { number: 95, label: "Courses Offered" },
            { number: 20, label: "Recruiting Universities" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center text-white group">
              <p className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                <Counter target={stat.number} />
                {stat.number < 100 ? "%" : "+"}
              </p>

              <p className="text-lg text-white/90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
