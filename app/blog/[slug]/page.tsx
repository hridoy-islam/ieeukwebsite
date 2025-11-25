"use client";
import { Calendar, User, BookOpen, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// This is a placeholder for fetching blog post data based on the slug
async function getBlogPost(slug: string) {
  // In a real application, you would fetch this from a database or CMS
  const posts = [
    {
      id: 1,
      title: "Navigating UCAS: A Step-by-Step Guide for UK Students",
      date: "July 25, 2024",
      author: "KnowEra Team",
      readTime: "7 min read",
      category: "UCAS",
      image: "/placeholder.svg?height=400&width=800&text=UCAS+Guide+Detail",
      slug: "navigating-ucas-guide",
      content: `
        <p class="mb-4">Applying to university through UCAS can seem like a daunting task, but with the right guidance, it's a straightforward process. This comprehensive guide will walk you through each step, ensuring you're well-prepared for your application journey.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">1. Research and Choose Your Courses</h2>
        <p class="mb-4">Before you even think about filling out forms, spend ample time researching courses and universities. Consider your academic interests, career aspirations, and preferred learning environment. Look beyond just the university name; delve into specific course modules, teaching styles, and assessment methods.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">2. Register with UCAS</h2>
        <p class="mb-4">The first practical step is to register on the UCAS website. You'll create an account and receive a unique Personal ID. If you're applying through a school or college, they will provide you with a 'buzzword' to link your application to their centre.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">3. Complete Your Personal Details</h2>
        <p class="mb-4">This section covers your personal information, contact details, residency status, and any special needs or disabilities. Ensure all information is accurate and up-to-date.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">4. Education and Qualifications</h2>
        <p class="mb-4">List all your qualifications, both achieved and pending, including GCSEs, A-Levels, BTECs, or international equivalents. Be meticulous with dates and grades.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">5. Employment History</h2>
        <p class="mb-4">If you have any paid employment history, you can add it here. This is optional but can be beneficial, especially if it relates to your chosen course.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">6. Personal Statement</h2>
        <p class="mb-4">This is your opportunity to showcase your passion for your chosen subject, your skills, and your suitability for university study. It's a crucial part of your application. KnowEra offers dedicated personal statement editing services to help you craft a compelling narrative.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">7. Reference</h2>
        <p class="mb-4">Your referee (usually a teacher or career advisor) will provide a written reference about your academic ability and suitability for higher education. Ensure you discuss this with your referee well in advance.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">8. Review and Pay</h2>
        <p class="mb-4">Carefully review every section of your application before submitting. Check for any errors or omissions. Once you're satisfied, you'll pay the UCAS application fee.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">9. Send Your Application</h2>
        <p class="mb-4">After payment, your application is sent to your referee, who adds their reference and sends it to UCAS. UCAS then processes it and sends it to your chosen universities.</p>
        <p class="mt-6 text-lg italic text-gray-700">With KnowEra's expert guidance, you can navigate the UCAS process with confidence. Book a free consultation today to get personalized support!</p>
      `,
    },
    {
      id: 2,
      title:
        "Student Finance Explained: Loans, Grants, and Scholarships in the UK",
      date: "July 20, 2024",
      author: "KnowEra Team",
      readTime: "10 min read",
      category: "Finance",
      image:
        "/placeholder.svg?height=400&width=800&text=Student+Finance+Detail",
      slug: "student-finance-explained",
      content: `
        <p class="mb-4">Understanding student finance in the UK can be complex, with different rules for home, EU, and international students. This guide breaks down the main types of funding available to help you plan your university finances.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Tuition Fee Loans</h2>
        <p class="mb-4">For eligible UK students, a Tuition Fee Loan covers the full cost of your course fees. This loan is paid directly to your university or college. You only start repaying it once you've graduated and are earning above a certain threshold.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Maintenance Loans</h2>
        <p class="mb-4">Maintenance Loans are designed to help with living costs, such as accommodation, food, and travel. The amount you receive depends on your household income and where you live and study. Like Tuition Fee Loans, these are repaid based on your earnings after graduation.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Grants and Bursaries</h2>
        <p class="mb-4">Unlike loans, grants and bursaries do not need to be repaid. They are usually awarded based on specific criteria, such as household income, academic merit, or personal circumstances. Many universities offer their own bursaries, so it's worth checking their websites directly.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Scholarships</h2>
        <p class="mb-4">Scholarships are another form of non-repayable funding, often awarded for academic excellence, sporting achievement, or specific talents. They can be offered by universities, charities, or private organizations. Researching and applying for scholarships can significantly reduce your financial burden.</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-4">International Student Funding</h2>
        <p class="mb-4">International students typically do not qualify for UK government student loans. However, many universities offer specific scholarships and bursaries for international applicants. It's crucial to research these options early in your application process.</p>
        <p class="mt-6 text-lg italic text-gray-700">KnowEra provides up-to-date advice on student finance and can help you navigate the application process for loans, grants, and scholarships. Contact us for personalized financial guidance!</p>
      `,
    },
    // Add content for other blog posts here following the same structure
  ];
  return posts.find((post) => post.slug === slug);
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(params.slug);

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
              <span>{post.date}</span>
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
