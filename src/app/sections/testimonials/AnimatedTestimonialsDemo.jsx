import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Stealth Digital has transformed our online presence. Their expertise in SEO and SEM has driven significant growth in our website traffic and conversions. We highly recommend them!",
      name: "GL Bajaj Institute",
      designation: "Client of Stealth Digital",
      src: "/testimonials/glb.png", // Replace with actual URL
    },
    {
      quote:
        "The Stealth Digital team is knowledgeable, professional, and results‑driven. They have been instrumental in our digital transformation and ongoing success.",
      name: "Indo Global (IGC)",
      designation: "Client of Stealth Digital",
      src: "/testimonials/igef.webp", // Replace with actual URL
    },
    {
      quote:
        "We have worked with Stealth Digital on several projects, and they have consistently delivered high‑quality work. Their digital marketing strategies have significantly improved our online visibility.",
      name: "IMM Delhi",
      designation: "Client of Stealth Digital",
      src: "/testimonials/imm.webp", // Replace with actual URL
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials}  autoplay={true}/>;
}
