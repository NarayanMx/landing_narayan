// src/components/Layout/NavBar/NavBar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Send } from "lucide-react";

function NavBar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Mensaje predeterminado de WhatsApp para prospectos locales
  const phoneNumber = "523311934925";
  const shortMessage = encodeURIComponent(
    "Hola Narayan, vi tu sitio web y quiero información para estructurar una landing page para mi negocio."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${shortMessage}`;

  // Función para redirigir al inicio y hacer scroll suave hasta arriba
  const handleGoHome = () => {
    setIsOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#05070B]/80 backdrop-blur-md border-b border-white/10 px-4 py-3.5 transition-all">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Logotipo / Marca Principal */}
        <Link 
          to="/" 
          onClick={handleGoHome}
          className="font-heading text-lg font-black text-white tracking-tight uppercase group shrink-0"
        >
          Narayan<span className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] inline-block transition-transform group-hover:scale-125">.</span>
        </Link>

        {/* Links de Navegación - Escritorio */}
        <div className="hidden md:flex items-center gap-1 font-tech text-xs font-bold uppercase tracking-wider">
          <Link
            to="/"
            onClick={handleGoHome}
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Inicio
          </Link>

          <a
            href="#demos"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Demos
          </a>

          <a
            href="#cotizador"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Proceso
          </a>

          <a
            href="#contacto"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Contacto
          </a>

          {/* CTA directo en barra superior */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-1.5 rounded-xl bg-[#00F0FF] hover:bg-cyan-300 text-slate-950 font-tech font-black text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] hover:scale-[1.03] active:scale-95"
          >
            <span>WhatsApp</span>
            <Send className="w-3 h-3 text-slate-950 stroke-[2.5]" />
          </a>
        </div>

        {/* Botón Menú Hamburguesa - Móvil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 transition-colors"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Menú Desplegable - Móvil */}
      {isOpen && (
        <div className="md:hidden pt-4 pb-3 mt-3 border-t border-white/10 flex flex-col space-y-2 font-tech text-xs font-bold uppercase tracking-wider bg-[#05070B]/95 px-1 backdrop-blur-xl">
          <Link
            to="/"
            onClick={handleGoHome}
            className="px-3 py-2 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Inicio
          </Link>

          <a
            href="#demos"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Demos
          </a>

          <a
            href="#cotizador"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Proceso
          </a>

          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-slate-300 hover:text-[#00F0FF] hover:bg-slate-900/60 transition-all duration-200"
          >
            Contacto
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full py-2.5 rounded-xl bg-[#00F0FF] text-slate-950 font-tech font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 mt-2 shadow-[0_0_15px_rgba(0,240,255,0.4)]"
          >
            <span>Enviar WhatsApp</span>
            <Send className="w-3.5 h-3.5 stroke-[2.5]" />
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;