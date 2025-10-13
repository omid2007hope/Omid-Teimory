// === src/App.jsx ===
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cv from "./Pages/Cv";
import ProjectDetail from "./Pages/ProjectDetail"; // <-- NEW
import { useDarkMode } from "./theme/useDarkMode";
import { AnimatePresence, motion as Motion } from "framer-motion";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<Cv />} />
          {/* Generic project page driven by demo DB */}
          <Route path="/projects/:slug" element={<ProjectDetail />} />{" "}
          {/* <-- NEW */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { isDark, setIsDark } = useDarkMode();
  return (
    <Router>
      <Header isDark={isDark} onToggleTheme={() => setIsDark((v) => !v)} />
      <RoutesWithAnimation />
    </Router>
  );
}
