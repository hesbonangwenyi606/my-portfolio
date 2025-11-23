import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
  message = "",
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-bounce"
      title="Chat with me on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
