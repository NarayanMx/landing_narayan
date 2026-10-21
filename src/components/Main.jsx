// src/components/Portfolio/Main/Main.jsx
import React from "react";
import { MessageSquareX, CalendarX, ImageOff } from "lucide-react";

function Main() {
  return (
    <main className="w-full bg-black py-16 px-4 relative border-b border-neutral-900">
      {/* Resplandor ambiental central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#004966]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* SECCIÓN 2: Dolor y Empatía */}
        <section className="space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              ¿Pasas más tiempo respondiendo DMs que tatuando<span className="text-[#99E2FF]">?</span>
            </h3>
            <p className="font-tech text-[#52A9CC] text-xs sm:text-sm font-bold tracking-widest uppercase">
              Instagram no fue diseñado para gestionar la agenda de un estudio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Tiempo perdido en DMs */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#99E2FF] group-hover:scale-110 transition-transform">
                <MessageSquareX className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Pérdida de Tiempo en DMs
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Decenas de mensajes al día preguntando <span className="text-white font-medium">"¿precio?"</span> sin enviar la idea, la zona en cm ni la referencia. Horas perdidas cotizando a curiosos.
              </p>
            </div>

            {/* Card 2: Cancelaciones / No-shows */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#CCF1FF] group-hover:scale-110 transition-transform">
                <CalendarX className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Cancelaciones y No-Shows
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Clientes que piden espacio en tu semana pero jamás depositan el anticipo para apartar. Fechas muertas que pudieron ser ocupadas.
              </p>
            </div>

            {/* Card 3: Algoritmo y Calidad */}
            <div className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 p-6 rounded-2xl transition-all duration-300 group shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-[#0A2733] border border-[#52A9CC]/30 flex items-center justify-center mb-6 text-[#52A9CC] group-hover:scale-110 transition-transform">
                <ImageOff className="w-6 h-6" />
              </div>
              <h4 className="font-tech text-lg font-black text-white uppercase tracking-tight mb-2">
                Portafolio Comprimido
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Instagram destruye la nitidez de tus fotos con compresión pesada y oculta tus trabajos en el feed. Sin presencia propia, no existes en búsquedas de Google.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Main;