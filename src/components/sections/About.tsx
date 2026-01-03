import { Award, Clock, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "NYC-Level Expertise",
    description: "World-class techniques and standards brought to Jamaica",
  },
  {
    icon: Clock,
    title: "Appointment-Focused",
    description: "Respect your time with organized scheduling",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Skilled professionals passionate about their craft",
  },
];

const values = [
  "Precision in every cut",
  "Client satisfaction guaranteed",
  "Clean, organized environment",
  "Professional service always",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-charcoal">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-widest">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                The <span className="text-gradient-gold">Lyfestyle</span> Experience
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Lyfestyle Oasis, we've reimagined what a barbershop experience 
                should be. Inspired by the efficiency and professionalism of NYC's 
                finest establishments, we've created an oasis where quality meets 
                organization.
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Our appointment-based system ensures you receive undivided attention 
              and exceptional service every visit. No long waits, no rush — just 
              premium grooming tailored to your schedule and style.
            </p>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {values.map((value) => (
                <div key={value} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
