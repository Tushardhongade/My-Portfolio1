import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Background from "./Components/Background";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import Home from "./Home

function App() {
  return (
    <div className="w-full h-full bg-zinc-900 text-white relative">
      <BrowserRouter>
        <Header className="sticky" />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Background />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> 404 Page */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
