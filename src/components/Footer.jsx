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
    <footer className="w-full bg-[#05070B] border-t border-white/10 py-12 px-4 relative overflow-hidden">
      {/* Resplandor ambiental Neón */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-28 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Marca / Firma */}
        <div className="text-center md:text-left space-y-1">
          <Link
            to="/"
            onClick={handleGoHome}
            className="font-heading text-xl font-bold text-white tracking-tight group inline-block uppercase"
          >
            Narayan<span className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] inline-block transition-transform group-hover:scale-125">.</span>
          </Link>
          <p className="text-xs text-slate-400 font-tech uppercase tracking-wider">
            Desarrollo Web Estratégico para Negocios Locales
          </p>
        </div>

        {/* Enlaces Rápidos de Navegación */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-tech font-bold uppercase tracking-wider text-slate-300">
          <Link
            to="/"
            onClick={handleGoHome}
            className="hover:text-[#00F0FF] transition-colors"
          >
            Inicio
          </Link>
          <a
            href="#demos"
            className="hover:text-[#00F0FF] transition-colors"
          >
            Demos
          </a>
          <a
            href="#cotizador"
            className="hover:text-[#00F0FF] transition-colors"
          >
            Proceso
          </a>
          <a
            href="#contacto"
            className="hover:text-[#00F0FF] transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs font-mono text-slate-400 tracking-wide text-center md:text-right">
          © {currentYear}{" "}
          <span className="text-white font-medium">Narayan Bañuelos</span>
          . Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}

export default Footer;