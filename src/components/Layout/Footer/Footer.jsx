// src/components/Layout/Footer/Footer.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Función para volver al inicio con scroll suave
  const handleGoHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-900 py-12 px-4 relative overflow-hidden">
      {/* Resplandor ambiental de fondo sutil con tu tono azul/cian */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#004966]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Marca / Firma */}
        <div className="text-center md:text-left space-y-1">
          <Link
            to="/"
            onClick={handleGoHome}
            className="font-heading text-xl font-black text-white tracking-tighter uppercase group inline-block"
          >
            Narayan B<span className="text-[#99E2FF] inline-block transition-transform group-hover:scale-125">.</span>
          </Link>
          <p className="text-xs text-neutral-500 font-medium tracking-wide">
            Desarrollo Web & Soluciones Digitales
          </p>
        </div>

        {/* Enlaces Rápidos de Navegación */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-tech font-bold uppercase tracking-wider text-neutral-400">
          <Link
            to="/"
            onClick={handleGoHome}
            className="hover:text-[#99E2FF] transition-colors"
          >
            Inicio
          </Link>
          <a
            href="#demos"
            className="hover:text-[#99E2FF] transition-colors"
          >
            Proyectos
          </a>
          <a
            href="#cotizador"
            className="hover:text-[#99E2FF] transition-colors"
          >
            Cotizador
          </a>
          <a
            href="#contacto"
            className="hover:text-[#99E2FF] transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-tech font-semibold text-neutral-500 tracking-wider text-center md:text-right">
          © {currentYear}{" "}
          <span className="text-[#CCF1FF] font-bold">Narayan Bañuelos</span>
          . Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;