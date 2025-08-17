import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ClinicsSection from "@/components/ClinicsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
  <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ClinicsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
