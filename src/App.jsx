import React from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import ExampleBox from "./components/ExampleBox/ExampleBox.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-orange-500 selection:text-black">
      {/* Barra de navegación superior fija */}
      <NavBar />

      {/* Enrutamiento de la aplicación */}
      <Routes>
        {/* Ruta principal: Portafolio / Landing */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <main className="flex-grow">
                <Main />
                <ExampleBox />
              </main>
            </>
          }
        />

        {/* Ruta para la Demo interactiva de Tatuadores */}
        <Route
          path="/demo-tatuadores"
          element={
            <main className="flex-grow py-12 px-4 max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-black uppercase text-orange-500 mb-4">
                Maqueta Live: Cotizador de Tatuajes
              </h2>
              <p className="text-neutral-400">
                Próximamente: Componente QuoteCalculator.jsx
              </p>
            </main>
          }
        />
      </Routes>

      {/* Pie de página común a todas las vistas */}
      <Footer />
    </div>
  );
}

export default App;