"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#25215C] to-[#D04418]">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Get personalized guidance from our education experts today
        </p>
        <Link href="/contact">
          <Button
            className="bg-white text-[#25215C] font-bold px-10 py-4 rounded-lg hover:shadow-lg hover:bg-white 
    hover:text-[#25215C]  transition-shadow"
          >
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
}
