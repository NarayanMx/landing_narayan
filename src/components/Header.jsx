// src/components/Portfolio/Header/Header.jsx
import React from "react";
import { ArrowRight, MessageSquare } from "lucide-react";
import HeroPict from "../assets/Hero/example_pict.jfif";

function Header() {
  return (
    <header className="w-full bg-[#05070B] text-white py-12 sm:py-20 px-4 relative overflow-hidden border-b border-white/10">
      {/* Resplandor ambiental Neón */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[380px] bg-gradient-to-b from-[#00F0FF]/20 via-[#7000FF]/15 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">
        
        {/* COLUMNA IZQUIERDA: Textos y Botones */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00F0FF]/40 text-slate-200 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="text-[#00F0FF] font-tech text-[11px] uppercase tracking-wider font-bold">
              Desarrollo Web Estratégico Local
            </span>
          </div>

          {/* Titular Principal (H1) y Subtítulo */}
          <div className="space-y-4 max-w-xl">
            <h1 className="font-heading text-3xl sm:text-5xl font-black tracking-tight leading-tight uppercase text-white">
              Páginas web diseñadas para llevar clientes locales{" "}
              <span className="bg-gradient-to-r from-[#00F0FF] via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                directo a tu WhatsApp<span className="text-[#00F0FF]">.</span>
              </span>
            </h1>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
              Diseño sitios rápidos, modernos y optimizados para que las personas en tu zona encuentren tu negocio en Google y te contacten al instante.
            </p>
          </div>

          {/* Botón de Acción Principal (CTA) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto font-tech">
            <a
              href="https://wa.me/523300000000?text=Hola%20Narayan,%20vi%20tu%20sitio%20y%20quiero%20informaci%C3%B3n%20para%20mi%20negocio"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#00F0FF] hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.03] active:scale-95"
            >
              <span className="text-base">🟢</span>
              <span>Enviar mensaje por WhatsApp</span>
            </a>

            <a
              href="#demos"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-800 text-white hover:text-[#00F0FF] border border-[#00F0FF]/30 hover:border-[#00F0FF]/80 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-md"
            >
              <MessageSquare className="w-4 h-4 text-[#00F0FF]" />
              <span>Ver Demos en Vivo</span>
            </a>
          </div>

        </div>

        {/* COLUMNA DERECHA: Apoyo visual (Mockup de landing en celular) */}
        <div className="shrink-0 relative group">
          {/* Aura de neón detrás del mockup */}
          <div className="absolute -inset-2 bg-gradient-to-b from-[#00F0FF] to-[#7000FF] rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-500 animate-pulse" />
          
          <div className="relative w-80 h-80 sm:w-84 sm:h-84 rounded-3xl overflow-hidden border-2 border-[#00F0FF]/70 shadow-2xl bg-slate-950">
            <img
              src={HeroPict}
              alt="Maqueta de Landing Page Móvil para negocio local"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;