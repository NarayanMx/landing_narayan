// src/components/Portfolio/Main/Main.jsx
import React from "react";
import { Code2, Calculator, ShieldCheck } from "lucide-react";

function Main() {
  return (
    <main className="w-full bg-black py-10 px-4 relative">
      {/* Resplandor ambiental central con el tono azul petróleo/cian */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004966]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        
        {/* SECCIÓN 1: Servicios / Propuesta de Valor */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              Lo que construyo<span className="text-[#99E2FF]">.</span>
            </h3>
            <p className="font-tech text-neutral-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Soluciones digitales enfocadas en conversión
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#99E2FF] group-hover:scale-110 transition-transform">
                <Calculator className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Cotizadores Automatizados
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Calculadoras personalizadas para dar precios estimados al instante a tus prospectos antes de agendar una cita.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#CCF1FF] group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Landing Pages High-End
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Sitios ultrarrápidos creados con React + Vite. Diseñados con estética limpia para destacar tu portafolio creativo.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#52A9CC] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Optimización Mobile-First
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Experiencias fluidas pensadas específicamente para usuarios de smartphones que llegan desde tus redes sociales.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Main;