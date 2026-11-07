// src/components/Layout/WhatsApp/WhatsApp.jsx
import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  // Configuración para prospectos locales
  const phoneNumber = "523311934925";
  const defaultMessage = encodeURIComponent(
    "Hola Narayan, vi tu sitio web y quiero información para estructurar una landing page para mi negocio."
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group cursor-pointer"
    >
      {/* Tooltip flotante */}
      <span className="hidden sm:inline-block px-3.5 py-1.5 rounded-xl bg-[#05070B]/90 border border-[#00F0FF]/40 text-[#00F0FF] font-tech text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] pointer-events-none backdrop-blur-md -translate-x-2 group-hover:translate-x-0">
        ¿Hablamos de tu web?
      </span>

      {/* Botón principal: Fondo negro obsidiana con borde de línea azul neón */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#05070B] text-[#00F0FF] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] border-2 border-[#00F0FF] transition-all duration-300 group-hover:scale-110">
        
        {/* Anillo de pulso sutil azul cian en el borde */}
        <span className="absolute -inset-1 rounded-full border border-[#00F0FF]/50 animate-ping pointer-events-none opacity-75" />

        {/* Ícono de WhatsApp en cian neón */}
        <MessageCircle className="w-6 h-6 relative z-10 fill-[#00F0FF]/15 stroke-[#00F0FF] stroke-[2.2]" />
      </div>
    </a>
  );
}

export default WhatsAppButton;