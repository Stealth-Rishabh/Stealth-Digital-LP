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
    title: "SMO Creative 01",
    tag: "SMO",
    image:
      "https://images.unsplash.com/photo-1611162618071-b39a2ec5ebd1?w=1600&auto=format&fit=crop&q=80",
  },
  {
    title: "SMO Creative 02",
    tag: "SMO",
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1600&auto=format&fit=crop&q=80",
  },
  {
    title: "Paid Ad Visual",
    tag: "Paid Ads",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1600&auto=format&fit=crop&q=80",
  },
  {
    title: "Performance Snapshot",
    tag: "Paid Ads",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1600&auto=format&fit=crop&q=80",
  },
];

export default function OurWork() {
  return (
    <AnimatedSection className="py-16 sm:py-24">
      <div className="container sm:max-w-6xl md:max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8 sm:mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-800">
              Our <span className="text-sky-600">Work</span>
            </h2>
            <p className="mt-3 text-slate-600">
              A compact, swipeable showcase of creatives and ad visuals.
            </p>
          </div>
        </div>

        <Carousel
          plugins={[Autoplay({ delay: 3500 })]}
          className="[--slide-size:80%] sm:[--slide-size:55%] md:[--slide-size:45%] lg:[--slide-size:33%]"
        >
          <CarouselContent className="ml-0">
            {items.map((item) => (
              <CarouselItem
                key={item.title}
                className="basis-[var(--slide-size)] pl-0 pr-4"
              >
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, (max-width: 1280px) 45vw, 35vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute top-3 left-3 bg-white/85 backdrop-blur px-3 py-1 rounded-full text-slate-700 text-xs font-medium">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-800">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </AnimatedSection>
  );
}
