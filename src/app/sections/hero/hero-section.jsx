"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    query: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      services: value,
    }));
  };

  const trustedBrands = [
    "BRDS",
    "GLA Noida",
    "IMM India",
    "Label Maya",
    "Planet Education",
  ];

  const stats = [
    { icon: TrendingUp, value: "200%", label: "Avg. ROI Increase" },
    { icon: Users, value: "20+", label: "Happy Clients" },
    { icon: Zap, value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50/30 to-cyan-50/5 relative overflow-hidden ">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-5 sm:py-16 py-12 ">
        <div className="grid lg:grid-cols-2 gap-1 lg:gap-16 items-start  max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8 ">
            <div className="space-y-6 text-center sm:text-left">
              <Badge variant="secondary" className="w-fit text-sm font-medium hidden">
                <Star className="w-4 h-4 mr- fill-current text-yellow-600" />
                #1 Digital Marketing Agency
              </Badge>

              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                  Transform Your Brand's{" "} <br/>
                  <span className="text-sky-600 relative text-4xl sm:text-5xl lg:text-6xl">
                    Digital Presence
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full" />
                  </span>
                </h1>

                <p className="sm:text-xl text-base text-muted-foreground text-pretty leading-relaxed max-w-xl">
                  Innovative strategies tailored to your needs. We help
                  ambitious brands achieve extraordinary growth through
                  data-driven digital marketing solutions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center sm:text-left">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <stat.icon className="w-5 h-5 text-sky-600 mr-2" />
                    <span className="text-2xl font-bold text-sky-950">
                      {stat.value}
                    </span>
                  </div>
                  <p className="sm:text-sm text-xs text-sky-800">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4 text-center sm:text-left hidden sm:block">
              <p className="text-sm font-medium text-muted-foreground">
                Trusted by Industry Leaders
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
                {trustedBrands.map((brand, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-muted-foreground/70"
                  >
                    {/* <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                      <span className="text-xs font-bold">{brand[0]}</span>
                    </div> */}
                    <span className="text-sm font-medium px-3 py-1 uppercase bg-gradient-to-r from-sky-500 to-blue-500 rounded-full text-white">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-30">
            <Card className="p-8 shadow-2xl border-0 bg-card/80 backdrop-blur-sm rounded-sm">
              <div className="space-y-6">
                <div className="text-center space-y-3">
                  <h2 className="text-3xl font-bold text-sky-600">
                    Stealth Digital
                  </h2>
                  <h3 className="text-xl font-semibold hidden">
                    Get Your Free Strategy Session
                  </h3>
                  <p className="text-muted-foreground">
                    Discover how we can 3x your digital growth in 90 days
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="sm:space-y-4 space-y-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>
                  <div className=" grid sm:grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-background border-border focus:ring-2 focus:ring-sky-500/20"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background border-border focus:ring-2 focus:ring-sky-500/20"
                    />
                  </div>

                  <div className="space-y-2 w-full">
                    <label htmlFor="services" className="text-sm font-medium">
                      Services
                    </label>
                    <Select onValueChange={handleSelectChange} className="w-full">
                      <SelectTrigger className="bg-background border-border focus:ring-2 focus:ring-primary/20 w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="seo">SEO Optimization</SelectItem>
                        <SelectItem value="ppc">PPC Advertising</SelectItem>
                        <SelectItem value="social-media">
                          Social Media Marketing
                        </SelectItem>
                        <SelectItem value="content-marketing">
                          Content Marketing
                        </SelectItem>
                        <SelectItem value="email-marketing">
                          Email Marketing
                        </SelectItem>
                        <SelectItem value="web-design">
                          Web Design & Development
                        </SelectItem>
                        <SelectItem value="analytics">
                          Analytics & Reporting
                        </SelectItem>
                        <SelectItem value="full-service">
                          Full Service Package
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="query" className="text-sm font-medium">
                      Query/Additional Information
                    </label>
                    <Textarea
                      id="query"
                      name="query"
                      placeholder="Tell us about your goals and challenges..."
                      value={formData.query}
                      onChange={handleInputChange}
                      rows={2}
                      className="bg-background border-border focus:ring-2 focus:ring-sky-500/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 transition-all duration-200 group"
                  >
                    Submit
                    <ArrowRight className="w-4 h-4 -ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
