import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CvPage from "./components/Cvpage";
import AboutSection from "./components/About";
import WorkSection from "./components/Work";
import ContactSection from "./components/Contact";

export default function App() {
  return (
    <Router>
      {/* Header is outside Routes so it stays visible */}
      <Header />

      <Routes>
        <Route path="/" element={<CvPage />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/work" element={<WorkSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>
    </Router>
  );
}
