// src/components/Layout/WhatsApp/WhatsApp.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  // Configuración
  const phoneNumber = "523311934925";
  const defaultMessage = encodeURIComponent(
    "Hola Narayan, vi tu página. Me interesa cotizar una landing / sistema para mi agenda de tatuajes."
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group cursor-pointer"
    >
      {/* Tooltip flotante con texto celeste #CCF1FF y fuente tech */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-xl bg-[#0A2733]/90 border border-[#52A9CC]/40 text-[#CCF1FF] font-tech text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none backdrop-blur-md">
        ¿Hablamos de tu web?
      </span>

      {/* Botón principal con gradiente azul/cian de tu marca */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#004966] via-[#52A9CC] to-[#004966] text-white shadow-2xl shadow-[#0A2733]/80 border border-[#99E2FF]/30 transition-transform duration-300 group-hover:scale-110">
        {/* Anillo de pulso ambiental usando tu tono cian */}
        <span className="absolute -inset-1 rounded-full bg-[#52A9CC]/40 animate-ping pointer-events-none" />

        {/* Ícono con trazo y relleno en cian #99E2FF */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-[#99E2FF]/20 stroke-[#99E2FF]" />
      </div>
    </a>
  );
}

export default WhatsAppButton;