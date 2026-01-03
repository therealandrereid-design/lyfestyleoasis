import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    action: "tel:+18768528938",
    buttonText: "Call Now",
    value: "+1 876-852-8938",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Message us instantly",
    action: "https://wa.me/18768528938?text=Hello!%20I%27d%20like%20to%20inquire%20about%20Lyfestyle%20Oasis.",
    buttonText: "Message Us",
    value: "+1 876-852-8938",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    action: "mailto:podiaak@gmail.com",
    buttonText: "Send Email",
    value: "podiaak@gmail.com",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground">
            Ready to experience premium grooming? Reach out through any of these
            channels and we'll get back to you promptly.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 text-center transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {method.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">
                {method.description}
              </p>
              <p className="text-foreground font-medium mb-4">{method.value}</p>
              <a
                href={method.action}
                target={method.isWhatsApp ? "_blank" : undefined}
                rel={method.isWhatsApp ? "noopener noreferrer" : undefined}
              >
                <Button
                  variant={method.isWhatsApp ? "whatsapp" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  {method.buttonText}
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="p-6 rounded-xl bg-muted/30 border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold mb-1">Location</h4>
              <p className="text-muted-foreground text-sm">
                Jamaica
              </p>
            </div>
          </div>
          <div className="p-6 rounded-xl bg-muted/30 border border-border flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-display font-semibold mb-1">Hours</h4>
              <p className="text-muted-foreground text-sm">
                By appointment · Walk-ins welcome
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
