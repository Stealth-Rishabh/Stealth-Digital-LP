import React from "react";
import OurServices from "./sections/ourServices/OurServices";
// import Footer from './sections/footer/Footer'
import About from "./sections/about/About";
import HowWeWork from "./sections/howWeWork/HowWeWork";
import OurWork from "./sections/ourWork/OurWork";
import Clients  from "./sections/clients/Clients";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import CTA from "./sections/cta/CTA";
import SectionContainer from "@/components/SectionContainer";
import HeroSection from "./sections/hero/hero-section";
const Home = () => {
  return (
    <div>
      <SectionContainer>
        <HeroSection />
      </SectionContainer>
      <SectionContainer>
        <OurServices />
      </SectionContainer>
      <SectionContainer>
        <About />
      </SectionContainer>
      <SectionContainer>
        <HowWeWork />
      </SectionContainer>
      <SectionContainer>
        <OurWork />
      </SectionContainer>
      <SectionContainer>
        <Clients />
      </SectionContainer>
      <SectionContainer>
        <Testimonials />
      </SectionContainer>
      <SectionContainer>
        <FAQs />
      </SectionContainer>
      <SectionContainer>
        <CTA />
      </SectionContainer>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
