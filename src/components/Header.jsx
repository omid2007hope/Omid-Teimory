import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import profile from "../assets/profile.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `block px-5 py-1.5 text-sm font-medium rounded-md transition ${
      location.pathname === path
        ? "bg-white text-blue-900"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 to-blue-600 border-b border-blue-950 text-white">
      {/* Top part */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-5 flex flex-col md:flex-row md:items-center gap-3">
        <div className="flex justify-center md:justify-start">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-white shadow">
            <img
              src={profile}
              alt="Omid Teimory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold">Omid Teimory</h1>
          <p className="text-xs sm:text-sm opacity-90">
            Frontend Developer — React • Tailwind • JS • HTML
          </p>
          <p className="text-xs sm:text-sm mt-1">
            <span className="font-semibold">Email:</span> omidhope2007@gmail.com
          </p>
        </div>
      </div>

      {/* Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Desktop */}
        <div className="hidden md:flex justify-center py-2">
          <div className="inline-flex rounded-md overflow-hidden ring-1 ring-white/20">
            <Link to="/" className={linkClass("/")}>
              CV
            </Link>
            <Link to="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link to="/work" className={linkClass("/work")}>
              Work
            </Link>
            <Link to="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-center py-2">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-white/10"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white mb-1" />
            <div className="w-6 h-0.5 bg-white" />
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col items-center gap-1 pb-3 text-sm font-medium">
            <Link to="/" onClick={() => setOpen(false)}>
              CV
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/work" onClick={() => setOpen(false)}>
              Work
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
