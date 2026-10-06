// src/components/portfolio/Gallery.jsx
import React from "react";
import { ExternalLink, Sparkles } from "lucide-react";
import { projects } from "../../../data/ProjectsData";

function Gallery() {
  return (
    <section id="demos" className="w-full bg-black py-16 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Encabezado de la Galería */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-950/60 border border-orange-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explora algunos de mis trabajos más recientes.</span>
          </div>
      
          </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-950 border border-neutral-900 hover:border-orange-500/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group shadow-xl"
            >
              {/* Contenedor de la Imagen / Preview */}
              <div className="relative overflow-hidden aspect-video bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 left-4 bg-black/80 border border-orange-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Información y CTA */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-orange-500 transition-colors">
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
                      className="text-[10px] font-mono bg-neutral-900 text-neutral-400 px-2.5 py-1 rounded-md border border-neutral-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón para Abrir la Demo Externa */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-black font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-orange-600/20 active:scale-95"
                >
                  <span>Probar Demo en Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;