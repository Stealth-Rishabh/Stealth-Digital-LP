"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const logos = [
  "/client-logo/IMM_Logo.png",
  "/client-logo/Gl_Bajaj-Logo.png",
  "/client-logo/Planet_Education.png",
  "/client-logo/LBSIM-Logo.png",
  "/client-logo/logo-png.png",
  "/client-logo/logo-png.png",
  "/client-logo/LBSIM-Logo.png",
  "/client-logo/Planet_Education.png",
  "/client-logo/Gl_Bajaj-Logo.png",
  "/client-logo/IMM_Logo.png",
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
          {logos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/2] rounded-sm border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
