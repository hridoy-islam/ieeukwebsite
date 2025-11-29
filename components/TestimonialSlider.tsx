"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";

// 7 Diverse Testimonials for the infinite loop feel
const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "MSc Management",
    university: "University of Manchester",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "IEE made my dream of studying in the UK a reality. Their guidance through the visa process was impeccable, and they found the perfect university for my career goals.",
  },
  {
    id: 2,
    name: "Ahmed Al-Fayed",
    role: "BSc Computer Science",
    university: "University of Leeds",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "The team was incredibly supportive. From the initial consultation to arriving in Leeds, they were there every step of the way. Highly recommended.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "MBA",
    university: "Aston University",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "I was confused about which university to choose. IEE provided clear, honest advice that helped me secure a scholarship I didn't even know existed.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Law LLB",
    university: "Queen Mary University",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "Professional, friendly, and efficient. They handled all the paperwork, allowing me to focus on preparing for my move to London. Thank you, IEE!",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "MA Marketing",
    university: "University of Westminster",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "The personalized attention I received was amazing. They didn't just treat me like a number; they genuinely cared about placing me in the right city.",
  },
  {
    id: 6,
    name: "David Osei",
    role: "Civil Engineering",
    university: "University of Bristol",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "Moving from Ghana to the UK was a big step, but IEE made the transition smooth. Their pre-departure briefing was a lifesaver.",
  },
  {
    id: 7,
    name: "Sophie Dubois",
    role: "Fashion Design",
    university: "Kingston University",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
    quote:
      "Fast, reliable, and transparent. I got my CAS letter much faster than my friends who applied through other agencies.",
  },
];

export default function TestimonialSlider() {
  // Embla Config: loop: true enables the infinite queue
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#25215C] mb-4">
              Student Success Stories
            </h2>

            <p className="text-lg text-gray-600 max-w-5xl">
              Join thousands of students who have successfully started their UK
              education journey with us.
            </p>
          </div>

          {/* --- Navigation Buttons --- */}
          {/* <div className="hidden md:flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full h-12 w-12 border-[#25215C]/20 text-[#25215C] hover:bg-[#25215C] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full h-12 w-12 border-[#25215C]/20 text-[#25215C] hover:bg-[#25215C] hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div> */}
        </div>

        {/* --- Carousel Area --- */}
        {/* "cursor-grab" indicates to the user it can be dragged */}
        <div
          className="relative cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex -ml-6 py-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                // Mobile: 100%, Tablet: 50%, Desktop: 33.33%
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 min-w-0"
              >
                <div className="bg-white p-8 rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between select-none">
                  {/* Review Text */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-10 h-10 text-[#D04418]/20 fill-[#D04418]/10" />
                      {/* <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div> */}
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6 ">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Student Profile */}
                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#25215C]/10 bg-gray-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          draggable="false" // Prevents image drag from interfering with slider drag
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          <User className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#25215C]">{item.name}</h4>
                      <p className="text-sm text-[#D04418] font-medium">
                        {item.role}, {item.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Helper Text */}
        <div className="mt-8 flex justify-center gap-2 md:hidden">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" /> Swipe for more{" "}
            <ChevronRight className="w-4 h-4" />
          </p>
        </div>
      </div>
    </section>
  );
}
