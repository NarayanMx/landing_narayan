// src/components/Portfolio/Gallery/Gallery.jsx
import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";

import img1 from "../../../assets/Hero/Demos/bang.png";
import img2 from "../../../assets/Hero/Demos/laura.png";

// Datos integrados con las tarifas y categorías correspondientes
const projects = [
  {
    id: "bang-bang-tattoo",
    title: "Bang Bang NYC — Studio & Author Demo",
    category: "Paquete Esencial ($3,000 MXN)",
    description:
      "Landing page de alto impacto visual inspirada en estudios de nivel internacional. Diseñada para proyectar autoridad, mostrar portafolio en alta resolución y resolver preguntas frecuentes antes de agendar.",
    image: img1,
    demoUrl: "https://bang-demo-tawny.vercel.app/",
    tags: ["React", "Tailwind CSS", "Vercel", "UX para Artistas"],
  },
  {
    id: "laura-anunnaki-demo",
    title: "Laura Anunnaki — Kawaii & Glitter Realism",
    category: "Paquete Cotizador ($6,000 MXN)",
    description:
      "Plataforma interactiva con cotizador personalizado en tiempo real ('Diseña tu Presupuesto'). Permite seleccionar complejidad, colores y zona del cuerpo para enviar la propuesta lista a WhatsApp.",
    image: img2,
    demoUrl: "https://laura-anunnaki-demo.vercel.app/",
    tags: ["React", "Cotizador Interactivo", "WhatsApp API", "UI Vibrant"],
  },
];

function Gallery() {
  return (
    <section id="demos" className="w-full bg-black py-16 px-4 relative scroll-mt-20">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Encabezado de la Galería */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2733] border border-[#52A9CC]/40 text-[#99E2FF] text-xs font-tech font-bold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#52A9CC]" />
            <span>Demos Interactivas en Vivo</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
            Explora algunos de mis <span className="text-[#99E2FF]">trabajos más recientes</span>
          </h2>
          
          <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Prueba el rendimiento, la estética y la fluidez de las plataformas desplegadas en servidores de alta velocidad.
          </p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/50 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl cursor-pointer"
            >
              {/* Contenedor de la Imagen / Preview */}
              <div className="relative overflow-hidden aspect-video bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-black/80 border border-[#52A9CC]/40 text-[#CCF1FF] font-tech text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Información y CTA */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="font-heading text-xl font-black text-white uppercase tracking-tight group-hover:text-[#99E2FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Etiquetas de Tecnología */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono bg-[#0A2733]/60 text-[#99E2FF] px-2.5 py-1 rounded-md border border-[#52A9CC]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Indicador visual de acción / Botón con tu gradiente Azul/Cian */}
                <div className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#004966] via-[#52A9CC] to-[#99E2FF] text-black font-tech font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0A2733]/60 group-active:scale-95">
                  <span>Probar Demo en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
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