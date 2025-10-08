// === src/pages/Home.jsx ===
import profile from "../assets/profile.jpg";
import Image from "../assets/Image.png";
import Images from "../assets/Image-2.png";
import A from "../assets/A.png";
import { SkillChip } from "../components/SkillChip";
import { ProjectCard } from "../components/ProjectCard";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const skills = ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS", "Git"];
  const projects = [
    {
      title: "Velora — E‑commerce",
      desc: "Luxury clothing shop with responsive UI, categories, and cart.",
      tags: ["React", "Tailwind"],
      image: Images,
      code: "https://github.com/omid2007hope/Velora",
      live: null,
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing projects and polished UI components.",
      tags: ["React", "Tailwind"],
      image: Image,
      code: "https://github.com/omid2007hope/My-Portfolio",
      live: null,
    },
    {
      title: "Admin Dashboard (Coming Soon)",
      desc: "Next build — UI engineering and performance.",
      tags: ["TypeScript", "Next.js"],
      image: A,
      code: "https://github.com/omid2007hope",
      live: null,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* HERO */}
      <section className="relative border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight">
              Frontend Developer
            </h1>
            <p className="mt-4 text-lg text-slate-700 max-w-xl">
              I build clean, responsive UIs with{" "}
              <span className="font-semibold">React</span> &{" "}
              <span className="font-semibold">Tailwind</span>.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://github.com/omid2007hope"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow hover:opacity-95"
              >
                View GitHub
              </a>
              <a
                href="#contact"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-50"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="relative grid place-items-center">
            <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden ring-8 ring-white shadow-xl">
              <img
                src={profile}
                alt="Omid Teimory"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 w-[360px] h-[360px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.18),_transparent_70%)]" />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12" id="skills">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((s) => (
            <SkillChip key={s}>{s}</SkillChip>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-bold">Projects</h2>
          <a
            href="https://github.com/omid2007hope"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            All on GitHub →
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-10"
      >
        <div className="rounded-2xl bg-white border border-slate-200 p-6">
          <h3 className="text-xl font-bold mb-4">About Me</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <MapPinIcon className="w-5 h-5 text-slate-500" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Location</p>
                <p>Vienna, Austria</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <AtSymbolIcon className="w-5 h-5 text-slate-500" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Languages</p>
                <p>Persian (Native), English (C1), German (A2)</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5">
                <EnvelopeIcon className="w-5 h-5 text-slate-500" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a
                  href="mailto:omidhope2007@gmail.com"
                  className="text-blue-700 hover:underline"
                >
                  omidhope2007@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-6">
          <h3 className="text-xl font-bold mb-4">Who I Am</h3>
          <p className="text-slate-700 leading-relaxed">
            Disciplined and driven developer with a passion for building clean,
            responsive user interfaces using React and Tailwind. Focused on
            mastering full‑stack development and earning a tech role in Austria.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <p className="font-semibold mb-2">Mission</p>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                <li>Advance my tech development</li>
                <li>Secure a role in Austria</li>
                <li>Expand my portfolio</li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
              <p className="font-semibold mb-2">Values</p>
              <div className="flex flex-wrap gap-2">
                {["Discipline", "Integrity", "Growth"].map((v) => (
                  <span
                    key={v}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-sm text-slate-700"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="rounded-2xl bg-white border border-slate-200 p-6 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-slate-500" />
                <a
                  href="mailto:omidhope2007@gmail.com"
                  className="text-blue-700 hover:underline"
                >
                  omidhope2007@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-slate-500" />
                <a href="tel:+4368181580180" className="text-slate-700">
                  +43 681 815 801 80
                </a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-grid place-items-center w-10 h-10 rounded-full border border-slate-300 hover:bg-slate-50"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.865-3.059-1.868 0-2.154 1.46-2.154 2.969v5.694h-3v-10h2.881v1.367h.041c.402-.761 1.383-1.563 2.848-1.563 3.046 0 3.61 2.006 3.61 4.615v5.581z" />
                </svg>
              </a>
              <a
                href="https://github.com/omid2007hope"
                target="_blank"
                rel="noreferrer"
                className="inline-grid place-items-center w-10 h-10 rounded-full border border-slate-300 hover:bg-slate-50"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-slate-700"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 .5C5.73.5.98 5.23.98 11.48c0 4.83 3.14 8.93 7.49 10.38.55.1.75-.24.75-.53 0-.26-.01-.94-.01-1.85-3.05.66-3.69-1.47-3.69-1.47-.5-1.27-1.22-1.61-1.22-1.61-.99-.68.07-.66.07-.66 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.57 1.19 3.19.91.1-.72.38-1.19.69-1.47-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.17 1.13-2.94-.12-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.12a10.6 10.6 0 0 1 2.78-.38c.94 0 1.89.13 2.78.38 2.12-1.42 3.05-1.12 3.05-1.12.6 1.53.23 2.67.11 2.95.7.77 1.13 1.75 1.13 2.94 0 4.22-2.58 5.14-5.04 5.41.39.33.73.98.73 1.98 0 1.43-.01 2.57-.01 2.92 0 .29.2.64.76.53 4.35-1.45 7.49-5.55 7.49-10.38C23.02 5.23 18.27.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-bold mb-4">Send a message</h3>
            <form
              action="mailto:omidhope2007@gmail.com"
              method="post"
              className="grid gap-3"
            >
              <input
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Name"
              />
              <input
                type="email"
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Email"
              />
              <textarea
                rows={5}
                className="rounded-lg border border-slate-300 bg-white px-3 py-2"
                placeholder="Message"
              />
              <button className="justify-self-start rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Omid Teimory
      </footer>
    </main>
  );
}
