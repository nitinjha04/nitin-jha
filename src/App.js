import React from "react";
import "./App.css";
import Info from "./components/Info";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Middle />
      <Info />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
