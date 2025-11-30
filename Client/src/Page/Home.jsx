import { useState } from "react";
import { Atom, Github, Linkedin, X } from "lucide-react";
import ChatBox from "./ChatBox";
import SEO from "../Component/SEO";
import Me from "../Assets/Image/Me.jpg";

function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SEO
        title="Frontend Web Developer"
        description="Frontend developer in Vienna crafting high-performing React and Tailwind experiences. Open to work on freelance and full-time roles."
        keywords="Frontend developer in Vienna, React developer portfolio, Tailwind CSS engineer, open to work, Omid Teimory"
        image="/og-image.png"
        url="https://omidteimory.com/"
      />
      <div className="w-full min-h-screen bg-[#0f172a] text-white flex flex-col lg:flex-row px-6 lg:px-20 py-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-16 lg:mb-0">
          <div className="relative">
            <div className="absolute w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 bg-blue-700 rounded-2xl -top-4 -left-4 opacity-70"></div>
            <div className="absolute w-64 sm:w-72 md:w-80 lg:w-96 h-80 sm:h-96 bg-slate-700 rounded-2xl -top-8 -left-8 opacity-50"></div>

            <img
              src={Me}
              alt="Portrait of Omid Teimory"
              className="relative w-64 sm:w-72 md:w-80 lg:w-96 rounded-2xl border border-white/10 shadow-xl"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-200 px-3 py-2 rounded-full w-fit border border-green-500/30">
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-semibold">
              Open to work: freelance or full-time frontend roles
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mt-10 md:mt-0 lg:mt-0">
            Frontend Web Developer
          </h1>

          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            HTML, CSS, JavaScript, React, React Suite, Tailwind, Bootstrap,
            React Router DOM, Redux, GitHub, Figma, Adobe Illustrator, Postman |
            Studying backend development (Node.js, databases)
          </p>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "JavaScript",
              "React",
              "React Suite",
              "Redux",
              "React Router DOM",
              "GitHub",
              "Figma",
              "Adobe Illustrator",
              "Postman",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/10 rounded-lg border border-white/10 text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <a
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              href="https://github.com/omid2007hope"
              rel="noopener noreferrer"
              target="_blank"
            >
              View GitHub
            </a>

            <a
              href="/contact"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg font-semibold transition"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex gap-10 pt-10">
            {[
              {
                name: "GitHub",
                icon: <Github />,
                url: "https://github.com/omid2007hope",
              },
              {
                name: "LinkedIn",
                icon: <Linkedin />,
                url: "https://www.linkedin.com/in/omid-teimory-48233638b/",
              },
              {
                name: "X",
                icon: <X />,
                url: "https://x.com/Omid2007hope",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center space-y-2"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition flex justify-center items-center font-bold"
                >
                  {item.icon}
                </a>
                <span className="text-sm font-semibold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 px-5 py-5 flex items-center justify-center rounded-full hover:bg-blue-600 border-2 border-blue-950 fixed right-8 bottom-8"
        >
          <Atom size={35} />
        </button>
        <ChatBox open={open} setOpen={setOpen} />
      </div>
    </>
  );
}

export default Home;
