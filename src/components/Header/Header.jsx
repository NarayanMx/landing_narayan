import React from "react";
import HeroPict from "../../assets/Hero/Hero_pict.png"

function Header () {

  return (
<header className="flex flex-col items-center justify-center py-12 px-4 text-center bg-slate-900 border-b border-slate-800">
  <div className="relative mb-6 group">
    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300" />
      <img
        src={HeroPict}
        alt="Foto de Narayan, el autor"
        className="relative w-32 h-32 rounded-full object-cover border-2 border-emerald-400 shadow-xl"
        />
  </div>

  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
    Narayan B
  </h1>

  <p className="text-emerald-400 font-medium text-base sm:text-lg tracking-wide uppercase">
    Programador Web & Desarrollador Full Stack
  </p>

</header>
);
}

export default Header;