import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed z-50 w-screen h-20 flex flex-row justify-between items-center bg-blue-950 text-blue-50 border-b-2 border-blue-50">
      <div className="w-1/2 flex flex-row justify-center items-center"></div>
      <div className="w-1/2 flex flex-row justify-between items-center">
        <Link
          className="md:py-3 lg:py-3 md:px-25 lg:px-25 hover:font-bold transition-normal"
          to="/"
        >
          Home
        </Link>
        <Link
          className="md:py-3 lg:py-3 md:px-25 lg:px-25 hover:font-bold transition-normal"
          to="/About"
        >
          About
        </Link>
        <Link
          className="md:py-3 lg:py-3 md:px-25 lg:px-25 hover:font-bold transition-normal"
          to="/Contact"
        >
          Contact
        </Link>
        <Link
          className="md:py-3 lg:py-3 md:px-25 lg:px-25 hover:font-bold transition-normal"
          to="/Project"
        >
          Project
        </Link>
      </div>
    </header>
  );
}

export default Header;
