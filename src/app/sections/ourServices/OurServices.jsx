"use client";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Marketing (SEM)",
    description:
      "Strategic paid advertising campaigns across search engines to drive targeted traffic and increase conversions. We optimize your ad spend for maximum ROI through data-driven insights.",
    icon: "🎯",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    color: "#0ea5e9", // sky-500
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Social Media Optimization (SMO)",
    description:
      "Comprehensive social media management and optimization to build brand presence, engage audiences, and drive organic growth across platforms.",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    color: "#0284c7", // sky-600
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Data-driven SEO strategies to improve search rankings, increase organic traffic, and establish your brand as an authority in your industry with proven results.",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    color: "#0369a1", // sky-700
    gradient: "from-sky-600 to-blue-700",
  },
  {
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with industry influencers to amplify your brand message, reach new audiences, and build authentic connections that drive meaningful engagement.",
    icon: "⭐",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    color: "#075985", // sky-800
    gradient: "from-sky-700 to-blue-800",
  },
  {
    title: "Web Design & Development",
    description:
      "Custom, responsive websites that convert visitors into customers through modern design, seamless user experience, and technical excellence that delivers outstanding performance.",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
    color: "#0c4a6e", // sky-900
    gradient: "from-sky-800 to-blue-900",
  },
  {
    title: "E-commerce Marketing",
    description:
      "Complete e-commerce marketing solutions to drive sales, optimize conversion funnels, and maximize your online store's performance through comprehensive strategic approaches.",
    icon: "🛒",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&auto=format&fit=crop&q=80",
    color: "#1e40af", // blue-700
    gradient: "from-blue-600 to-indigo-700",
  },
];

export default function OurServices() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main
      className=""
      ref={container}
    >
      {/* Hero Section */}
      <section className="relative h-fit py-10 sm:py-16 w-full flex items-center justify-center ">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"></div>

          {/* Floating Elements */}
          <div className="absolute top-38 left-32 w-40 h-40 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>

          <div className="relative h-fit -mb-20 z-10 text-center px-8 max-w-7xl mx-auto">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sky-700 font-medium text-sm">
                Trusted by 50+ Clients
              </span>
            </div> */}

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold text-slate-800 sm:mb-8 mb-5 leading-tight"
            >
              Our Digital Marketing
              <span className="ml-3 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="sm:text-lg  md:text-lg text-slate-600 max-w-6xl mx-auto leading-relaxed sm:mb-12 mb-8"
            >
              Transform your business with our comprehensive digital marketing
              solutions. From SEO to social media, we drive results that matter.
            </motion.p>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="relative max-w-[90rem]  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            // Group cards: 0,1,2 animate together, then 3,4,5 animate together
            let range;
            let targetScale;
            
            if (i >= 0 && i <= 2) {
              // Cards 0,1,2 start scaling down when cards 3,4,5 come into view
              range = [0.36, 1]; // Start at 3 * 0.12
              targetScale = 1 - 3 * 0.03; // All get same smaller scale
            } else {
              // Cards 3,4,5 and beyond use individual scaling
              range = [i * 0.12, 1];
              targetScale = 1 - (services.length - i) * 0.0;
            }
            
            return (
              <ServiceCard
                key={`service_${i}`}
                i={i}
                service={service}
                progress={scrollYProgress}
                range={range}
                targetScale={targetScale}
              />
            );
          })}
        </section>
    </main>
  );
}

const ServiceCard = ({ i, service, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const scale = useTransform(progress, range, [0.95, targetScale]);
  const opacity = useTransform(progress, range, [1, 1]);
  const y = useTransform(progress, range, [50, 0]);

  return (
    <div
      ref={container}
      className="h-[70vh] grid grid-cols-1 items-center justify-center sticky top-0 px-2"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="relative w-full max-w-3xl mx-auto h-full"
      >
        <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-200 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
          <div className="flex flex-col">
            {/* Image Section - Top */}
            <div className="relative h-60 overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  fill
                  src={service.image}
                  alt={service.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>

            {/* Content Section - Bottom */}
            <div className="p-6 lg:p-8 flex flex-col justify-center">
             
              <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 leading-tight">
               <span className="text-2xl">{service.icon}</span> {service.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-2">
                <button
                  className={`bg-gradient-to-r ${service.gradient} text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 sm:hover:shadow-2xl`}
                >
                  Let&apos;s Talk
                </button>
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg
                    className="w-3 h-3 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
