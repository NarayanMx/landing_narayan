// src/components/Portfolio/Gallery/Gallery.jsx
import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";

import img1 from "../assets/Demos/bang.png";
import img2 from "../assets/Demos/laura.png";

// Demos enfáticas por sectores clave de negocio local
const projects = [
  {
    id: "clinica-consultorio-demo",
    title: "Landing para Clínica / Consultorio",
    category: "Agendado de Citas Directo",
    description:
      "Optimizada para profesionales de la salud y belleza. Facilita la selección de tratamientos, muestra horarios disponibles e integra confirmación directa por WhatsApp.",
    image: img1,
    demoUrl: "https://bang-demo-tawny.vercel.app/",
    tags: ["Agendado Rápido", "Catálogo de Servicios", "Google Maps", "Fast-Load"],
  },
  {
    id: "barberia-taller-demo",
    title: "Landing para Barbería / Servicio Técnico / Taller",
    category: "Ubicación & Cotización Exprés",
    description:
      "Pensada para negocios de alto flujo local. Muestra lista de precios, ubicación exacta con botón de cómo llegar y enlace rápido para emergencias o citas al instante.",
    image: img2,
    demoUrl: "https://laura-anunnaki-demo.vercel.app/",
    tags: ["Ubicación 1-Clic", "Precios Claras", "WhatsApp API", "React"],
  },
  {
    id: "servicio-profesional-demo",
    title: "Landing para Estudio de Tatuaje / Servicios Profesionales",
    category: "Autoridad & Presupuesto Interactivo",
    description:
      "Diseñada para resaltar el valor de tu trabajo. Permite exhibir un portafolio en alta resolución y resolver dudas frecuentes antes de contactar.",
    image: img1,
    demoUrl: "https://bang-demo-tawny.vercel.app/",
    tags: ["Portafolio HD", "Filtro de DMs", "Cotizador Rápido", "Alta Conversión"],
  },
];

function Gallery() {
  return (
    <section id="demos" className="w-full bg-[#05070B] py-16 px-4 relative scroll-mt-20 border-b border-white/10">
      {/* Resplandor ambiental de neón */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F0FF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Encabezado según la estructura aprobada (Sección 3) */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#00F0FF]/40 text-[#00F0FF] text-xs font-tech font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            <span>Portafolio Local</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Ejemplos de sitios <span className="text-[#00F0FF] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]">optimizados para conversión</span>
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Explora maquetas interactivas adaptadas a los sectores de tu ciudad. Diseñadas para cargar en milisegundos y llevar clientes a tu chat.
          </p>
        </div>

        {/* Grid de Tarjetas por Sector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 border border-white/10 hover:border-[#00F0FF]/60 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              {/* Preview de la Maqueta */}
              <div className="relative overflow-hidden aspect-video bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                <span className="absolute top-3 left-3 bg-slate-950/90 border border-[#00F0FF]/40 text-[#00F0FF] font-tech text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Información y Acción */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <h3 className="font-heading text-lg font-black text-white uppercase tracking-tight group-hover:text-[#00F0FF] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags de Tecnología */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded-md border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón Acción [Ver Demo en Vivo] */}
                <div className="w-full inline-flex items-center justify-center gap-2 bg-[#00F0FF] group-hover:bg-cyan-300 text-slate-950 font-tech font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-active:scale-95">
                  <span>Ver Demo en Vivo</span>
                  <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;