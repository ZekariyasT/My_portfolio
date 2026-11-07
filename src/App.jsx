import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary text-white font-primary selection:bg-accent selection:text-primary">
        <Header />
        <StairTransition />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </div>
    </BrowserRouter>
  );
};

export default App;
