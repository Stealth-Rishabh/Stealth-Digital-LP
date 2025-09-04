"use client";

import React from "react";
import { CheckCircle, ArrowRight, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { GoogleTagManager } from "@next/third-parties/google";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50/30 to-cyan-50/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.1),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />
      <GoogleTagManager gtmId="GTM-5NW7F5FL" />
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
                    href="mailto:rishabh@stealthdigital.in" 
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    rishabh@stealthdigital.in
                  </a>
                  <span className="hidden sm:inline text-muted-foreground">•</span>
                  <a 
                    href="tel:9910694833" 
                    className="text-sky-600 hover:text-sky-700 font-medium"
                  >
                    9910694833 (HR)
                  </a>
                </div>
              </div>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
