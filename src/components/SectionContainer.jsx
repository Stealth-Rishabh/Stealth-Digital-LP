"use client";
import React from "react";

export default function SectionContainer({ children, className = "" }) {
  return (
    <section
      className={
        "odd:bg-gradient-to-b odd:from-white odd:to-sky-100 " +
        "even:bg-gradient-to-t even:from-slate-100 even:to-white " +
        className
      }
    >
      {children}
    </section>
  );
}
