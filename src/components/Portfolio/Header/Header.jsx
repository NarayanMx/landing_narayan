// src/components/Portfolio/Header/Header.jsx
import React from "react";
import { ArrowRight, Code2, Sparkles, MessageSquare } from "lucide-react";
import HeroPict from "../../../assets/Hero/Hero_pict.jpg";

function Header() {
  return (
    <header className="w-full bg-black text-white py-12 sm:py-20 px-4 relative overflow-hidden border-b border-neutral-900">
      {/* Resplandor ambiental de fondo usando la nueva paleta Azul/Cian */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#004966]/30 via-[#52A9CC]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative z-10">
        
        {/* COLUMNA IZQUIERDA: Textos y Botones */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          
          {/* Badge de disponibilidad */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2733]/80 border border-[#52A9CC]/40 text-neutral-300 text-xs font-semibold backdrop-blur-md shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#99E2FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#52A9CC]"></span>
            </span>
            <span className="text-[#CCF1FF] font-tech text-[11px] uppercase tracking-wider">
              Disponible para proyectos
            </span>
          </div>

          {/* Nombre y Especialidad */}
          <div className="space-y-2">
            <h1 className="font-heading text-4xl sm:text-6xl font-black tracking-tighter uppercase">
              Narayan<span className="text-[#99E2FF]">.</span>
            </h1>
            <p className="text-[#99E2FF] font-tech font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#52A9CC]" />
              <span>Desarrollador Web Freelance</span>
            </p>
          </div>

          {/* Propuesta de valor de alto impacto */}
          <div className="space-y-3 max-w-xl">
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight leading-snug sm:leading-tight">
              Transformo tus seguidores de Instagram en{" "}
              <span className="bg-gradient-to-r from-[#99E2FF] via-[#52A9CC] to-[#CCF1FF] bg-clip-text text-transparent">
                citas reales
              </span>
              , para que tú solo te enfoques en{" "}
              <span className="underline decoration-[#52A9CC]/60 underline-offset-4">
                crear arte
              </span>
              .
            </h2>

            <p className="text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed pt-1">
              Desarrollo sitios web ultra rápidos y estructurados para tatuadores, ilustradores y creadores. Muestra tu portafolio en máxima resolución y automatiza tus cotizaciones.
            </p>
          </div>

          {/* Botones de Acción (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto font-tech">
            <a
              href="#cotizador"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#004966] hover:bg-[#52A9CC] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#0A2733]/80 active:scale-95"
            >
              <span>Cotizar mi Sitio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#demos"
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#0A2733] hover:bg-neutral-800 text-[#CCF1FF] hover:text-white border border-[#52A9CC]/30 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-[#99E2FF]" />
              <span>Ver Demos</span>
            </a>
          </div>

        </div>

        {/* COLUMNA DERECHA: Retrato Vertical */}
        <div className="shrink-0 relative group">
          {/* Resplandor del marco con tu nuevo gradiente azul/cian */}
          <div className="absolute -inset-1.5 bg-gradient-to-b from-[#99E2FF] via-[#52A9CC] to-[#004966] rounded-3xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500" />
          
          {/* Contenedor de la foto vertical (Aspect Ratio 3:4) */}
          <div className="relative w-60 h-80 sm:w-64 sm:h-84 rounded-3xl overflow-hidden border-2 border-[#52A9CC]/80 shadow-2xl bg-neutral-900">
            <img
              src={HeroPict}
              alt="Foto de Narayan, el autor"
              className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradiente sutil en el borde inferior de la foto */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Icono flotante sobre la foto */}
          <div className="absolute -bottom-3 -right-3 bg-[#0A2733] border border-[#52A9CC] p-2.5 rounded-2xl text-[#99E2FF] shadow-2xl z-10">
            <Code2 className="w-5 h-5" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;