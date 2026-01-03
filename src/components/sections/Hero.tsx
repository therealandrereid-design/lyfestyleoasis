import { Calendar, MessageCircle, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const phoneNumber = "18768528938";
  const whatsappMessage = encodeURIComponent(
    "Hello! I'd like to book an appointment at Lyfestyle Oasis."
  );

  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Professional Grooming by Appointment
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Lyfestyle{" "}
            <span className="text-gradient-gold">Oasis</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-cream-muted max-w-xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Experience premium barbering with NYC-level professionalism. 
            Your style, your schedule, your oasis.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="gold"
              size="lg"
              onClick={scrollToBooking}
              className="w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button variant="whatsapp" size="lg" className="w-full">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
            <a href="tel:+18768528938" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Notice */}
          <p
            className="text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            Appointments recommended. Walk-ins handled by staff availability.
          </p>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() =>
              document
                .querySelector("#services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
