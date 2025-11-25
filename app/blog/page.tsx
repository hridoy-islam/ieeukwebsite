import { Calendar, User, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Navigating UCAS: A Step-by-Step Guide for UK Students",
      summary:
        "Understand the UCAS application process from start to finish, including key dates and tips for success.",
      date: "July 25, 2024",
      author: "KnowEra Team",
      readTime: "7 min read",
      category: "UCAS",
      image: "/placeholder.svg?height=200&width=350&text=UCAS+Guide",
      slug: "navigating-ucas-guide",
    },
    {
      id: 2,
      title:
        "Student Finance Explained: Loans, Grants, and Scholarships in the UK",
      summary:
        "Demystifying student finance options for both domestic and international students in the UK.",
      date: "July 20, 2024",
      author: "KnowEra Team",
      readTime: "10 min read",
      category: "Finance",
      image: "/placeholder.svg?height=200&width=350&text=Student+Finance",
      slug: "student-finance-explained",
    },
    {
      id: 3,
      title: "Choosing Your University: Factors to Consider Beyond Rankings",
      summary:
        "Expert advice on how to select the right university for you, focusing on fit, culture, and course content.",
      date: "July 15, 2024",
      author: "KnowEra Team",
      readTime: "8 min read",
      category: "University Choice",
      image: "/placeholder.svg?height=200&width=350&text=University+Choice",
      slug: "choosing-your-university",
    },
    {
      id: 4,
      title: "Crafting a Winning Personal Statement: Tips from Our Experts",
      summary:
        "Learn how to write a compelling personal statement that stands out to admissions tutors.",
      date: "July 10, 2024",
      author: "KnowEra Team",
      readTime: "6 min read",
      category: "Application Tips",
      image: "/placeholder.svg?height=200&width=350&text=Personal+Statement",
      slug: "crafting-winning-personal-statement",
    },
    {
      id: 5,
      title: "Life as an International Student in the UK: What to Expect",
      summary:
        "A guide for international students on cultural adjustments, student life, and support services available.",
      date: "July 5, 2024",
      author: "KnowEra Team",
      readTime: "12 min read",
      category: "International Students",
      image:
        "/placeholder.svg?height=200&width=350&text=International+Student+Life",
      slug: "life-as-international-student-uk",
    },
  ];

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
            {blogPosts.map((post) => (
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
                  <span className="inline-block bg-[#D04418]/10 text-[#D04418] text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-4 h-4" />
                      <span>{post.readTime}</span>
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
              className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
            >
              {" "}
              Get Expert Guidance
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
