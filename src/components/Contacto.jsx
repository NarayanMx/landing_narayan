// src/components/Portfolio/Contacto/Contacto.jsx
import React from "react";
import { MessageSquare, Send, Sparkles, UserCheck } from "lucide-react";
import HeroPict from "../assets/Hero/Hero_pict.jpg";

function Contacto() {
  const phoneNumber = "523311934925";
  const defaultMessage = encodeURIComponent(
    "Hola Narayan, vi tu sitio web y quiero revisar cómo podemos estructurar una landing page para mi negocio."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section id="contacto" className="w-full bg-[#05070B] py-16 px-4 relative scroll-mt-20 border-b border-white/10">
      {/* Resplandor ambiental de neón */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        
        {/* SECCIÓN 5: Quién Soy (Generador de Confianza) */}
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-center gap-8">
          {/* Fotografía accesible */}
          <div className="shrink-0 relative">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#00F0FF]/60 shadow-[0_0_20px_rgba(0,240,255,0.2)] bg-slate-950">
              <img
                src={HeroPict}
                alt="Narayan Bañuelos - Desarrollador Web Independiente"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-slate-950 border border-[#00F0FF]/60 p-1.5 rounded-xl text-[#00F0FF]">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>

          {/* Texto Biográfico */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-[#00F0FF]/30 text-[#00F0FF] text-[10px] font-tech font-bold uppercase tracking-wider">
              <span>Desarrollador Web Local</span>
            </div>
            
            <h2 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Hola, soy Narayan Bañuelos
            </h2>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Desarrollador web independiente enfocado en impulsar pequeños y medianos negocios. Ayudo a comercios y profesionales locales a estructurar su presencia digital con herramientas modernas, limpias y orientadas a resultados reales.
            </p>
          </div>
        </div>

        {/* SECCIÓN 6: Cierre Final (Footer CTA) */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-tech font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Actualiza tu Presencia</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            ¿Listo para actualizar la <span className="text-[#00F0FF] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">presencia de tu negocio?</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Escríbeme por WhatsApp y revisamos sin compromiso cómo podemos estructurar tu sitio.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#00F0FF] hover:bg-cyan-300 text-slate-950 font-tech font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.03] active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 stroke-[2.5]" />
              <span>🟢 Hablar por WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contacto;