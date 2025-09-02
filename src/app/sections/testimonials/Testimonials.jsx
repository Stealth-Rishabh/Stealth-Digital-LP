"use client";
import React from "react";
// import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
// import Autoplay from "embla-carousel-autoplay";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselPrevious,
//   CarouselNext,
// } from "@/components/ui/carousel";
import { AnimatedTestimonialsDemo } from "./AnimatedTestimonialsDemo";

// const testimonials = [
//   {
//     name: "Arjun Mehta",
//     role: "Founder, D2C Brand",
//     quote:
//       "Stealth Digital scaled our ROAS while improving creative quality. We saw consistent month-on-month growth.",
//     avatar:
//       "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
//   },
//   {
//     name: "Neha Sharma",
//     role: "Head of Marketing, SaaS",
//     quote:
//       "Their SEO + content framework moved us from invisible to page one for core keywords.",
//     avatar:
//       "https://images.unsplash.com/photo-1544005314-0e06f9bfa9d3?w=400&auto=format&fit=crop&q=80",
//   },
//   {
//     name: "Rohit Verma",
//     role: "E‑commerce Lead",
//     quote:
//       "We finally have clarity on what's working. Their reporting and iteration speed is top-notch.",
//     avatar:
//       "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&auto=format&fit=crop&q=80",
//   },
// ];

export default function Testimonials() {
  return (
    <AnimatedSection className="py-16 sm:py-24">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            What our <span className="text-sky-600">Clients</span> Say
          </h2>
          <p className="mt-3 text-slate-600">
            Real words from teams we partner with.
          </p>
        </div>

        {/* <Carousel plugins={[Autoplay({ delay: 4500 })]}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name}>
                <div className="mx-2 sm:mx-4 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="relative size-12 rounded-full overflow-hidden">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800">
                        {t.name}
                      </div>
                      <div className="text-sm text-slate-600">{t.role}</div>
                    </div>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
        <AnimatedTestimonialsDemo />
      </div>
    </AnimatedSection>
  );
}
