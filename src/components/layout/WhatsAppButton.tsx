import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "18768528938";
  const message = encodeURIComponent(
    "Hello! I'd like to book an appointment at Lyfestyle Oasis."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-2 -right-1 w-4 h-4 bg-primary rounded-full animate-pulse" />
    </a>
  );
};

export default WhatsAppButton;
