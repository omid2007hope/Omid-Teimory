import { useParams } from "react-router-dom";
import Portfolio from "../Assets/Image/Portfolio.jpeg";
import Portfolio1 from "../Assets/Image/Portfolio1.png";
import Portfolio2 from "../Assets/Image/Portfolio2.png";
import Velora from "../Assets/Image/Velora.jpeg";
import Velora1 from "../Assets/Image/Velora1.png";
import Velora2 from "../Assets/Image/Velora2.png";
import { Sparkle } from "lucide-react";

function ProjectShowcase() {
  const { id } = useParams();

  const projects = [
    {
      id: 0,
      title: "Velora || E-commerce",
      desc: "Front-End E-commerce Website Showcasing All My Skills",
      img: Velora,
      showCase: [Velora1, Velora2],
      tech: [
        "HTML",
        "Tailwind CSS",
        "React",
        "React Router Dom",
        "Redux",
        "React Suite",
        "GitHub",
      ],
      src: "https://github.com/omid2007hope/Velora",
      liveDemo: "https://velorashop.app",
    },
    {
      id: 1,
      title: "Omid Teimory || Portfolio",
      desc: "My Portfolio",
      img: Portfolio,
      showCase: [Portfolio1, Portfolio2],
      tech: [
        "HTML",
        "Tailwind CSS",
        "React",
        "React Router Dom",
        "Redux",
        "React Suite",
        "GitHub",
      ],
      src: "https://github.com/omid2007hope/Omid-Teimory",
      liveDemo: "https://omidteimory.com",
    },
  ];

  const project = projects[id];

  if (!project) {
    return <div className="text-white p-20">Project not found.</div>;
  }

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* TITLE */}
        <h1 className="text-4xl font-extrabold leading-snug">
          {project.title}
        </h1>

        <p className="text-white/70 text-lg mt-2 mb-12 max-w-3xl">
          {project.desc}
        </p>

        {/* COVER IMAGE */}
        <div className="w-full h-96 rounded-2xl overflow-hidden mb-12">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT SIDEBAR */}
          <aside className="space-y-10">
            {/* TECH STACK */}
            <div>
              <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wide">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DETAILS */}
            <div>
              <h3 className="text-white/60 text-sm font-semibold uppercase tracking-wide mb-3">
                Details
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex justify-center items-center">
                    <Sparkle />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-medium">
                      Role
                    </p>
                    <p className="font-semibold">Lead Frontend Developer</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex justify-center items-center">
                    <Sparkle />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-medium">
                      Duration
                    </p>
                    <p className="font-semibold">4 Weeks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="space-y-4 pt-4">
              <button
                onClick={() => window.open(project.liveDemo, "_blank")}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition"
              >
                View Live Site
              </button>

              <button
                onClick={() => window.open(project.src, "_blank")}
                className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-semibold transition"
              >
                View on GitHub
              </button>
            </div>
          </aside>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-2 space-y-14">
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>

              <p className="text-white/80 leading-relaxed">
                This project was built with performance, modern UI, and
                responsive design as top priority.
              </p>

              <p className="text-white/80 leading-relaxed mt-4">
                It demonstrates my capability to design, structure, and
                implement a complete frontend application using industry-level
                tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">
                Challenges & Solutions
              </h2>

              <p className="text-white/80 leading-relaxed">
                The main challenge was crafting a visually polished UI while
                maintaining lightweight performance.
              </p>

              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                {project.showCase.map((imgSrc, index) => (
                  <img
                    key={index}
                    src={imgSrc}
                    className="w-full h-64 object-cover bg-slate-700 rounded-xl"
                  />
                ))}
              </div>

              <div className="p-6 bg-blue-700/20 border border-blue-600/30 rounded-xl mt-6">
                <p className="font-semibold text-blue-300 leading-relaxed">
                  “Building clean UI components with Tailwind ensured speed and
                  full consistency across the project.”
                </p>
              </div>

              <p className="text-white/80 leading-relaxed mt-6">
                Additional improvements included modular component design and
                reusable logic.
              </p>
            </section>
          </div>
        </div>

        {/* NAVIGATION
        <div className="flex justify-between mt-20 text-white/70">
          <button className="flex items-center gap-2 hover:text-white transition">
            ← Previous Project
          </button>

          <button className="flex items-center gap-2 hover:text-white transition">
            Next Project →
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectShowcase;
