"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogs } from "@/utils/blog";
import moment from "moment";
import { useState } from "react";

export default function BlogPage() {
  const POSTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  // Paginate blogs
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedBlogs = blogs.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
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
            Blog & Resources
          </h1>
          <p className="text-lg text-white/90">
            Stay informed with expert articles, guides, and news on UK
            education, student life, and application tips
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {paginatedBlogs.map((post) => (
              <div
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-[#D04418] transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={
                    post.image ||
                    "/placeholder.svg?height=200&width=350&query=blog article"
                  }
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <div
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: post.content?.slice(0, 100) + "...",
                    }}
                  />
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {moment(post.date).format("DD MMM, YYYY")}
                      </span>
                    </div>
                  </div>
                  <Button className="group btn-iee-primary w-full font-semibold py-3 rounded-full bg-[#25215C] text-white hover:bg-[#1A1745] transition-all">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center justify-center gap-2"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
  <div className="flex justify-center items-center gap-3 mt-12 pt-8 border-t border-gray-200 flex-wrap">
    
    {/* Previous Button */}
    <button
      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
      disabled={currentPage === 1}
      className={`px-3 md:px-4 py-2 rounded-xl text-sm font-medium transition-all
        ${currentPage === 1
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        }
      `}
    >
      Previous
    </button>

    {/* Page Numbers (Hidden on small screens) */}
    <div className="hidden sm:flex gap-2 max-w-full overflow-x-auto">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`px-3 md:px-4 py-2 rounded-xl text-sm font-medium transition-all
            ${currentPage === page
              ? "bg-[#25215C] text-white shadow-md"
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
            }
          `}
        >
          {page}
        </button>
      ))}
    </div>

    {/* Page Indicator (Visible only on mobile) */}
    <span className="sm:hidden text-gray-600 text-sm font-medium">
      Page {currentPage} of {totalPages}
    </span>

    {/* Next Button */}
    <button
      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
      disabled={currentPage === totalPages}
      className={`px-3 md:px-4 py-2 rounded-xl text-sm font-medium transition-all
        ${currentPage === totalPages
          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        }
      `}
    >
      Next
    </button>
  </div>
)}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Question?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Our team of experts is here to provide personalized advice and
            support
          </p>
          <Link href="/contact">
            <Button
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white hover:text-[#25215C] transition-shadow"
            >
              Get Expert Guidance
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
