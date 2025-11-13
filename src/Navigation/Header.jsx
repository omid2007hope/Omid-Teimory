import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

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
        <div className="flex items-center gap-3">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="logo"
            className="w-10 h-10 rounded-md border border-white/10"
          />
          <span className="text-lg font-bold">Omid Teimory</span>
        </div>

        {/* NAVIGATION */}
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

          {/* Call to Action */}
          <Link
            to="/contact"
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
          >
            Get In Touch
          </Link>
        </nav>

        {/* MOBILE MENU (Optional – can add later) */}
      </div>
    </header>
  );
}

export default Header;
