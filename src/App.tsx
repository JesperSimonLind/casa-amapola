import * as React from "react";
import About from "./components/About";
import AreaSection from "./components/AreaSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PreFooterSection from "./components/PreFooterSection";
import RoomsSection from "./components/RoomsSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  return (
    <>
      <Hero />
      <About />
      <RoomsSection />
      <AreaSection />
      <ServicesSection />
      <PreFooterSection />
      <Footer />
    </>
  );
}

export default App;
