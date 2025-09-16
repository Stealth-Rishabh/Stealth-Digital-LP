"use client";

import Image from "next/image";
import { Phone } from "lucide-react";
import { scrollToLeadForm } from "@/lib/utils";
import { useState, useEffect } from "react";

const ContactDock = ({
  phoneNumber = "919910694833",
  whatsappMessage = "Hello! I'm interested in your services. Can you help me?",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Show when scrolled below 400px from top
      setIsVisible(scrollPosition > 400);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none w-screen transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="pointer-events-auto flex items-center sm:justify-between gap-3 bg-white/30 backdrop-blur rounded-full shadow-xl border border-[#3A5834F5]/20 px-3 py-2 sm:bg-transparent sm:border-none sm:shadow-none sm:px-0 sm:py-0 sm:gap-0 sm:w-[95%] sm:backdrop-blur-none flex-row sm:flex-row-reverse">
        <button
          onClick={scrollToLeadForm}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium bg-sky-600 hover:opacity-95 transition sm:animate-bounce hover:scale-110 cursor-pointer "
          aria-label="Contact us"
        >
          <span>Enquiry</span>
        </button>

        <a
          href={`tel:+${phoneNumber}`}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium bg-sky-600 hover:opacity-95 transition sm:hidden"
          aria-label="Call"
        >
          <Phone className="text-white" />
          <span>Call</span>
        </a>

        <a
          href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hidden"
        >
          <Image
            src="/whatsapp.png"
            alt="WhatsApp"
            width={50}
            height={50}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactDock;
