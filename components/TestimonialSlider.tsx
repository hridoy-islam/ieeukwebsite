"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, ChevronLeft, ChevronRight, User } from "lucide-react";
// import { Button } from "@/components/ui/button"; // Optional if you re-enable buttons
import { cn } from "@/utils/utils"; // Ensure you have clsx/tailwind-merge setup, or use standard string interpolation

// 7 Diverse Testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "MSc Management",
    university: "University of Manchester",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "IEE made my dream of studying in the UK a reality. Their guidance through the visa process was impeccable, and they found the perfect university for my career goals.",
  },
  {
    id: 2,
    name: "Ahmed Al-Fayed",
    role: "BSc Computer Science",
    university: "University of Leeds",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "The team was incredibly supportive. From the initial consultation to arriving in Leeds, they were there every step of the way. Highly recommended.",
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "MBA",
    university: "Aston University",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "I was confused about which university to choose. IEE provided clear, honest advice that helped me secure a scholarship I didn't even know existed.",
  },
  {
    id: 4,
    name: "Michael Chen",
    role: "Law LLB",
    university: "Queen Mary University",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Professional, friendly, and efficient. They handled all the paperwork, allowing me to focus on preparing for my move to London. Thank you, IEE!",
  },
  {
    id: 5,
    name: "Elena Rodriguez",
    role: "MA Marketing",
    university: "University of Westminster",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "The personalized attention I received was amazing. They didn't just treat me like a number; they genuinely cared about placing me in the right city.",
  },
  {
    id: 6,
    name: "David Osei",
    role: "Civil Engineering",
    university: "University of Bristol",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Moving from Ghana to the UK was a big step, but IEE made the transition smooth. Their pre-departure briefing was a lifesaver.",
  },
  {
    id: 7,
    name: "Sophie Dubois",
    role: "Fashion Design",
    university: "Kingston University",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200&h=200",
    quote: "Fast, reliable, and transparent. I got my CAS letter much faster than my friends who applied through other agencies.",
  },
];

export default function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  // -- Dot Navigation State --
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // -- Update State on Carousel Move --
  const onInit = useCallback((emblaApi: any) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    
    // Listen for events
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  // -- Manual Dot Click --
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        
    
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
        </div>

        
        <div
          className="relative cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex -ml-6 py-4">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6 min-w-0"
              >
                <div className="bg-white p-8 rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between select-none">
              
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-10 h-10 text-[#D04418]/20 fill-[#D04418]/10" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6 ">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#25215C]/10 bg-gray-100">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          draggable="false"
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

        <div className="mt-10 flex justify-center items-center gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 focus:outline-none",
                index === selectedIndex
                  ? "w-8 bg-[#25215C]" // Active: Wide and Navy
                  : "w-2.5 bg-[#25215C]/30 hover:bg-[#25215C]/50" // Inactive: Small and transparent
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile Swipe Helper (Optional - can remove if dots are enough) */}
        {/* <div className="mt-4 flex justify-center gap-2 md:hidden">
            <p className="text-xs text-gray-400 flex items-center gap-1">
               Swipe <ChevronRight className="w-3 h-3" />
            </p>
        </div> */}
        
      </div>
    </section>
  );
}