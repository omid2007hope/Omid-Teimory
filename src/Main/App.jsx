import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Page/Home";
import Header from "../Navigation/Header";
import About from "../Page/About";
import Contact from "../Page/Contact";
import Project from "../Page/Project";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
