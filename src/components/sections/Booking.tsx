import { useState } from "react";
import { Calendar, Clock, User, Phone, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// 12-hour time slots (no 24-hour "army time")
const timeSlots = (() => {
  const slots: string[] = [];
  for (let m = 9 * 60; m <= 19 * 60 + 30; m += 30) {
    const h24 = Math.floor(m / 60);
    const mins = m % 60;
    const period = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    slots.push(`${h12}:${mins.toString().padStart(2, "0")} ${period}`);
  }
  return slots;
})();

const services = [
  "Signature Haircut",
  "Beard Trim & Shape",
  "Shape-Up",
  "Haircut + Beard",
  "Kids Haircut",
  "Premium Experience",
];

const Booking = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || formData.name.length > 100) {
      toast({
        title: "Invalid Name",
        description: "Please enter a valid name (max 100 characters).",
        variant: "destructive",
      });
      return;
    }

    if (!formData.phone.trim() || !/^[\d\s\-+()]+$/.test(formData.phone)) {
      toast({
        title: "Invalid Phone",
        description: "Please enter a valid phone number.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.service) {
      toast({
        title: "Service Required",
        description: "Please select a service.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.date || !formData.time) {
      toast({
        title: "Date & Time Required",
        description: "Please select your preferred date and time.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Build WhatsApp message
    const message = `Hi! I'd like to book an appointment at Lyfestyle Oasis.

*Booking Details:*
• Name: ${formData.name.trim()}
• Phone: ${formData.phone.trim()}
• Service: ${formData.service}
• Date: ${formData.date}
• Time: ${formData.time}
${formData.notes.trim() ? `• Notes: ${formData.notes.trim().substring(0, 500)}` : ""}

Thank you!`;

    const phoneNumber = "18768528938";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Booking Request Sent!",
      description: "You'll be redirected to WhatsApp to confirm your appointment.",
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="booking" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Schedule Your Visit
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Book an <span className="text-gradient-gold">Appointment</span>
            </h2>
            <p className="text-muted-foreground">
              Reserve your spot and experience premium grooming. We'll confirm
              your appointment via WhatsApp.
            </p>
          </div>

          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-card border border-border rounded-2xl p-6 md:p-10 space-y-6 shadow-soft"
          >
            {/* Name */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <User className="w-4 h-4 text-primary" />
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                maxLength={100}
                className="w-full h-12 px-4 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <Phone className="w-4 h-4 text-primary" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 876-XXX-XXXX"
                className="w-full h-12 px-4 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                required
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="w-4 h-4 text-primary" />
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                required
              >
                <option value="" className="bg-charcoal">
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service} className="bg-charcoal">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 text-primary" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className="w-full h-12 px-4 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Clock className="w-4 h-4 text-primary" />
                  Preferred Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full h-12 px-4 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground"
                  required
                >
                  <option value="" className="bg-charcoal">
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-charcoal">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="w-4 h-4 text-primary" />
                Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special requests or preferences..."
                maxLength={500}
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            {/* Notice */}
            <p className="text-sm text-muted-foreground text-center">
              Appointments recommended. Walk-ins handled by staff availability.
            </p>

            {/* Submit */}
            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? "Sending..." : "Send Booking Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
