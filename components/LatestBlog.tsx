"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function LatestBlog() {
  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-4">
            Latest Blog
          </h2>
          <p className="text-lg text-gray-700">
            Stay updated with news and insights about UK education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title:
                "MPs call for student Covid disruption funding in England to be doubled",
              date: "January 30, 2021",
              excerpt:
                "A cross-party group of MPs and peers is calling for the government to…",
            },
            {
              title:
                "4-year post-study work visa: Is the UK offering this to international students?",
              date: "June 20, 2020",
              excerpt:
                "The UK's former universities minister Jo Johnson has called for the duration of…",
            },
            {
              title: "Self-assess for HE progression: T4 sponsor update",
              date: "June 15, 2020",
              excerpt:
                "New Tier 4 guidance issued on April 20 from the UK government includes…",
            },
          ].map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="h-40 bg-gradient-to-br from-[#25215C]/10 to-[#D04418]/10 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=200&width=400&query=education blog article`}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#D04418] font-semibold mb-2">
                  {blog.date}
                </p>
                <h3 className="text-lg font-bold text-[#25215C] mb-3 group-hover:text-[#D04418] transition-colors leading-snug line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-iee-secondary font-bold px-8 py-3 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300">
            <Link href="/blog" className="flex items-center gap-2">
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
