import Navbar from "./navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/pricing" element = {<Pricing />} />
          <Route path="/about" element = {<About />} />
        </Routes>
      </div>
    </>
  );
}


export default App;
