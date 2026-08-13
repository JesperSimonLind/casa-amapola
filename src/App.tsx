import * as React from "react";
import { MotionConfig } from "motion/react";
import About from "./components/About";
import AreaSection from "./components/AreaSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PreFooterSection from "./components/PreFooterSection";
import RoomsSection from "./components/RoomsSection";
import ServicesSection from "./components/ServicesSection";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Hero />
        <About />
        <RoomsSection />
        <AreaSection />
        <ServicesSection />
        <PreFooterSection />
        <Footer />
      </MotionConfig>
    </LanguageProvider>
  );
}

export default App;
