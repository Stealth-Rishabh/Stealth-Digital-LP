import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Stealth Digital has transformed our online presence. Their expertise in SEO and SEM has driven significant growth in our website traffic and conversions. We highly recommend them!",
      name: "GL Bajaj Institute",
      designation: "Client of Stealth Digital",
      src: "/testimonials/glb.png",
    },
    {
      quote:
        "The Stealth Digital team is knowledgeable, professional, and results‑driven. They have been instrumental in our digital transformation and ongoing success.",
      name: "Indo Global (IGC)",
      designation: "Client of Stealth Digital",
      src: "/testimonials/igef.webp",
    },
    {
      quote:
        "We have worked with Stealth Digital on several projects, and they have consistently delivered high‑quality work. Their digital marketing strategies have significantly improved our online visibility.",
      name: "IMM Delhi",
      designation: "Client of Stealth Digital",
      src: "/testimonials/imm.webp",
    },
    {
      quote:
        "Stealth Digital’s creative approach and attention to detail helped us connect with our audience in a fresh way. We saw a real difference in engagement and brand awareness.",
      name: "Label Mayaa",
      designation: "Client of Stealth Digital",
      src: "/testimonials/label-mayaa.webp",
    },
    {
      quote:
        "Working with Stealth Digital has been a game changer for us. Their team understood our vision and delivered campaigns that brought in quality leads and measurable results.",
      name: "InLife",
      designation: "Client of Stealth Digital",
      src: "/testimonials/inlife.webp",
    },
    {
      quote:
        "We appreciate Stealth Digital’s proactive communication and strategic mindset. Their efforts have boosted our online reach and made a clear impact on our business growth.",
      name: "Procure Engine",
      designation: "Client of Stealth Digital",
      src: "/testimonials/procure-engine.webp",
    },
    {
      quote:
        "Stealth Digital’s expertise in digital marketing helped us stand out in a crowded market. Their team is responsive, creative, and always focused on our goals.",
      name: "Kevasiya",
      designation: "Client of Stealth Digital",
      src: "/testimonials/kevasiya.webp",
    },
    {
      quote:
        "From the start, Stealth Digital understood our needs and delivered results beyond our expectations. Our website traffic and conversions have grown steadily since partnering.",
      name: "GLA University",
      designation: "Client of Stealth Digital",
      src: "/testimonials/gla-university.webp",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials}  autoplay={true}/>;
}
