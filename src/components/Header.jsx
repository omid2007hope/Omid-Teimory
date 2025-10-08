// === src/components/Header.jsx ===
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const NavItem = ({ to, children }) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
        pathname === to
          ? "bg-white text-slate-900"
          : "text-white/90 hover:bg-white/10"
      }`}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/60 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-sm">
            OT
          </span>
          <span className="hidden sm:block font-semibold tracking-tight text-slate-900 dark:text-white">
            Omid Teimory
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="#projects">Projects</NavItem>
          <NavItem to="#about">About</NavItem>
          <NavItem to="#contact">Contact</NavItem>
          <a
            href="mailto:omidhope2007@gmail.com"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-semibold shadow hover:opacity-95"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/20"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-slate-900 dark:bg-white mb-1" />
          <div className="w-6 h-0.5 bg-slate-900 dark:bg-white mb-1" />
          <div className="w-6 h-0.5 bg-slate-900 dark:bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6 pb-4 flex flex-col gap-2">
          <NavItem to="/">Home</NavItem>
          <a
            href="#projects"
            className="px-4 py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            href="#about"
            className="px-4 py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
          <a
            href="mailto:omidhope2007@gmail.com"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
