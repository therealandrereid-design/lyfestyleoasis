import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Scissors, Check, GraduationCap, Clock, Users, Award } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const modules = [
  {
    title: "Module 01 — Foundations & Tool Mastery",
    duration: "6 lessons · 2h 10m",
    points: [
      "Clipper anatomy, guard theory and blade-to-skin control",
      "Shear, trimmer and razor handling with correct posture",
      "Sanitation, blade alignment and daily tool maintenance",
      "Reading hair density, growth patterns and head shape",
    ],
  },
  {
    title: "Module 02 — Precision Cutting & Fading",
    duration: "9 lessons · 3h 45m",
    points: [
      "Low, mid, high, drop, burst and taper fades step by step",
      "Blending sections seamlessly with the three-guard method",
      "Clipper-over-comb and scissor-over-comb for length work",
      "Correcting uneven guidelines and rescuing a bad cut",
    ],
  },
  {
    title: "Module 03 — Beards, Line-Ups & Razor Work",
    duration: "7 lessons · 2h 30m",
    points: [
      "Sharp line-ups and edge-ups with zero over-shaving",
      "Beard sculpting, cheek lines and neckline mapping",
      "Hot towel prep and straight-razor shaves safely",
      "Skin types, irritation prevention and aftercare",
    ],
  },
  {
    title: "Module 04 — Business, Brand & Clientele",
    duration: "8 lessons · 2h 55m",
    points: [
      "Pricing your chair and building a booking system",
      "Photographing your work and growing on social media",
      "Client consultations that turn walk-ins into regulars",
      "Retail, tips, retention and scaling to your own shop",
    ],
  },
];

const monthlyPerks = [
  "Full curriculum access, updated monthly",
  "New technique breakdowns every month",
  "Private student community",
  "Cancel anytime",
];

const lifetimePerks = [
  "Everything in the monthly plan, forever",
  "1-on-1 video feedback on your cuts",
  "Downloadable guides & fade blueprints",
  "Certificate of completion",
  "All future modules included free",
];

const stats = [
  { icon: GraduationCap, value: "30+", label: "Video lessons" },
  { icon: Clock, value: "11h", label: "Of instruction" },
  { icon: Users, value: "400+", label: "Students trained" },
  { icon: Award, value: "4", label: "Core modules" },
];

