import React from "react";
import OurServices from "./sections/ourServices/OurServices";
// import Footer from './sections/footer/Footer'
import About from "./sections/about/About";
// import HowWeWork from "./sections/howWeWork/HowWeWork";
import OurWork from "./sections/ourWork/OurWork";
import Clients  from "./sections/clients/Clients";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import CTA from "./sections/cta/CTA";
import Industries from "./sections/industries/Industries";
import SectionContainer from "@/components/SectionContainer";
import HeroSection from "./sections/hero/hero-section";
import ContactDock from "@/components/ContactDock";
const Home = () => {
  return (
    <section className="">
      <ContactDock />
      <SectionContainer>
        <HeroSection />
      </SectionContainer>
      <div id="about">
        <SectionContainer>
          <About />
        </SectionContainer>
      </div>
      <div id="our-services">
        <SectionContainer>
          <OurServices />
        </SectionContainer>
      </div>
      <div id="industries">
        <SectionContainer>
          <Industries />
        </SectionContainer>
      </div>
      {/* <div id="how-we-work">
        <SectionContainer>
          <HowWeWork />
        </SectionContainer>
      </div> */}
      <div id="our-work">
        <SectionContainer>
          <OurWork />
        </SectionContainer>
      </div>
      <div id="clients">
        <SectionContainer>
          <Clients />
        </SectionContainer>
      </div>
      <div id="testimonials">
        <SectionContainer>
          <Testimonials />
        </SectionContainer>
      </div>
      <div id="faqs">
        <SectionContainer>
          <FAQs />
        </SectionContainer>
      </div>
      <div id="cta">
        <SectionContainer>
          <CTA />
        </SectionContainer>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
