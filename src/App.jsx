import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ExampleBox from "./components/ExampleBox/ExampleBox.jsx";

function App() {

  return (
    <div class-name="page">

      <NavBar />
      <Header />
      <main>
        <Main />
        <ExampleBox />
      </main>
      <Footer />

    </div>
  );
}

export default App;