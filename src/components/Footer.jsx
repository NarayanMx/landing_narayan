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
      {/* Resplandor ambiental de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#004966]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Marca / Firma */}
        <div className="text-center md:text-left space-y-1">
          <Link
            to="/"
            onClick={handleGoHome}
            className="font-heading text-xl font-bold text-white tracking-tighter group inline-block"
          >
            Narayan<span className="text-[#52A9CC] inline-block transition-transform group-hover:scale-125">.</span>
          </Link>
          <p className="text-xs text-[#004966] font-medium tracking-wide">
            Sistemas web y agendas para tatuadores
          </p>
        </div>

        {/* Enlaces Rápidos de Navegación */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium tracking-wide text-[#52A9CC]">
          <Link
            to="/"
            onClick={handleGoHome}
            className="hover:text-white transition-colors"
          >
            Inicio
          </Link>
          <a
            href="#demos"
            className="hover:text-white transition-colors"
          >
            Demos
          </a>
          <a
            href="#cotizador"
            className="hover:text-white transition-colors"
          >
            Cotizador
          </a>
          <a
            href="#contacto"
            className="hover:text-white transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-normal text-[#004966] tracking-wide text-center md:text-right">
          © {currentYear}{" "}
          <span className="text-[#52A9CC] font-medium">Narayan Bañuelos</span>
          . Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;