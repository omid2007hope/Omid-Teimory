import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Navigation/Header";
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project/:id" element={<ProjectShowcase />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
