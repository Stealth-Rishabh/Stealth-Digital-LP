"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const logos = [
 
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=60",
];

export default function Clients() {
  return (
    <AnimatedSection className="py-16 sm:py-24 relative">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Our <span className="text-sky-600">Clients</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Brands that trust our strategy, creative and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {logos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[3/2] rounded-2xl border border-slate-200 overflow-hidden bg-white/60 backdrop-blur hover:shadow-lg transition-shadow"
            >
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
