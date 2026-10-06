import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Función para saber si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-black/90 backdrop-blur-md border-b border-neutral-900 sticky top-0 z-50 px-4 py-3.5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logotipo / Marca Principal */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="text-lg font-black text-white tracking-tighter uppercase group shrink-0"
        >
          Narayan B<span className="text-orange-500 inline-block transition-transform group-hover:scale-125">.</span>
        </Link>

        {/* Links de Navegación - Escritorio */}
        <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
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

          <a
            href="#proyectos"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Proyectos
          </a>

          <a
            href="#cotizador"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Cotizador
          </a>

          <a
            href="#contacto"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Contacto
          </a>
        </div>

        {/* Botón Menú Hamburguesa - Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6 text-orange-500" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Menú Desplegable - Móvil */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 mt-3 border-t border-neutral-900 flex flex-col space-y-2 text-xs font-bold uppercase tracking-wider">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-lg transition-all duration-200 ${
              isActive("/")
                ? "text-amber-400 bg-orange-950/40 border border-orange-500/30"
                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
            }`}
          >
            Inicio
          </Link>

          <a
            href="#proyectos"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Proyectos
          </a>

          <a
            href="#cotizador"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Cotizador
          </a>

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;