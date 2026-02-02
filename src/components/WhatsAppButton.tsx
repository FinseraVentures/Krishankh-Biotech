import { MessageCircle, Phone } from "lucide-react";

const ContactFloatingButtons = () => {
  const phoneNumber = "918826425252";
  const displayNumber = "Call Us Directly";

  const message = encodeURIComponent(
    "Hi! I am interested in learning more about Krishankh Biotech.",
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 group">
      {/* Call Button */}
      <a
        href={callUrl}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
        opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:translate-x-6 lg:group-hover:translate-x-0"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
        <span className="hidden lg:inline text-sm font-medium">
          {displayNumber}
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-16 bg-card text-foreground text-sm font-medium px-3 py-2 rounded-lg shadow-lg opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-border">
          Chat with us
        </span>

        {/* Pulse */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
    </div>
  );
};

export default ContactFloatingButtons;
