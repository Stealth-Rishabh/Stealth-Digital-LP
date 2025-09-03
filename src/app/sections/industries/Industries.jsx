"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { 
  GraduationCap, 
  Heart, 
  Truck, 
  Building, 
  Plane, 
  ShoppingCart 
} from "lucide-react";
import { scrollToLeadForm } from "@/lib/utils";

const industries = [
  {
    title: "Education",
    description: "Empowering educational institutions with digital solutions that enhance learning experiences and drive student engagement.",
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#3B82F6",
  },
  {
    title: "Healthcare",
    description: "Supporting healthcare providers with digital marketing strategies that build trust and connect with patients effectively.",
    icon: Heart,
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#EF4444",
  },
  {
    title: "Supply & Logistics",
    description: "Optimizing logistics companies' digital presence to streamline operations and improve customer satisfaction.",
    icon: Truck,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#10B981",
  },
  {
    title: "Real Estate",
    description: "Helping real estate professionals showcase properties and connect with potential buyers through compelling digital campaigns.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#8B5CF6",
  },
  {
    title: "Hospitality & Travel",
    description: "Creating memorable digital experiences for hospitality and travel brands to attract and retain customers.",
    icon: Plane,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#F59E0B",
  },
  {
    title: "Ecommerce",
    description: "Driving online sales and growth for e-commerce businesses through strategic digital marketing and conversion optimization.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    overlayColor: "bg-gradient-to-t from-black/80 via-black/40 to-black/40",
    hoverOverlay: "group-hover:bg-black/60",
    iconColor: "#14B8A6",
  },
];

export default function Industries() {
  return (
    <AnimatedSection className="py-10 sm:py-16">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
          >
            Industries We{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              Cater
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in delivering tailored digital marketing solutions across diverse industries, 
            helping businesses thrive in their unique market landscapes.
          </motion.p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group cursor-pointer"
            >
              <div className={`
                relative overflow-hidden rounded-2xl h-full
                border border-white/20 shadow-lg hover:shadow-2xl
                transition-all duration-500 ease-out
                transform hover:scale-105 hover:-translate-y-2
              `}>
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Blur Effect on Hover */}
                  <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500"></div>
                </div>

                {/* Colored Overlay */}
                <div className={`
                  absolute inset-0 ${industry.overlayColor} ${industry.hoverOverlay}
                  transition-all duration-500 ease-out
                `}></div>

                {/* Content Container */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon Container - Always White Background */}
                  <div className={`
                    w-16 h-16 bg-white/95 backdrop-blur-sm rounded-2xl
                    flex items-center justify-center mb-6
                    shadow-lg group-hover:shadow-xl
                    transform group-hover:scale-110 group-hover:rotate-6
                    transition-all duration-500 ease-out
                  `}>
                    <industry.icon 
                      className="w-8 h-8 transition-all duration-300"
                      style={{ color: industry.iconColor }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="
                      text-xl sm:text-2xl font-bold mb-3 leading-tight
                      text-white group-hover:text-white
                      transition-colors duration-500
                      drop-shadow-lg
                    ">
                      {industry.title}
                    </h3>
                    <p className="
                      leading-relaxed text-sm sm:text-base
                      text-white/95 group-hover:text-white
                      transition-colors duration-500
                      drop-shadow-md
                    ">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 z-20
                ">
                  <div className="
                    absolute inset-0 bg-gradient-to-r from-transparent 
                    via-white/20 to-transparent transform -skew-x-12 
                    -translate-x-full group-hover:translate-x-full 
                    transition-transform duration-1000 ease-out
                  "></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.p
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Don't see your industry? We adapt our strategies to fit your unique needs.
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              y: -3,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToLeadForm}
            className="
              relative overflow-hidden
              bg-gradient-to-r from-sky-500 to-blue-600 
              text-white px-10 py-4 rounded-2xl 
              font-semibold text-lg
              shadow-xl hover:shadow-2xl 
              transition-all duration-300 ease-out
              border border-white/20
            "
          >
            <span className="relative z-10">Let's Discuss Your Industry</span>
            
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </motion.button>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}