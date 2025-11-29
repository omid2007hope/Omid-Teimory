import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../Assets/Image/Logo.png";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#0f172a]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center gap-4">
          <img
            src={Logo}
            alt="logo"
            className="w-14 h-14 rounded-md border border-white"
          />

          <div className="flex flex-col leading-none">
            <Link to="/resume">
              <span className="text-xl font-bold text-white">Omid Teimory</span>
            </Link>
            <Link to="/resume">
              <span className="text-sm text-white/70 hover:text-white transition">
                See my resume
              </span>
            </Link>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-semibold transition ${
                location.pathname === item.to
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-white"
          >
            Get In Touch
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-md border-t border-white/10 px-6 py-5 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={`block text-base font-semibold transition ${
                location.pathname === item.to
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center px-5 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition text-white"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
