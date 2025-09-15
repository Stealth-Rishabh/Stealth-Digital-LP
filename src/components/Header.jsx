"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useLenis } from "lenis/react";

const navLinks = [
  { name: "Services", id: "our-services" },
  { name: "About", id: "about" },
  { name: "Process", id: "how-we-work" },
  { name: "Work", id: "our-work" },
  { name: "Clients", id: "clients" },
  { name: "Testimonials", id: "testimonials" },
  { name: "FAQs", id: "faqs" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    lenis?.scrollTo(`#${id}`);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-sm shadow-md"
          : ""
      } ${headerVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Image
            src={isScrolled ? "/logo.png" : "/logo_white.png"}
            alt="Stealth Digital Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`${isScrolled ? "text-slate-800" : "text-white"} cursor-pointer hover:text-sky-600 transition-colors`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button className="bg-sky-100 text-sky-500 border border-sky-200" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
              <SheetHeader>
                <Image
                  src="/logo.png"
                  alt="Stealth Digital Logo"
                  width={150}
                  height={35}
                />
              </SheetHeader>
              <div className="flex flex-col space-y-2 mt-6 px-2">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-left text-lg text-sky-700 cursor-pointer hover:text-sky-600 transition-colors rounded-md p-3 hover:bg-slate-50"
                    >
                      {link.name}
                    </button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
