// === src/Pages/Home.jsx ===
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import MyPhoto from "../assets/MyPhoto.jpg";
import { ProjectCard } from "../components/ProjectCard";
import { projects as dbProjects } from "../data/projects.jsx";

export default function Home() {
  // Adapt DB shape to the card’s expected props
  const projects = dbProjects.map((p) => ({
    ...p,
    image: p.cover, // ProjectCard expects `image`
    slug: `/projects/${p.slug}`, // build route path
  }));

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200">
        {/* Blue theme lights */}
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.25),_transparent_70%)]" />
        <div className="absolute -bottom-24 -left-24 w-[520px] h-[520px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.22),_transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl lg:text-5xl font-extrabold tracking-tight"
            >
              Frontend Developer
            </Motion.h1>
            <Motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-4 text-lg text-slate-700 max-w-xl"
            >
              I build clean, responsive UIs with{" "}
              <span className="font-semibold">React</span> &{" "}
              <span className="font-semibold">Tailwind</span>.
            </Motion.p>

            {/* Skill Tags */}
            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-4 flex flex-wrap gap-2"
            >
              {["HTML", "CSS", "React", "Tailwind"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-semibold tracking-wide bg-gradient-to-r from-pink-500 to-orange-400 text-white px-3 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="mt-8 flex gap-3"
            >
              <a
                href="https://github.com/omid2007hope"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:opacity-95"
              >
                View GitHub
              </a>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact Me
              </Link>
            </Motion.div>
          </div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.12 }}
            className="relative grid place-items-center"
          >
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden ring-8 ring-white shadow-xl">
              <img
                src={MyPhoto}
                alt="Omid Teimory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-[360px] h-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.18),_transparent_70%)]" />
          </Motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16"
      >
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <a
            href="https://github.com/omid2007hope"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            All on GitHub →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectCard key={p.slug} project={p} i={idx} />
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Omid Teimory
      </footer>
    </main>
  );
}
