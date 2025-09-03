"use client";
import React from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const items = [
  {
    title: "Col Brown School ",
    tag: "Website",
    image: "/our-work/cbs.png",
  },
  {
    title: "Noida GLA University",
    tag: "Website",
    image: "/our-work/gla.png",
  },
  {
    title: "IMM India",
    tag: "Website",
    image: "/our-work/imm.png",
  },
  {
    title: "Label Mayaa",
    tag: "Website",
    image: "/our-work/labelmaya.png",
  },
];

export default function OurWork() {
  return (
    <AnimatedSection className="py-10 sm:py-24">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        

        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
            Our <span className="text-sky-600">Work</span>
          </h2>
          <p className="mt-3 text-slate-600 hidden sm:block">
            A compact, swipeable showcase of creatives and ad visuals.
          </p>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 2500 })]}
          className="[--slide-size:95%] sm:[--slide-size:55%] md:[--slide-size:45%] lg:[--slide-size:95%]"
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.title}
                className="basis-[var(--slide-size)] pl-0 pr-2 sm:pr-4"
              >
                <div className="bg-white border border-slate-200 rounded-sm  overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-40 sm:h-[550px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 right-3 bg-blue-600 backdrop-blur px-3 py-1 rounded-full text-white text-xs font-medium">
                      {item.tag}
                    </div>
                  </div>
                  <div className="sm:p-5 p-3">
                    <h3 className="sm:text-lg text-sm font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious  className="hidden sm:block justify-center items-center"/>
          <CarouselNext  className="hidden sm:block justify-center items-center"/>
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
