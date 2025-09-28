import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const tab = (path) =>
    `px-10 lg:px-20 py-2.5 font-semibold transition ${
      location.pathname === path
        ? "bg-white text-blue-900"
        : "bg-blue-400 text-blue-950 hover:bg-blue-300"
    }`;

  return (
    <nav className="w-full mt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        {/* Desktop */}
        <div className="hidden md:flex justify-center">
          <div className="inline-flex rounded-t-md overflow-hidden ring-2 ring-blue-950">
            <Link to="/" className={tab("/")}>
              CV
            </Link>
            <Link to="/about" className={tab("/about")}>
              About
            </Link>
            <Link to="/work" className={tab("/work")}>
              Work
            </Link>
            <Link to="/contact" className={tab("/contact")}>
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden justify-between items-center py-3">
          <button
            aria-label="Toggle menu"
            className="flex flex-col gap-1.5"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="w-7 h-0.5 bg-white" />
            <span className="w-7 h-0.5 bg-white" />
            <span className="w-7 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-3 pb-3 text-sm font-medium">
            <Link to="/" onClick={() => setIsOpen(false)}>
              CV
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/work" onClick={() => setIsOpen(false)}>
              Work
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
