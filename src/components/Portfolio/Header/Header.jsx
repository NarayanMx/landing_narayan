import React from "react";
import HeroPict from "../../../assets/Hero/Hero_pict.jpg";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-16 px-4 text-center bg-black border-b border-neutral-900 relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Badge de propuesta de valor */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-orange-950/60 border border-orange-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest z-10">
        <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
        Páginas Web para Artistas
      </div>

      {/* Avatar con aura naranja tigre */}
      <div className="relative mb-8 group z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-300" />
        <img
          src={HeroPict}
          alt="Foto de Narayan, el autor"
          className="relative w-50 h-50 rounded-full object-cover border-2 border-orange-500 shadow-2xl shadow-orange-950"
        />
      </div>

      {/* Nombre principal */}
      <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase mb-2 z-10">
        Narayan B<span className="text-orange-500">.</span>
      </h1>

      {/* Subtítulo / Especialidad */}
      <p className="text-amber-400 font-bold text-sm sm:text-base tracking-widest uppercase mb-6 z-10">
        Programador Web <span className="text-orange-600 font-normal">|</span> Páginas que Aumentan tus Ventas
      </p>

      {/* Copy de enganche directo (Contenedor con ancho 100% y centrado flex absoluto) */}
      <div className="w-full max-w-2xl mx-auto space-y-4 pt-4 mt-2 z-10 flex flex-col items-center text-center">
        <h2 className="w-full text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug text-center">
          Construyo páginas web que convierten a tus seguidores de Instagram en{" "}
          <span className="text-orange-500">citas reales</span>, para que tú solo te enfoques en{" "}
          <span className="text-amber-400">crear arte</span>.
        </h2>

        <p className="w-full text-neutral-400 text-xs sm:text-sm font-normal leading-relaxed text-center pt-3">
          Hola, me llamo Narayan y me dedico al desarrollo web 100% enfocado en artistas y profesionales independientes. Creo páginas rápidas, estéticas y estructuradas para mostrar tu trabajo con máxima calidad y convertir visitas en clientes.
        </p>
      </div>
    </header>
  );
}

export default Header;