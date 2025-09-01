"use client";
import React from "react";

export default function SectionContainer({ children, className = "" }) {
  return (
    <section
      className={
        "odd:bg-gradient-to-b odd:from-white odd:to-slate-50 " +
        "even:bg-gradient-to-b even:from-sky-50 even:to-white " +
        className
      }
    >
      {children}
    </section>
  );
}
