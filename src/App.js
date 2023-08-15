import '@fontsource/roboto/700.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Home from "./pages/Home";
function App() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/*" element={<Pagenotfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
