import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-neutral-900 py-10 px-4 text-center relative overflow-hidden">
      {/* Resplandor ambiental de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Marca / Firma */}
        <div className="text-center md:text-left">
          <span className="text-xl font-black text-white tracking-tighter uppercase">
            Narayan B<span className="text-orange-500">.</span>
          </span>
          <p className="text-xs text-neutral-500 font-medium tracking-wide mt-0.5">
            Desarrollo Web & Soluciones Digitales
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs font-semibold text-neutral-500 tracking-wider">
          © {currentYear}{" "}
          <span className="text-neutral-300 font-bold">Narayan Bañuelos</span>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;