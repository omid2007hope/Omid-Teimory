// === src/App.jsx ===
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Optional: keep legacy routes -> anchor scroll still works on one-page */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
