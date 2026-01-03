import { Scissors, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Signature Haircut",
    description: "Precision cut tailored to your style with consultation",
    duration: "45 min",
    featured: true,
  },
  {
    name: "Beard Trim & Shape",
    description: "Expert beard grooming and sculpting",
    duration: "30 min",
    featured: false,
  },
  {
    name: "Shape-Up",
    description: "Clean edges and lineup for a fresh look",
    duration: "20 min",
    featured: false,
  },
  {
    name: "Haircut + Beard",
    description: "Complete grooming package for the modern gentleman",
    duration: "60 min",
    featured: true,
  },
  {
    name: "Kids Haircut",
    description: "Gentle, patient service for young gentlemen",
    duration: "30 min",
    featured: false,
  },
  {
    name: "Premium Experience",
    description: "Full service with hot towel, massage, and styling",
    duration: "75 min",
    featured: true,
  },
];

const Services = () => {
  const scrollToBooking = () => {
    document.querySelector("#booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground">
            Professional grooming services delivered with precision and care.
            Each service is crafted to exceed your expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`group relative p-6 rounded-xl transition-all duration-500 ${
                service.featured
                  ? "bg-gradient-card border border-primary/30 shadow-gold"
                  : "bg-muted/30 border border-border hover:border-primary/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-gold rounded-full">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-primary-foreground" />
                    <span className="text-xs font-semibold text-primary-foreground">
                      Popular
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {service.description}
              </p>

              <Button
                variant={service.featured ? "gold" : "outline"}
                size="sm"
                onClick={scrollToBooking}
                className="w-full"
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
