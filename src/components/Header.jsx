// === src/components/Header.jsx ===
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Header({ isDark, onToggleTheme }) {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const NavBtn = ({ active, children, onClick }) => (
    <button
      className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
        active ? "bg-white text-slate-900" : "text-white/90 hover:bg-white/10"
      }`}
      onClick={() => {
        setOpen(false);
        onClick?.();
      }}
    >
      {children}
    </button>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-blue-700 via-blue-700 to-indigo-700 text-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-grid place-items-center w-9 h-9 rounded-full bg-white/10 ring-2 ring-white/30 text-white text-xs font-bold shadow-sm">
            OT
          </span>
          <span className="hidden sm:block font-semibold tracking-tight">
            Omid Teimory
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavBtn active={pathname === "/"} onClick={() => navigate("/")}>
            Home
          </NavBtn>

          <NavBtn active={pathname === "/cv"} onClick={() => navigate("/cv")}>
            CV
          </NavBtn>
          <NavBtn
            active={pathname === "/about"}
            onClick={() => navigate("/about")}
          >
            About
          </NavBtn>
          <NavBtn
            active={pathname === "/contact"}
            onClick={() => navigate("/contact")}
          >
            Contact
          </NavBtn>
          <a
            href="mailto:omidhope2007@gmail.com"
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow hover:opacity-90"
          >
            Hire Me
          </a>
          {/* <button
            aria-label="Toggle theme"
            onClick={() => onToggleTheme?.()}
            className="ml-2 inline-grid place-items-center w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20"
          >
            {isDark ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button> */}
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </button>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-6 pb-4 flex flex-col gap-2">
          <NavBtn active={pathname === "/"} onClick={() => navigate("/")}>
            Home
          </NavBtn>
          <NavBtn
            active={pathname === "/about"}
            onClick={() => navigate("/about")}
          >
            About
          </NavBtn>
          <NavBtn
            active={pathname === "/contact"}
            onClick={() => navigate("/contact")}
          >
            Contact
          </NavBtn>
          <a
            href="mailto:omidhope2007@gmail.com"
            className="px-4 py-2 rounded-lg bg-white text-slate-900 text-sm font-semibold"
          >
            Hire Me
          </a>
          {/* <button
            onClick={() => onToggleTheme?.()}
            className="px-4 py-2 rounded-lg text-left text-sm bg-white/10"
          >
            {isDark ? "Light mode" : "Dark mode"}
          </button> */}
        </div>
      )}
    </header>
  );
}
