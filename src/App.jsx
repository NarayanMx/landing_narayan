// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes estructurales globales
import NavBar from "./components/Layout/NavBar/NavBar.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import WhatsAppButton from "./components/Layout/WhatsApp/WhatsApp.jsx";
import Contacto from "./components/Layout/Contacto/Contacto.jsx";

// Componentes del portafolio personal
import Header from "./components/Portfolio/Header/Header.jsx";
import Main from "./components/Portfolio/Main/Main.jsx";
import Gallery from "./components/Portfolio/Gallery/Gallery.jsx";
import ExampleBox from "./components/Portfolio/ExampleBox/ExampleBox.jsx";

function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#D65200] selection:text-white relative overflow-x-hidden">
      {/* Navegación global fija en la parte superior */}
      <NavBar />

      {/* Rutas de la landing con pt-16 para compensar el espacio del NavBar fixed */}
      <div className="pt-16 flex-grow flex flex-col">
        <Routes>
          {/* Vista principal (Portafolio de Narayan) */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Main />

                  {/* Sección de Demos / Proyectos */}
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

          {/* Manejo de ruta 404 por si se ingresa una URL inexistente */}
          <Route
            path="*"
            element={
              <main className="flex-grow py-24 text-center space-y-4 px-4">
                <h1 className="text-4xl font-black text-[#D65200] uppercase tracking-tight">
                  404 - Página no encontrada
                </h1>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  La ruta que buscas no existe o ha sido movida.
                </p>
                <a
                  href="/"
                  className="inline-block bg-[#D65200] hover:bg-[#D60700] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#4B1000]/50"
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