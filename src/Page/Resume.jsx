import { Book } from "lucide-react";
import Me from "../Assets/Image/Me.jpg";

function Resume() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-10">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <img
              src={Me}
              alt=""
              className="w-14 h-14 rounded-full bg-white/20 border border-white/10"
            />
            <div>
              <h2 className="font-bold text-lg">Omid Teimory</h2>
              <p className="text-white/60 text-sm">Front-End Developer</p>
            </div>
          </div>

          {/* Menu */}
          {/* <div className="space-y-2">
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-left font-semibold transition">
              Experience
            </button>
            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left font-semibold hover:bg-white/10 transition">
              Education
            </button>
            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left font-semibold hover:bg-white/10 transition">
              Skills
            </button>
          </div> */}

          {/* Download Button */}
          {/* <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
            Download Resume
          </button> */}
        </aside>

        {/* MAIN SECTION */}
        <main className="w-full lg:w-3/4 space-y-14">
          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-extrabold">My Resume</h1>
            <p className="text-white/70 text-lg mt-2">
              A complete overview of my technical journey, real-world projects,
              hands-on experience, and front-end development expertise.
            </p>
          </div>

          {/* EXPERIENCE */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>

            {/* Experience 1 */}
            <div className="space-y-4 flex gap-6">
              <div className="w-16 h-12 bg-blue-600 rounded-xl flex justify-center items-center">
                <Book />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Frontend Developer — Freelancer
                </h3>
                <p className="text-white/60 text-sm">
                  2024 – Present • Vienna, Austria
                </p>

                <ul className="list-disc ml-6 mt-2 space-y-1 text-white/80">
                  <li>
                    Building modern, responsive, and visually polished web
                    interfaces using React, Tailwind CSS, and JavaScript.
                  </li>
                  <li>
                    Architecting complete frontend systems including routing,
                    UI/UX flows, state management, and component reuse.
                  </li>
                  <li>
                    Developing dynamic dashboards and visual components such as
                    responsive donut charts, conic gradients, and data-driven UI
                    elements.
                  </li>
                  <li>
                    Designed and built “Velora” — a full front-end e-commerce
                    system with product arrays, detail pages, color/size
                    selectors, dynamic logic, and responsive UI.
                  </li>
                  <li>
                    Developed my full portfolio website showcasing projects,
                    animations, modern UI/UX, and multi-page structure.
                  </li>
                  <li>
                    Implemented user account systems (localStorage-based) with
                    profile editing, forms, validation, and page flows.
                  </li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="mt-10 space-y-4 flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex justify-center items-center">
                <Book />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Web Development Student — Independent
                </h3>
                <p className="text-white/60 text-sm">2023 – Present</p>

                <ul className="list-disc ml-6 mt-2 space-y-1 text-white/80">
                  <li>
                    Studying and mastering front-end and full-stack development:
                    React, Tailwind, Node.js, Express, MongoDB, SQL.
                  </li>
                  <li>
                    Built multiple production-level projects including:
                    portfolio, finance tracker UI, task manager, and e-commerce
                    interface.
                  </li>
                  <li>
                    Strong focus on clean UI/UX design, precise alignment,
                    mobile-first layouts, and component architecture.
                  </li>
                  <li>
                    Practicing industry-level coding structure, reusable
                    components, and modern state logic.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex justify-center items-center">
                <Book />
              </div>

              <div>
                <h3 className="font-bold text-lg">
                  Full-Stack Web Development
                </h3>
                <p className="text-white/60 text-sm">
                  Self-Taught • 2023 – Present
                </p>

                <p className="text-white/80 mt-2 max-w-xl">
                  Studying modern web technologies including HTML, CSS,
                  JavaScript, React, Tailwind CSS, Node.js, Express, REST APIs,
                  SQL, and MongoDB. Building real-world projects and focusing on
                  UI/UX, component systems, full-stack foundations, and
                  production-ready front-end architecture.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            {/* FRONT-END */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              Front-End Development
            </h4>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React (Hooks, Functional Components)",
                "React Router",
                "Tailwind CSS",
                "Responsive Design",
                "Component-Based Architecture",
                "Lucide Icons",
                "Heroicons",
                "Headless UI",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* UI/UX */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              UI / UX & Component Design
            </h4>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {[
                "Responsive Layouts",
                "Custom Animated Gradients",
                "Neon/Conic-Gradient Donut Charts",
                "Blur, Glow & Ring Effects",
                "Advanced Tailwind Styling",
                "Product Cards & Grids",
                "Product Detail Pages",
                "Color & Size Selectors",
                "Mobile-First UI Design",
                "Precision Spacing & Typography",
                "High-Fidelity Component Polish",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* STATE & LOGIC */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              State & Logic
            </h4>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {[
                "LocalStorage User Systems",
                "User Profile Update Logic",
                "First/Last Name Parsing",
                "Email / Phone / DOB Management",
                "Sign-In / Sign-Out Systems",
                "Address & Payment Form Handling",
                "Dynamic UI States (Sidebars, Modals)",
                "Reusable Form Components",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* DATA & ARCHITECTURE */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              Data & Architecture
            </h4>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {[
                "Product Array Design",
                "Reusable Component Architecture",
                "Multi-Page Flow Design",
                "Frontend Routing Logic",
                "Basic Node.js",
                "Understanding REST APIs",
                "Preparing for Full-Stack Development",
                "Data-Driven UI Components",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* TOOLS */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Git & GitHub",
                "Figma",
                "Vercel",
                "Netlify",
                "npm",
                "VS Code",
                "Linux",
                "Chrome DevTools",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Resume;
