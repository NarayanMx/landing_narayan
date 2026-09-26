import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  // Función para saber si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-neutral-900 sticky top-0 z-50 px-4 py-3.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logotipo / Marca Principal */}
        <Link 
          to="/" 
          className="text-lg font-black text-white tracking-tighter uppercase group"
        >
          Narayan B<span className="text-orange-500 inline-block transition-transform group-hover:scale-125">.</span>
        </Link>

        {/* Links de Navegación */}
        <div className="flex items-center gap-2 sm:gap-6 text-xs font-bold uppercase tracking-wider">
          <Link
            to="/"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
              isActive("/")
                ? "text-amber-400 bg-orange-950/40 border border-orange-500/30"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            Inicio
          </Link>

          <Link
            to="/demo-tatuadores"
            className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              isActive("/demo-tatuadores")
                ? "text-amber-400 bg-orange-950/40 border border-orange-500/30"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Demo Tatuadores
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;