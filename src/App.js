import Navbar from "./navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import About from "./pages/About";
import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);


  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/pricing":
      component = <Pricing />;
      break;
    case "/about":
      component = <About />;
      break;
    default:
      component = <Home />;
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">{component}</div>
    </>
  );
}


export default App;
