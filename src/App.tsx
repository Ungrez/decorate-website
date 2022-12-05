import React from "react";
import NavBar from "./components/NavBar/NavBar";
import DiscoverShop from "./components/DiscoverShop/DiscoverShop";
import About from "./components/About";
import "./scss/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  window.onload = () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
    }, 1000);
  };
  return (
    <>
      <Router>
        <NavBar />
        <DiscoverShop />
        <About />
      </Router>
    </>
  );
}

export default App;
