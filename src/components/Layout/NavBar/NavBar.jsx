// src/components/Layout/NavBar/NavBar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Función para redirigir al inicio y hacer scroll suave hasta arriba
  const handleGoHome = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900/80 px-4 py-3.5 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logotipo / Marca Principal */}
        <Link 
          to="/" 
          onClick={handleGoHome}
          className="font-heading text-lg font-black text-white tracking-tighter uppercase group shrink-0"
        >
          Narayan B<span className="text-[#99E2FF] inline-block transition-transform group-hover:scale-125">.</span>
        </Link>

        {/* Links de Navegación - Escritorio */}
        <div className="hidden md:flex items-center gap-1 font-tech text-xs font-medium uppercase tracking-wider">
          <Link
            to="/"
            onClick={handleGoHome}
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Inicio
          </Link>

          <a
            href="#demos"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Proyectos
          </a>

          <a
            href="#cotizador"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Cotizador
          </a>

          <a
            href="#contacto"
            className="px-3 py-1.5 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
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
          {isOpen ? <X className="w-6 h-6 text-[#99E2FF]" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Menú Desplegable - Móvil */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-2 mt-3 border-t border-neutral-900 flex flex-col space-y-1 font-tech text-xs font-medium uppercase tracking-wider bg-black/95">
          <Link
            to="/"
            onClick={handleGoHome}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Inicio
          </Link>

          <a
            href="#demos"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Proyectos
          </a>

          <a
            href="#cotizador"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Cotizador
          </a>

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-neutral-400 hover:text-[#99E2FF] hover:bg-neutral-900/60 transition-all duration-200"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;