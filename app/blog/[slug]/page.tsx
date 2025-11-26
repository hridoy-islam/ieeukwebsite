
import { Calendar, User, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogs } from "@/utils/blog";
import moment from "moment";



export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          The blog post you are looking for does not exist.
        </p>
        <Button className="font-bold px-10 py-4 rounded-full bg-[#25215C] text-white hover:bg-[#1A1745] transition-all">
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#25215C] to-[#D04418] py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-6"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {post.title}
          </h1>
          <div className="flex items-center text-white/80 text-sm space-x-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{moment(post.date).format("DD MMM, YYYY")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <img
            src={
              post.image ||
              "/placeholder.svg?height=400&width=800&query=blog article detail"
            }
            alt={post.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg mb-10"
          />

          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 text-center">
            <Button className="font-bold px-10 py-4 rounded-full text-base shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 bg-gradient-to-r from-[#25215C] to-[#D04418] text-white">
              <Link href="/contact" className="flex items-center gap-2">
                Book a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
