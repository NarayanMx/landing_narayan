// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Componentes estructurales globales
import NavBar from "./components/Layout/NavBar/NavBar.jsx";
import Footer from "./components/Layout/Footer/Footer.jsx";
import WhatsAppButton from "./components/Layout/WhatsApp/WhatsApp.jsx";

// Componentes del portafolio personal
import Header from "./components/Portfolio/Header/Header.jsx";
import Main from "./components/Portfolio/Main/Main.jsx";
import Gallery from "./components/Portfolio/Gallery/Gallery.jsx";
import ExampleBox from "./components/Portfolio/ExampleBox/ExampleBox.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-orange-500 selection:text-black">
      {/* Navegación global */}
      <NavBar />

      {/* Rutas de la landing */}
      <Routes>
        {/* Vista principal (Portafolio de Narayan) */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Main />
                <Gallery />
                <ExampleBox />
                <WhatsAppButton />
              </main>
            </>
          }
        />

        {/* Manejo de ruta 404 por si se ingresa una URL inexistente */}
        <Route
          path="*"
          element={
            <main className="flex-grow py-20 text-center space-y-4">
              <h1 className="text-4xl font-black text-orange-500 uppercase">
                404 - Página no encontrada
              </h1>
              <p className="text-neutral-400 text-sm">
                La ruta que buscas no existe.
              </p>
              <a
                href="/"
                className="inline-block bg-orange-600 hover:bg-orange-500 text-black font-bold px-6 py-2.5 rounded-xl text-xs uppercase"
              >
                Volver al Inicio
              </a>
            </main>
          }
        />
      </Routes>

      {/* Pie de página global */}
      <Footer />
    </div>
  );
}

export default App;