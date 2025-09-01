"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Zap, Users, Network, Lightbulb } from "lucide-react";
import { scrollToLeadForm } from "@/lib/utils";

const About = () => {
  const features = [
    {
      icon: Zap,
      title: "Performance-Driven Solutions",
      desc: "We specialize in performance-driven digital marketing solutions designed to help brands grow, scale, and thrive online.",
    },
    {
      icon: Users,
      title: "Comprehensive Expertise",
      desc: "With expertise in SEO, PPC, social media, and conversion-focused strategies.",
    },
    {
      icon: Network,
      title: "Data-Driven & Creative Insights",
      desc: "We combine creativity with data-driven insights to deliver measurable results.",
    },
    {
      icon: Lightbulb,
      title: "Long-Term Growth Mission",
      desc: "Our mission is simple — to turn clicks into loyal customers and campaigns into long-term growth.",
    },
  ];

  return (
    <AnimatedSection className="py-10 sm:py-20 bg-white">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-center sm:text-left font-bold text-slate-800 mb-6">
              About{" "}
              <span className="text-sky-600 block sm:inline">
                Stealth Digital
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed text-center sm:text-left">
              At Stealth Digital, we specialize in performance-driven digital
              marketing solutions designed to help brands grow, scale, and
              thrive online. We combine creativity with data-driven insights to
              deliver measurable results.
            </p>

            <div className="space-y-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-8 h-8 bg-sky-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button
                  size="lg"
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, #0284c7, #0ea5e9)",
                    boxShadow: "0 10px 25px rgba(2, 132, 199, 0.3)",
                  }}
                  onClick={scrollToLeadForm}
                >
                  Get Started
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center&q=80"
                alt="Students collaborating"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.2), transparent)",
                }}
              />
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-4 sm:-right-6 border bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">
                  ROI Focused
                </div>
                <div className="text-sm text-slate-600">Results Driven</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-4 sm:-left-6 border bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-sky-600">20+</div>
                <div className="text-sm text-slate-600">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
