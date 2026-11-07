// src/components/Portfolio/Main/Main.jsx
import React from "react";
import { Share2, Zap, Search } from "lucide-react";

function Main() {
  return (
    <main className="w-full bg-[#05070B] py-16 px-4 relative border-b border-white/10">
      {/* Resplandor ambiental Neón central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* SECCIÓN 2: El Dolor del Negocio Local (Problema vs. Solución) */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              ¿Por qué tu negocio necesita una <span className="text-[#00F0FF] drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">Landing Page dedicada?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Pérdida de clientes en redes */}
            <div className="bg-slate-900/60 border border-white/10 hover:border-[#00F0FF]/60 p-6 rounded-2xl transition-all duration-300 group shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-[#00F0FF]/40 flex items-center justify-center mb-6 text-[#00F0FF] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Pérdida de clientes en redes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instagram y Facebook dependen de algoritmos. Tu web es tu propiedad donde nadie compite por la atención de tu cliente.
              </p>
            </div>

            {/* Card 2: Velocidad y respuesta inmediata */}
            <div className="bg-slate-900/60 border border-white/10 hover:border-[#00F0FF]/60 p-6 rounded-2xl transition-all duration-300 group shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-[#00F0FF]/40 flex items-center justify-center mb-6 text-[#00F0FF] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Velocidad y respuesta inmediata
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sitios pesados hacen que el cliente se vaya. Una landing ligera carga en 1 segundo y pone tu botón de contacto al frente.
              </p>
            </div>

            {/* Card 3: Presencia en Google */}
            <div className="bg-slate-900/60 border border-white/10 hover:border-[#00F0FF]/60 p-6 rounded-2xl transition-all duration-300 group shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-[#00F0FF]/40 flex items-center justify-center mb-6 text-[#00F0FF] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Presencia en Google
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aparecer en búsquedas locales cuando alguien necesita tu servicio hoy mismo marca la diferencia frente a tu competencia.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Main;