const Masterclass = () => {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Barber Masterclass & Course | Lyfestyle Oasis";
    const desc =
      "Learn professional barbering with the Lyfestyle Oasis Masterclass. Fades, line-ups, razor work and business training. Monthly or lifetime access.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Enrollment request received",
        description: "We'll reach out shortly with your course access details.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass py-3">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Scissors className="w-6 h-6 text-primary transition-transform group-hover:rotate-45" />
            <span className="font-display text-xl font-semibold text-foreground">
              Lyfestyle <span className="text-gradient-gold">Oasis</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden sm:block text-sm font-medium text-cream-muted hover:text-primary transition-colors">
              Back to shop
            </Link>
            <Button variant="gold" size="sm" onClick={() => scrollTo("#enroll")}>
              Enroll Now
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-dark">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div className="container relative z-10 pt-32 pb-20">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 animate-fade-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  The Lyfestyle Oasis Barber Masterclass
                </span>
              </div>

              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Master the Craft.
                <br />
                <span className="text-gradient-gold">Own the Chair.</span>
              </h1>

              <p
                className="text-lg md:text-xl text-cream-muted max-w-2xl animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                A complete, hands-on barbering course built from years behind the
                chair. Learn flawless fades, razor-sharp line-ups and the business
                skills that turn a skill into a career.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Button variant="gold" size="lg" onClick={() => scrollTo("#pricing")}>
                  View Pricing
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollTo("#curriculum")}>
                  Explore Curriculum
                </Button>
              </div>

              <div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border max-w-2xl animate-fade-up"
                style={{ animationDelay: "0.4s" }}
              >
                {stats.map(({ icon: Icon, value, label }) => (
                  <div key={label} className="space-y-1">
                    <Icon className="w-5 h-5 text-primary" />
                    <p className="font-display text-2xl font-bold">{value}</p>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section id="curriculum" className="py-20 md:py-28 bg-charcoal">
          <div className="container">
            <div className="max-w-2xl mb-12">
              <p className="text-sm uppercase tracking-widest text-primary mb-3">
                Curriculum
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Four modules, <span className="text-gradient-gold">zero filler</span>
              </h2>
              <p className="text-cream-muted">
                Every lesson is filmed in the shop on real clients — no theory
                without a demonstration behind it.
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="item-0" className="max-w-3xl">
              {modules.map((mod, i) => (
                <AccordionItem
                  key={mod.title}
                  value={`item-${i}`}
                  className="border border-border rounded-lg bg-gradient-card mb-4 px-5"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <div>
                      <p className="font-display text-lg md:text-xl font-semibold">
                        {mod.title}
                      </p>
                      <p className="text-xs text-primary mt-1">{mod.duration}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3 pb-3">
                      {mod.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm text-cream-muted">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <p className="text-sm uppercase tracking-widest text-primary mb-3">
                Enrollment
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Choose your <span className="text-gradient-gold">access</span>
              </h2>
              <p className="text-cream-muted">
                Same full curriculum either way. Lifetime students get personal
                feedback and everything we release from here on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
              {/* Monthly */}
              <div className="rounded-2xl border border-border bg-gradient-card p-8 space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold">Monthly</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Learn at your own pace
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold">$49</span>
                  <span className="text-muted-foreground mb-2">/mo</span>
                </div>
                <ul className="space-y-3">
                  {monthlyPerks.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-cream-muted">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full" onClick={() => scrollTo("#enroll")}>
                  Start Monthly
                </Button>
              </div>

              {/* Lifetime */}
              <div className="relative rounded-2xl border border-primary/50 bg-gradient-card p-8 space-y-6 shadow-gold">
                <span className="absolute -top-3 left-8 px-3 py-1 rounded-full bg-gradient-gold text-primary-foreground text-xs font-semibold uppercase tracking-wider">
                  Best value
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">
                    Lifetime Access
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    One payment, yours forever
                  </p>
                </div>
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold text-gradient-gold">
                    $197
                  </span>
                  <span className="text-muted-foreground mb-2">one-time</span>
                </div>
                <ul className="space-y-3">
                  {lifetimePerks.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-cream-muted">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="gold" className="w-full" onClick={() => scrollTo("#enroll")}>
                  Get Lifetime Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment form */}
        <section id="enroll" className="py-20 md:py-28 bg-charcoal">
          <div className="container">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-sm uppercase tracking-widest text-primary mb-3">
                  Student Enrollment
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  Reserve your <span className="text-gradient-gold">seat</span>
                </h2>
                <p className="text-cream-muted text-sm">
                  Fill this out and we'll send your access details and next start date.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border bg-gradient-card p-6 md:p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" name="firstName" required placeholder="Andre" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" name="lastName" required placeholder="Brown" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone / WhatsApp</Label>
                  <Input id="phone" name="phone" type="tel" required placeholder="+1 876 000 0000" />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="plan">Plan</Label>
                    <Select name="plan" defaultValue="lifetime">
                      <SelectTrigger id="plan">
                        <SelectValue placeholder="Select a plan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly — $49/mo</SelectItem>
                        <SelectItem value="lifetime">Lifetime — $197</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="level">Experience level</Label>
                    <Select name="level" defaultValue="beginner">
                      <SelectTrigger id="level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Complete beginner</SelectItem>
                        <SelectItem value="intermediate">Some experience</SelectItem>
                        <SelectItem value="pro">Working barber</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What do you want to get out of the course?</Label>
                  <Textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    placeholder="Tell us about your goals..."
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Enrollment"}
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No payment taken now — we'll confirm your spot first.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Masterclass;
