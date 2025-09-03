"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: "",
    query: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (formData.phone.trim()) {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
        newErrors.phone = "Phone number must start with 6-9 and be exactly 10 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_term: urlParams.get('utm_term') || '',
        utm_content: urlParams.get('utm_content') || '',
      };

      const submissionData = {
        ...formData,
        ...utmParams,
        timestamp: new Date().toISOString(),
        page_url: window.location.href,
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          services: "",
          query: "",
        });
        setErrors({});
        alert("Thank you! Your message has been sent successfully.");
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert("Sorry, there was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Phone number formatting and validation
    if (name === 'phone') {
      // Remove all non-digits
      const digitsOnly = value.replace(/\D/g, '');
      // Limit to 10 digits
      const formattedPhone = digitsOnly.slice(0, 10);
      
      setFormData((prev) => ({
        ...prev,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      services: value,
    }));
  };

  return (
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
                className={`bg-background border-border focus:ring-2 focus:ring-sky-500/20 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
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
                  className={`bg-background border-border focus:ring-2 focus:ring-sky-500/20 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`bg-background border-border focus:ring-2 focus:ring-sky-500/20 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone}</p>
                )}
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
              disabled={isSubmitting}
              className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && (
                <ArrowRight className="w-4 h-4 -ml-1 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
}
