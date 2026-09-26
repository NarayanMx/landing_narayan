import React from "react";
import HeroPict from "../../assets/Hero/Hero_pict.jpg";

function Header() {
  return (
    <header className="flex flex-col items-center justify-center py-16 px-4 text-center bg-black border-b border-neutral-900 relative overflow-hidden">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Avatar con aura naranja tigre */}
      <div className="relative mb-8 group z-10">
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-400 rounded-full blur-md opacity-60 group-hover:opacity-100 transition duration-300" />
        <img
          src={HeroPict}
          alt="Foto de Narayan, el autor"
          className="relative w-77 h-77 rounded-full object-cover border-2 border-orange-500 shadow-2xl shadow-orange-950"
        />
      </div>

      {/* Nombre principal: Tipografía gigante, limpia y sin serifa */}
      <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white uppercase mb-3 z-10">
        Narayan B<span className="text-orange-500">.</span>
      </h1>

      {/* Subtítulo con alto contraste */}
      <p className="text-amber-400 font-bold text-sm sm:text-base tracking-widest uppercase z-10">
        Programador Web <span className="text-orange-600 font-normal">|</span> Desarrollador Full Stack
      </p>
    </header>
  );
}

export default Header;