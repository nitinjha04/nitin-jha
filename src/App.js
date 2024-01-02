import React, { createContext, useContext, useState } from "react";
import "./App.css";
import Info from "./components/Info";
import Middle from "./components/Middle";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export const ActiveSectionContext = React.createContext();

function App() {
  const [activeSection, setActiveSection] = useState("");

  return (
    <>
      <ActiveSectionContext.Provider
        value={{ activeSection, setActiveSection }}
      >
        <Navbar />
        <Middle />
        <Info />
        <Projects />
        appJs
      </ActiveSectionContext.Provider>
    </>
  );
}

export default App;
