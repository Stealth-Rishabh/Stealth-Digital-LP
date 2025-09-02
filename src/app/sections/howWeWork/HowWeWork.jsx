"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We learn your goals, audience, and current performance to set the right direction.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Strategy",
    desc: "We craft a clear roadmap across SEO, SMO, paid media, and content.",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Create",
    desc: "We design scroll-stopping creatives and compelling copy that converts.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&auto=format&fit=crop&q=80",
  },
  {
    title: "Launch & Optimize",
    desc: "We launch, measure, and iterate fast for sustained growth and ROI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
  },
];

export default function HowWeWork() {
  return (
    <AnimatedSection className="py-10 sm:py-16">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold text-slate-800"
          >
            How We <span className="text-sky-600">Work</span>{" "}
            <span className="text-sky-600">?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 text-slate-600 text-lg"
          >
            A focused, image-first process to move from insight to impact.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="group rounded-sm overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-40">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-3 left-3 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-slate-700 text-sm font-medium">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
