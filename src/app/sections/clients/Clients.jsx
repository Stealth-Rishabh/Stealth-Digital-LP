"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const logos = [
  "/client-logo/Brds.png",
  "/client-logo/col.png",
  "/client-logo/DPS-.png",
  // "/client-logo/Gl_Bajaj-Logo.png",
  "/client-logo/gl-bajaj-.png",
  "/client-logo/GlA.png",
  // "/client-logo/hospideo-.png",
  "/client-logo/igc-.png",
  // "/client-logo/IMM_Logo.png",
  "/client-logo/Imm.png",
  "/client-logo/ims-logo-.png",
  "/client-logo/inlife-.png",
  "/client-logo/Kevassiya-.png",
  "/client-logo/LBISM-.png",
  // "/client-logo/LBSIM-Logo.png",
  "/client-logo/logo-png.png",
  "/client-logo/ns-.png",
  // "/client-logo/Planet_Education.png",
  "/client-logo/planet-.png",
  "/client-logo/PR.png",
  "/client-logo/ssim-.png",
];

export default function Clients() {
  return (
    <AnimatedSection className="py-10 sm:py-16 relative">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Our <span className="text-sky-600">Clients</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Brands that trust our strategy, creative and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true, amount: 0.5 }}
              className="relative aspect-[4/2] rounded-sm border border-slate-200 overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image
                src={src}
                alt={`Client logo ${i + 1}`}
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
