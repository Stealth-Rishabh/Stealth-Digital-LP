"use client";
import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { scrollToLeadForm } from "@/lib/utils";

export default function CTA() {
  return (
    <AnimatedSection className="py-16 sm:py-24 relative overflow-hidden">
      <div className="container sm:max-w-3xl md:max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
          Ready to <span className="text-sky-600">Skyrocket</span> your growth <span className="text-sky-600">?</span>
        </h2>
        <p className="mt-4 text-slate-600">
          Enquire now. This form will redirect to the main banner form.
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="px-8 py-4 rounded-xl text-white"
            style={{
              background: "linear-gradient(135deg, #0284c7, #0ea5e9)",
              boxShadow: "0 10px 25px rgba(2, 132, 199, 0.3)",
            }}
            onClick={scrollToLeadForm}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}
