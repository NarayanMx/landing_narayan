// src/components/Portfolio/ExampleBox/ExampleBox.jsx
import React, { useState } from "react";
import { Calculator, Sparkles, CheckCircle2 } from "lucide-react";

function ExampleBox() {
  // Estado para el nivel de servicio (0: Esencial, 1: Cotizador)
  const [selectedTier, setSelectedTier] = useState(1); // Cotizador por defecto
  const [includeMaintenance, setIncludeMaintenance] = useState(true);

  // Datos del escalafón simplificado a 2 paquetes
  const tiers = [
    {
      name: "Esencial",
      basePrice: 3000,
      maintPrice: 300,
      desc: "Landing limpia, portafolio visual y contacto directo a WhatsApp.",
    },
    {
      name: "Cotizador",
      basePrice: 6000,
      maintPrice: 500,
      desc: "Filtrado automático, calculadora de precios e integración directa.",
    },
  ];

  const current = tiers[selectedTier];
  const totalPrice = current.basePrice + (includeMaintenance ? current.maintPrice : 0);

  return (
    <section className="w-full bg-black py-12 px-4 relative">
      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
        
        {/* Luz de fondo ambiental con tu tono azul petróleo/cian */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004966]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#52A9CC]/20 transition-all duration-500" />

        {/* Encabezado del Bloque */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0A2733] border border-[#52A9CC]/40 flex items-center justify-center text-[#99E2FF]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-tech font-black uppercase tracking-widest text-[#99E2FF]">
              Prueba de Lógica Interactiva
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Simula la Inversión de tu Sitio Web
            </h3>
          </div>
        </div>

        {/* Contenido Interactivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Controles */}
          <div className="space-y-5">
            {/* Selector de Nivel (2 Opciones) */}
            <div className="space-y-2">
              <label className="text-xs font-tech font-bold uppercase tracking-wider text-neutral-400 block">
                Selecciona el Tipo de Página:
              </label>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-neutral-900 rounded-xl border border-neutral-800">
                {tiers.map((tier, idx) => (
                  <button
                    key={tier.name}
                    onClick={() => setSelectedTier(idx)}
                    className={`py-2 text-[11px] font-tech font-bold uppercase rounded-lg transition-all duration-200 ${
                      selectedTier === idx
                        ? "bg-[#004966] text-white shadow-md shadow-[#0A2733]/80 border border-[#52A9CC]/50"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {tier.name}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-neutral-400 pt-1 leading-snug">
                {current.desc}
              </p>
            </div>

            {/* Toggle Mantenimiento Mensual */}
            <button
              onClick={() => setIncludeMaintenance(!includeMaintenance)}
              className={`w-full py-2.5 px-4 rounded-xl border text-xs font-tech font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 ${
                includeMaintenance
                  ? "bg-[#0A2733]/70 border-[#52A9CC] text-[#CCF1FF]"
                  : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              <span>+ Mantenimiento (${current.maintPrice} MXN/mes)</span>
              <CheckCircle2 className={`w-4 h-4 ${includeMaintenance ? "text-[#99E2FF]" : "text-neutral-600"}`} />
            </button>
          </div>

          {/* Resultado Express */}
          <div className="bg-black border border-neutral-900 rounded-2xl p-5 text-center space-y-2 relative">
            <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-500">
              Estimado de Inversión Inicial
            </span>
            <div className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight">
              ${totalPrice.toLocaleString("es-MX")}{" "}
              <span className="text-xs text-[#99E2FF] font-tech font-bold">MXN</span>
            </div>
            <div className="inline-flex items-center gap-1 text-[10px] text-[#CCF1FF] font-tech font-semibold uppercase tracking-wide">
              <Sparkles className="w-3 h-3 text-[#52A9CC]" />
              <span>
                {includeMaintenance
                  ? `Desarrollo $${current.basePrice.toLocaleString()} + 1er Mes Mantenimiento`
                  : `Solo Desarrollo $${current.basePrice.toLocaleString()}`}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ExampleBox;