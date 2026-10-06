import React from "react";
import { MessageCircle } from "lucide-react";

function WhatsAppButton() {
  // Configuración
  const phoneNumber = "523311934925"; // Reemplaza con tu número a 10 dígitos (incluye el 52 de México)
  const defaultMessage = encodeURIComponent(
    "Hola Narayan, vi tu página web y me interesa cotizar un proyecto."
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
      {/* Tooltip flotante (se despliega en hover en escritorio) */}
      <span className="hidden sm:inline-block px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-400 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
        ¿Hablamos de tu web?
      </span>

      {/* Botón principal */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl shadow-emerald-950/60 border border-emerald-400/30 transition-transform duration-300 group-hover:scale-110">
        {/* Anillo con efecto pulso ambiental */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

        {/* Icono de Lucide React */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
      </div>
    </a>
  );
}

export default WhatsAppButton;