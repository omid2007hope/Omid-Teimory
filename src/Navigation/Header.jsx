import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="fixed z-50 w-screen h-17 flex flex-row justify-between items-center bg-blue-950 text-blue-50 border-b-2 border-blue-50">
      <div className="w-1/2 h-full flex flex-row justify-start items-center">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt=""
          className="w-10 ml-5 opacity-90 rounded-md flex flex-row justify-center items-center border"
        />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 h-full flex flex-row justify-evenly md:justify-evenly lg:justify-end items-center">
        <Link
          className="w-19.5 md:w-full lg:w-40 h-full flex flex-row justify-center items-center hover:font-bold transition-normal"
          to="/"
        >
          Home
        </Link>
        <Link
          className="w-19.5 md:w-full lg:w-40 h-full flex flex-row justify-center items-center hover:font-bold transition-normal"
          to="/About"
        >
          About
        </Link>
        <Link
          className="w-19.5 md:w-full lg:w-40 h-full flex flex-row justify-center items-center hover:font-bold transition-normal"
          to="/Contact"
        >
          Contact
        </Link>
        <Link
          className="w-19.5 md:w-full lg:w-40 h-full flex flex-row justify-center items-center hover:font-bold transition-normal"
          to="/Project"
        >
          Project
        </Link>
      </div>
    </header>
  );
}

export default Header;
