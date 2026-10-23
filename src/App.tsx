import * as React from "react";
import { MotionConfig } from "motion/react";
import About from "./components/About";
import AreaCarousel from "./components/AreaCarousel";
import AreaSection from "./components/AreaSection";
import ExtrasSection from "./components/ExtrasSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PreFooterSection from "./components/PreFooterSection";
import RoomsSection from "./components/RoomsSection";
import ServicesSection from "./components/ServicesSection";
import { LanguageProvider } from "./context/LanguageContext";
import { ContentProvider } from "./context/ContentContext";

function App() {
  return (
    <LanguageProvider>
      <ContentProvider>
        <MotionConfig reducedMotion="user">
          <Hero />
          <About />
          <RoomsSection />
          <ServicesSection />
          <ExtrasSection />
          <AreaSection />
          <AreaCarousel />
          <PreFooterSection />
          <Footer />
        </MotionConfig>
      </ContentProvider>
    </LanguageProvider>
  );
}

export default App;
