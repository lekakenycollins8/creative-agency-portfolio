import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Pricing from "@/components/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Skills />
      <Timeline />
      <Pricing />
      <About />
      <Contact />
    </div>
  );
};

export default Index;