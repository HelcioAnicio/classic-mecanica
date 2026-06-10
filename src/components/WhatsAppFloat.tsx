"use client";

import { FaWhatsapp } from "react-icons/fa";

const WA_NUMBER = "5554999999999";
const WA_MSG = "Olá! Gostaria de solicitar um orçamento.";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MSG)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#1da851] transition-colors duration-200 group"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <span className="flex items-center justify-center w-14 h-14 rounded-full">
        <FaWhatsapp className="text-3xl" aria-hidden="true" />
      </span>
      <span className="hidden sm:block pr-5 font-semibold text-sm whitespace-nowrap max-w-0 overflow-hidden opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300">
        Falar no WhatsApp
      </span>
    </a>
  );
}
