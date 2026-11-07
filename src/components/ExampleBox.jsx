// src/components/Portfolio/ExampleBox/ExampleBox.jsx
import React from "react";
import { MessageSquare, Code, Rocket, CheckCircle2 } from "lucide-react";

function ExampleBox() {
  const steps = [
    {
      step: "01",
      icon: MessageSquare,
      title: "Platicamos tu necesidad",
      desc: "Ajustamos la información clave de tu negocio, tus servicios estrella y tus promociones principales.",
    },
    {
      step: "02",
      icon: Code,
      title: "Construyo tu sitio",
      desc: "Desarrollo una landing rápida, adaptada a celulares y conectada directamente a tu Google Maps y WhatsApp.",
    },
    {
      step: "03",
      icon: Rocket,
      title: "Lanzamos y recibes clientes",
      desc: "Te entrego todo listo y funcionando sin que tengas que mover una sola línea de código.",
    },
  ];

  return (
    <section id="cotizador" className="w-full bg-[#05070B] py-16 px-4 relative scroll-mt-20 border-b border-white/10">
      {/* Resplandor ambiental Neón */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* Encabezado según la estructura aprobada (Sección 4) */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-tech font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Proceso Simple</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Sin complicaciones <span className="text-[#00F0FF] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">técnicas para ti</span>
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Un flujo de trabajo transparente diseñado para poner tu negocio en línea en tiempo récord sin enredos técnicos.
          </p>
        </div>

        {/* Pasos 1-2-3 (Grid de Tarjetas Neón) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-white/10 hover:border-[#00F0FF]/60 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Número de paso estilizado en el fondo */}
                <span className="absolute -top-2 -right-2 text-6xl font-black font-tech text-white/5 group-hover:text-[#00F0FF]/10 transition-colors pointer-events-none select-none">
                  {item.step}
                </span>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-[#00F0FF]/40 flex items-center justify-center text-[#00F0FF] group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
                    <IconComponent className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-tech text-lg font-black text-white uppercase tracking-tight">
                    {item.step}. {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-tech text-[#00F0FF] uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse"></span>
                  <span>Paso {item.step} de 3</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cierre / Llamado rápido */}
        <div className="text-center pt-4">
          <a
            href="https://wa.me/523300000000?text=Hola%20Narayan,%20quiero%20iniciar%20el%20paso%201%20para%20mi%20sitio%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-[#00F0FF] hover:bg-cyan-300 text-slate-950 font-tech font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.7)] hover:scale-[1.03] active:scale-95"
          >
            <span>🟢 Iniciar mi proyecto ahora</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default ExampleBox;