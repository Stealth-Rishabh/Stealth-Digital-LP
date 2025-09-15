"use client";

import React from "react";
// import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Users, Zap } from "lucide-react";
import ContactForm from "./ContactForm";
import { NumberTicker } from "@/components/magicui/number-ticker";

export default function HeroSection() {
  const trustedBrands = [
    "BRDS",
    "GLA Noida",
    "IMM India",
    "Label Maya",
    "Planet Education",
  ];

  const stats = [
    { icon: TrendingUp, value: "500", suffix: "%", label: "Avg. ROI Increase" },
    { icon: Users, value: "100", suffix: "+", label: "Happy Clients" },
    { icon: Zap, value: "360", suffix: "°", label: "Services Offered" },
    { icon: Star, value: "99", suffix: "%", label: "Retention Rate" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background Banner Image */}
      <div
        className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/banner.webp')",
        }}
      />

      {/* Overlay for better text readability */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/70 to-black/10" />
      <div className="sm:hidden block absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/10" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-5 sm:pt-28 pt-28 pb-10 sm:pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-16 items-start sm:items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 ">
            <div className="space-y-6 text-center sm:text-left">
              <div className="space-y-4">
                <h1 className="text-3xl relative md:text-5xl lg:text-5xl font-bold text-balance leading-tight">
                  <span className="text-white">
                    Drive Higher Revenue for your Brand
                  </span>
                  <br />
                  <span className="text-sky-400 sm:relative text-4xl sm:text-5xl lg:text-5xl">
                    With Our Digital Marketing Expertise
                    <div className=" absolute sm:block hidden -bottom-2 left-0 w-[90%] sm:w-full right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full " />
                  </span>
                </h1>
                

                <p className="sm:text-xl text-base text-white/80 text-pretty leading-relaxed max-w-xl">
                  Top-Tier Digital Marketing Company Free Consultation from
                  Experts
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="sm:flex grid grid-cols-4 mb-8 sm:flex-wrap gap-6 text-center sm:text-left sm:justify-start justify-center item-start sm:items-center sm:divide-x-2 divide-sky-200">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left sm:w-max w-full  sm:pr-5"
                >
                  <div className="flex sm:items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="min-w-5 min-h-5 sm:w-8 sm:h-8  text-sky-600 mr-2" />
                    <div className="flex items-center gap-2">
                      <NumberTicker
                        value={stat.value}
                        className="text-xl font-bold text-sky-50"
                      />
                      <span className="-ml-2 text-xl  font-bold text-sky-50">
                        {stat.suffix}
                      </span>
                    </div>
                  </div>
                  <p className="sm:text-sm text-xs text-sky-200 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            {/* <div className="space-y-4 text-center sm:text-left hidden sm:block">
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                {trustedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-muted-foreground/70"
                  >
                  
                    <span className="text-sm font-medium px-3 py-1 uppercase bg-gradient-to-r from-sky-500 to-blue-500 rounded-full text-white">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          {/* Right Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
