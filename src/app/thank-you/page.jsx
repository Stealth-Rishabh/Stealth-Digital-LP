"use client";

import React from "react";
import { CheckCircle, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50/30 to-cyan-50/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-5 pt-28 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
          </div>

          {/* Main Content */}
          <Card className="p-8 shadow-2xl border-0 bg-card/80 backdrop-blur-sm rounded-sm">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-sky-600 mb-4">
                Thank You!
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your message has been received successfully. We're excited to help you transform your digital presence!
              </p>

              <div className="bg-sky-50 border border-sky-200 rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold text-sky-800 mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sky-800">Email Confirmation</p>
                      <p className="text-sm text-sky-700">We'll send you a confirmation email within 5 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sky-800">Expert Review</p>
                      <p className="text-sm text-sky-700">Our team will review your requirements and prepare a customized strategy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sky-800">Follow-up Call</p>
                      <p className="text-sm text-sky-700">We'll reach out within 24 hours to schedule your free strategy session</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 transition-all duration-200 group">
                    Back to Home
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
              </div>

              {/* Contact Info */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-muted-foreground mb-2">
                  Need immediate assistance?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                  <a 
                    href="mailto:hello@stealthdigital.com" 
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    rishabh@stealthdigital.in
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a 
                    href="tel:+1234567890" 
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Follow us on social media for digital marketing tips and updates
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                LinkedIn
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
