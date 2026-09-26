import React, { useState } from "react";
import { Calculator, Sparkles, CheckCircle2 } from "lucide-react";

function ExampleBox() {
  // Estado para la prueba interactiva
  const [size, setSize] = useState(10); // Tamaño en cm
  const [isColor, setIsColor] = useState(false);

  // Cálculo express en tiempo real
  const basePrice = 800; // Base mínima
  const pricePerCm = 100;
  const colorExtra = isColor ? 400 : 0;
  const totalPrice = basePrice + size * pricePerCm + colorExtra;

  return (
    <section className="w-full bg-black py-12 px-4 relative">
      <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-900 hover:border-orange-500/40 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
        
        {/* Luz de fondo sutil */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-orange-600/20 transition-all duration-500" />

        {/* Encabezado del Bloque */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-950/60 border border-orange-500/40 flex items-center justify-center text-orange-500">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
              Prueba de Lógica Express
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Calculadora Rápida de Muestra
            </h3>
          </div>
        </div>

        {/* Contenido Interactivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          
          {/* Controles */}
          <div className="space-y-5">
            {/* Control 1: Tamaño */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-neutral-400">
                <span>Tamaño Estimado:</span>
                <span className="text-amber-400 font-mono text-sm">{size} cm</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>

            {/* Control 2: Color u Sombra */}
            <button
              onClick={() => setIsColor(!isColor)}
              className={`w-full py-2.5 px-4 rounded-xl border text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 ${
                isColor
                  ? "bg-orange-950/50 border-orange-500 text-amber-400"
                  : "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white"
              }`}
            >
              <span>{isColor ? "Con Color / Sombra Completa" : "Solo Línea / Negro"}</span>
              <CheckCircle2 className={`w-4 h-4 ${isColor ? "text-orange-500" : "text-neutral-600"}`} />
            </button>
          </div>

          {/* Resultado Express */}
          <div className="bg-black border border-neutral-900 rounded-2xl p-5 text-center space-y-2 relative">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">
              Estimado de Salida
            </span>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-mono">
              ${totalPrice.toLocaleString("es-MX")}{" "}
              <span className="text-xs text-orange-500 font-sans">MXN</span>
            </div>
            <div className="inline-flex items-center gap-1 text-[10px] text-amber-400 font-semibold uppercase tracking-wide">
              <Sparkles className="w-3 h-3" />
              <span>Calculado automáticamente</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ExampleBox;