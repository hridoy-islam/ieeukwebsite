"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/utils/blog";
import moment from "moment";

export default function LatestBlog() {
  // Sort blogs by newest date and take only latest 3
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="py-16 md:py-16 bg-gray-50">
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
          {latestBlogs.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 
              hover:shadow-xl transition-all duration-300 group cursor-pointer block"
            >
              <div className="h-40 bg-gradient-to-br from-[#25215C]/10 to-[#D04418]/10 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-[#D04418] font-semibold mb-2">
                  {moment(blog.date).format("DD MMM, YYYY")}
                </p>

                <h3 className="text-lg font-bold text-[#25215C] mb-3 
                  group-hover:text-[#D04418] transition-colors leading-snug line-clamp-2"
                >
                  {blog.title}
                </h3>
                <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed pb-4"
                    dangerouslySetInnerHTML={{
                      __html: blog.content?.slice(0, 80) + "...",
                    }}
                  />
              </div>
            </Link>
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
