import React from 'react'
import { scrollToLeadForm } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-slate-800 to-slate-900 text-white py-32 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>
   
    <div className="max-w-7xl mx-auto text-center px-8 relative z-10">
      <h2 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-8">
        Stealth Digital
      </h2>
      <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16 leading-relaxed">
        Your trusted partner in digital marketing success. Let's build
        something extraordinary together.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button 
          onClick={scrollToLeadForm}
          className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-sky-500/25 transition-all duration-300 hover:scale-105"
        >
          Contact Us
        </button>
        <button 
          onClick={scrollToLeadForm}
          className="border-2 border-sky-400 text-sky-400 px-10 py-4 rounded-full font-semibold text-lg hover:bg-sky-400 hover:text-white transition-all duration-300 hover:scale-105"
        >
          Learn More
        </button>
      </div>
   
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-4xl font-bold text-sky-400 mb-2">500+</div>
          <div className="text-slate-400">Happy Clients</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-sky-400 mb-2">
            1000+
          </div>
          <div className="text-slate-400">Projects Completed</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-sky-400 mb-2">98%</div>
          <div className="text-slate-400">Success Rate</div>
        </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer