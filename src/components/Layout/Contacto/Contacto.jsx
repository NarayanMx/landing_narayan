// src/components/Portfolio/Contacto/Contacto.jsx
import React from "react";
import { MessageSquare, ShieldCheck, Zap, Send, Sparkles } from "lucide-react";

function Contacto() {
  const phoneNumber = "523311934925";
  const defaultMessage = encodeURIComponent(
    "Hola Narayan, estuve revisando tu sitio y me gustaría cotizar una página web para mi negocio / estudio."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <section id="contacto" className="w-full bg-black py-16 px-4 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Encabezado del Componente */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2733] border border-[#52A9CC]/40 text-[#99E2FF] text-xs font-tech font-bold uppercase tracking-widest shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#52A9CC]" />
            <span>Digitaliza tu Marca</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            ¿Listo para hacer crecer tu <span className="text-[#99E2FF]">negocio o estudio</span>?
          </h2>

          <p className="text-neutral-400 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Ya sea que busques automatizar las citas de tu estudio de tatuajes o proyectar la máxima autoridad en tu marca local, diseñemos la web que tu proyecto necesita.
          </p>
        </div>

        {/* Cajas de Contacto y Propuesta de Valor */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Opción 1: WhatsApp Directo (Principal canal de conversión) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-950 border border-neutral-900 hover:border-[#52A9CC]/60 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 group transition-all duration-300 shadow-xl relative overflow-hidden"
          >
            {/* Resplandor decorativo en azul/cian */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#004966]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#52A9CC]/20 transition-all duration-500" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0A2733] border border-[#52A9CC]/40 flex items-center justify-center text-[#99E2FF]">
                <MessageSquare className="w-6 h-6" />
              </div>
              <span className="inline-block text-[10px] font-tech font-bold uppercase tracking-widest text-[#99E2FF]">
                Atención Directa
              </span>
              <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
                Cotiza por WhatsApp
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Platícame sobre tu proyecto. Te respondo directamente para proponerte la mejor estructura para tu sitio.
              </p>
            </div>

            <div className="w-full inline-flex items-center justify-center gap-2 bg-[#004966] group-hover:bg-[#52A9CC] text-white font-tech font-black py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#0A2733]/80 relative z-10">
              <span>Iniciar Conversación</span>
              <Send className="w-4 h-4" />
            </div>
          </a>

          {/* Opción 2: Garantías del Servicio para Negocios y Artistas */}
          <div className="bg-neutral-950 border border-neutral-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0A2733] border border-neutral-800 flex items-center justify-center text-[#CCF1FF]">
                <Zap className="w-6 h-6" />
              </div>
              <span className="inline-block text-[10px] font-tech font-bold uppercase tracking-widest text-neutral-500">
                Beneficios Clave
              </span>
              <h3 className="font-heading text-2xl font-black text-white uppercase tracking-tight">
                Por qué trabajar conmigo
              </h3>
              
              <ul className="space-y-3 pt-1 text-xs text-neutral-300">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#52A9CC] shrink-0 mt-0.5" />
                  <span><strong>Estructura enfocada en ventas:</strong> Diseñada para convertir prospectos de Instagram o Google en clientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#52A9CC] shrink-0 mt-0.5" />
                  <span><strong>Optimizada para móviles:</strong> Carga ultrarrápida para que no pierdas ningún usuario por lentitud.</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-black border border-neutral-900 text-center space-y-1">
              <span className="text-[10px] font-tech font-bold uppercase tracking-widest text-[#CCF1FF]">
                Tiempos de Entrega
              </span>
              <p className="text-[11px] text-neutral-400">
                Tu sitio web publicado y listo en 5 a 7 días hábiles.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contacto;