// src/components/Portfolio/ExampleBox/ExampleBox.jsx
import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ChevronDown, 
  RefreshCw, 
  Palette, 
  Megaphone, 
  ShieldCheck, 
  Server 
} from "lucide-react";

function ExampleBox() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [includeMaintenance, setIncludeMaintenance] = useState(true);
  const [showMaintDetails, setShowMaintDetails] = useState(false);

  const tiers = [
    {
      name: "Esencial",
      basePrice: 3500,
      maintPrice: 300,
      desc: "Landing ultra rápida con portafolio HD, filtro de preguntas frecuentes y botón directo a tu WhatsApp.",
    },
    {
      name: "Cotizador",
      basePrice: 6500,
      maintPrice: 500,
      desc: "Calculadora interactiva 'Diseña tu Presupuesto' que filtra tamaño, zona del cuerpo y color antes de agendar.",
    },
  ];

  const current = tiers[selectedTier];
  const totalPrice = current.basePrice + (includeMaintenance ? current.maintPrice : 0);

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Narayan, vi tu página. Me interesa cotizar una landing / sistema para mi agenda de tatuajes.`
    );
    return `https://wa.me/?text=${text}`;
  };

  const maintenanceFeatures = [
    {
      icon: RefreshCw,
      title: "Actualización de Portafolio HD",
      desc: "Subida y optimización constante de tus fotos de nuevos tatuajes y diseños disponibles (Flash Book) sin pérdida de calidad."
    },
    {
      icon: Megaphone,
      title: "Promociones y Guest Spots",
      desc: "Banners dinámicos para anunciar eventos, tours en otras ciudades, fechas abiertas de citas o descuentos de temporada."
    },
    {
      icon: Palette,
      title: "Ajustes de Diseño y Estética",
      desc: "Cambio de paleta de colores, tipografías o distribución visual cuando decidas renovar la identidad gráfica de tu estudio."
    },
    {
      icon: Server,
      title: "Hosting Ultra Rápido e Infraestructura",
      desc: "Alojamiento en servidores SSL de alta velocidad para garantizar carga instantánea en teléfonos móviles."
    },
    {
      icon: ShieldCheck,
      title: "Soporte Técnico y Resguardos",
      desc: "Monitoreo de seguridad, respaldos periódicos y mantenimiento preventivo del sistema de agendamiento/cotizador."
    }
  ];

  return (
    <section id="cotizador" className="w-full bg-black py-16 px-4 relative scroll-mt-20 border-b border-neutral-900">
      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
        
        {/* Luz de fondo ambiental */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#004966]/20 rounded-full blur-3xl pointer-events-none group-hover:bg-[#52A9CC]/20 transition-all duration-500" />

        {/* Encabezado de la Oferta */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#0A2733] border border-[#52A9CC]/40 flex items-center justify-center text-[#99E2FF]">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-tech font-black uppercase tracking-widest text-[#99E2FF]">
              Calculadora de Inversión Transparente
            </span>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Configura el Sitio para tu Estudio
            </h3>
          </div>
        </div>

        {/* Contenido Interactivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          
          {/* Controles */}
          <div className="space-y-5">
            {/* Selector de Nivel */}
            <div className="space-y-2">
              <label className="text-xs font-tech font-bold uppercase tracking-wider text-neutral-400 block">
                Selecciona la Estructura:
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
            <div className="space-y-2">
              <button
                onClick={() => setIncludeMaintenance(!includeMaintenance)}
                className={`w-full py-2.5 px-4 rounded-xl border text-xs font-tech font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 ${
                  includeMaintenance
                    ? "bg-[#0A2733]/70 border-[#52A9CC] text-[#CCF1FF]"
                    : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
                }`}
              >
                <span>+ Mantenimiento & Hosting (${current.maintPrice} MXN/mes)</span>
                <CheckCircle2 className={`w-4 h-4 ${includeMaintenance ? "text-[#99E2FF]" : "text-neutral-600"}`} />
              </button>

              {/* Botón desplegable para ver detalles del mantenimiento */}
              <button
                onClick={() => setShowMaintDetails(!showMaintDetails)}
                className="text-[10px] font-tech font-semibold text-[#52A9CC] hover:text-[#99E2FF] uppercase tracking-wider flex items-center gap-1 transition-colors px-1 pt-0.5"
              >
                <span>{showMaintDetails ? "Ocultar detalles del plan" : "¿Qué incluye el mantenimiento?"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showMaintDetails ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>

          {/* Resultado y CTA */}
          <div className="bg-black border border-neutral-900 rounded-2xl p-5 text-center space-y-4 relative">
            <div className="space-y-1">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-500 block">
                Inversión Estimada
              </span>
              <div className="text-3xl sm:text-4xl font-mono font-black text-white tracking-tight">
                ${totalPrice.toLocaleString("es-MX")}{" "}
                <span className="text-xs text-[#99E2FF] font-tech font-bold">MXN</span>
              </div>
              <div className="inline-flex items-center gap-1 text-[10px] text-[#CCF1FF] font-tech font-semibold uppercase tracking-wide pt-1">
                <Sparkles className="w-3 h-3 text-[#52A9CC]" />
                <span>
                  {includeMaintenance
                    ? `Desarrollo $${current.basePrice.toLocaleString()} + 1er Mes de Soporte`
                    : `Desarrollo Único $${current.basePrice.toLocaleString()}`}
                </span>
              </div>
            </div>

            {/* Botón de Acción Directo */}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#004966] hover:bg-[#52A9CC] text-white font-tech font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0A2733]/80 active:scale-95"
            >
              <span>Apartar mi Proyecto</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Desglose de Beneficios del Mantenimiento (Accordion) */}
        {showMaintDetails && (
          <div className="mt-8 pt-6 border-t border-neutral-900 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#99E2FF]" />
              <h4 className="font-tech text-xs font-black text-white uppercase tracking-wider">
                Beneficios Incluidos en tu Plan Mensual
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {maintenanceFeatures.map((feat, i) => {
                const IconComponent = feat.icon;
                return (
                  <div key={i} className="bg-neutral-900/60 border border-neutral-800/80 p-3.5 rounded-xl space-y-1">
                    <div className="flex items-center gap-2 text-[#99E2FF]">
                      <IconComponent className="w-4 h-4 text-[#52A9CC]" />
                      <span className="font-tech text-xs font-bold uppercase tracking-tight text-white">
                        {feat.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default ExampleBox;