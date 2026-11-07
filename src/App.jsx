// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsApp.jsx";
import Contacto from "./components/Contacto.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Gallery from "./components/Gallery.jsx";
import ExampleBox from "./components/ExampleBox.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-[#090A0F] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      {/* Navegación global fija en la parte superior */}
      <NavBar />

      {/* Rutas de la landing con pt-16 para compensar el espacio del NavBar fixed */}
      <div className="pt-16 flex-grow flex flex-col">
        <Routes>
          {/* Vista principal (Landing para Negocios Locales - Narayan) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Main />

                  {/* Sección de Demos / Proyectos por Sector */}
                  <div id="demos" className="scroll-mt-20">
                    <Gallery />
                  </div>

                  {/* Sección del Cotizador Interactivo */}
                  <div id="cotizador" className="scroll-mt-20">
                    <ExampleBox />
                  </div>

                  <Contacto />

                  {/* Botón flotante de WhatsApp */}
                  <WhatsAppButton />
                </main>
              </>
            }
          />

          {/* Manejo de ruta 404 */}
          <Route
            path="*"
            element={
              <main className="flex-grow py-24 text-center space-y-4 px-4 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-black text-cyan-400 uppercase tracking-tight drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
                  404 - Página no encontrada
                </h1>
                <p className="text-slate-400 text-xs sm:text-sm max-w-md">
                  La ruta que buscas no existe o ha sido movida.
                </p>
                <a
                  href="/"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Volver al Inicio
                </a>
              </main>
            }
          />
        </Routes>
      </div>

      {/* Pie de página global */}
      <Footer />
    </div>
  );
}

export default App;