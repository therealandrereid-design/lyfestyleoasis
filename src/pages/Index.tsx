import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Booking from "@/components/sections/Booking";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Index = () => {
  useEffect(() => {
    // Update page title and meta for SEO
    document.title = "Lyfestyle Oasis | Professional Barbershop Jamaica - Book Appointment";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Lyfestyle Oasis - Premium barbershop in Jamaica offering professional grooming services by appointment. Experience NYC-level haircuts, beard trims, and shape-ups. Book now!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Lyfestyle Oasis - Premium barbershop in Jamaica offering professional grooming services by appointment. Experience NYC-level haircuts, beard trims, and shape-ups. Book now!";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Booking />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
