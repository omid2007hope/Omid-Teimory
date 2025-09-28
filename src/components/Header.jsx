import profile from "../assets/profile.jpg";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full fixed top-0 inset-x-0 z-50 bg-gradient-to-r from-blue-900 to-blue-500 text-white border-b-2 border-blue-950 px-4 sm:px-8 lg:px-16 pt-2.5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        {/* PHOTO LEFT */}
        <div className="flex justify-start">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-3xl bg-white shadow-md overflow-hidden">
            <img
              src={profile}
              alt="Omid Teimory"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* INFO RIGHT */}
        <div className="flex-1 lg:pl-8 mt-4 lg:mt-0">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div>
              <h1 className="text-3xl font-bold">Omid Teimory</h1>
              <p className="text-base opacity-90">
                Frontend Developer | React • Tailwind • JS
              </p>
            </div>
            <div className="flex gap-4 mt-4 lg:mt-0 text-sm">
              <a
                href="https://github.com/omid2007hope"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>
              <a href="#" className="underline">
                Portfolio
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 text-sm mt-4">
            <p>
              <span className="font-semibold">Age:</span> 18
            </p>
            <p>
              <span className="font-semibold">Date of Birth:</span> 05/02/2007
            </p>
            <p>
              <span className="font-semibold">Nationality:</span> Iranian
            </p>
            <p>
              <span className="font-semibold">Location:</span> Vienna, Austria
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +43 681 815 801 80
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              omidhope2007@gmail.com
            </p>
            <p>
              <span className="font-semibold">X:</span> @Omid2007hope
            </p>
            <p>
              <span className="font-semibold">Certifications:</span> IBM
            </p>
            <p>
              <span className="font-semibold">Skills:</span> HTML • CSS • JS •
              React • Tailwind
            </p>
          </div>

          <p className="italic text-xs opacity-80 mt-3">
            “Treat the word impossible as nothing but motivation — never ever
            quit.”
          </p>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
