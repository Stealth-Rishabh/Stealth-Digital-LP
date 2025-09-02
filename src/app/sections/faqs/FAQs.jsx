"use client";
import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How quickly can we see results?",
    a: "Paid campaigns show traction within days, while SEO compounds steadily over 8–12 weeks.",
  },
  {
    q: "Do you manage creatives as well?",
    a: "Yes. We produce platform‑native creatives and iterate based on performance data.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "Three months helps us plan, test, and optimize properly to reach meaningful ROI.",
  },
  {
    q: "Can you integrate with our team?",
    a: "We collaborate in your workflows and share transparent weekly reports.",
  },
];

export default function FAQs() {
  return (
    <AnimatedSection className="py-16 sm:py-24">
      <div className="container sm:max-w-4xl md:max-w-5xl mx-auto px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            FAQs <span className="text-sky-600">?</span>
          </h2>
          <p className="mt-3 text-slate-600">
            Short answers to common questions.
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-slate-200 bg-white"
        >
          {faqs.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="px-5 sm:px-6">
                <span className="font-semibold text-slate-800 sm:text-xl">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="px-5 sm:px-6 text-slate-600 sm:text-lg">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </AnimatedSection>
  );
}
