import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Navigation/Header";

// Pages
import Home from "../Page/Home";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Projects from "../Page/Project";
import Resume from "../Page/Resume";
import ProjectShowcase from "../Component/ProjectShowcase";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="pt-20">
        {/* Padding so content doesn’t hide behind fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/:id" element={<ProjectShowcase />} />
          {/* Dynamic project page for each case study */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
