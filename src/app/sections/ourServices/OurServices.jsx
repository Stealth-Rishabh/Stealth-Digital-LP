"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const services = [
  {
    title: "Search Engine Marketing (SEM)",
    description:
      "Strategic paid advertising campaigns across search engines to drive targeted traffic and increase conversions. We optimize your ad spend for maximum ROI.",
    icon: "🎯",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    color: "#0ea5e9", // sky-500
    gradient: "from-sky-400 to-blue-500",
  },
  {
    title: "Social Media Optimization (SMO)",
    description:
      "Comprehensive social media management and optimization to build brand presence, engage audiences, and drive organic growth across all platforms.",
    icon: "📱",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=80",
    color: "#0284c7", // sky-600
    gradient: "from-sky-500 to-blue-600",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Data-driven SEO strategies to improve search rankings, increase organic traffic, and establish your brand as an authority in your industry.",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    color: "#0369a1", // sky-700
    gradient: "from-sky-600 to-blue-700",
  },
  {
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with industry influencers to amplify your brand message, reach new audiences, and build authentic connections.",
    icon: "⭐",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
    color: "#075985", // sky-800
    gradient: "from-sky-700 to-blue-800",
  },
  {
    title: "Website Design & Development",
    description:
      "Custom, responsive websites that convert visitors into customers. Modern design, seamless user experience, and technical excellence.",
    icon: "💻",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&auto=format&fit=crop&q=80",
    color: "#0c4a6e", // sky-900
    gradient: "from-sky-800 to-blue-900",
  },
  {
    title: "E-commerce Marketing",
    description:
      "Complete e-commerce marketing solutions to drive sales, optimize conversion funnels, and maximize your online store's performance.",
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
    <ReactLenis root>
      <main
        className="bg-gradient-to-br from-slate-50 to-blue-50"
        ref={container}
      >
        {/* Hero Section */}
        <section className="relative h-fit py-10 w-full flex items-center justify-center ">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:64px_64px] opacity-40"></div>

          {/* Floating Elements */}
          <div className="absolute top-32 left-32 w-40 h-40 bg-gradient-to-br from-sky-200 to-blue-300 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-sky-100 to-blue-200 rounded-full opacity-20 animate-pulse delay-500"></div>

          <div className="relative h-fit -mb-20 z-10 text-center px-8 max-w-7xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sky-200 rounded-full px-6 py-3 mb-8 shadow-lg">
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse"></div>
              <span className="text-sky-700 font-medium text-sm">
                Trusted by 20+ Clients
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8 leading-tight">
              Our Digital Marketing
              <span className="ml-3 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                Expertise
              </span>
            </h1>
            <p className="text-xl  md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Transform your business with our comprehensive digital marketing
              solutions. From SEO to social media, we drive results that matter.
            </p>
          </div>
        </section>

        {/* Services Cards Section */}
        <section className="relative w-full ">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.03;
            return (
              <ServiceCard
                key={`service_${i}`}
                i={i}
                service={service}
                progress={scrollYProgress}
                range={[i * 0.12, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
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
      className="h-[80vh] flex items-center justify-center sticky top-0 px-4"
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="relative w-full max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <div className="p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-50 to-blue-100 rounded-2xl mb-8">
                <span className="text-4xl">{service.icon}</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <div className="flex items-center gap-4">
                <button
                  className={`bg-gradient-to-r ${service.gradient} text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                >
                  Learn More
                </button>
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-sky-100 to-blue-100 flex items-center justify-center hover:scale-110 transition-all duration-300 cursor-pointer">
                  <svg
                    className="w-6 h-6 text-sky-600"
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

            {/* Image Side */}
            <div className="relative h-96 lg:h-full overflow-hidden">
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
          </div>
        </div>
      </motion.div>
    </div>
  );
};
