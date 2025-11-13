function ProjectShowcase() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* TITLE */}
        <h1 className="text-4xl font-extrabold leading-snug">
          Project Showcase: A Modern Portfolio Platform
        </h1>

        <p className="text-white/70 text-lg mt-2 mb-12 max-w-3xl">
          An in-depth look at the design, development, and deployment of a
          sleek, performant portfolio website.
        </p>

        {/* COVER IMAGE */}
        <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 mb-12"></div>

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
                {[
                  "React",
                  "TypeScript",
                  "Figma",
                  "Next.js",
                  "Tailwind CSS",
                ].map((tech) => (
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
                  <div className="w-10 h-10 bg-blue-600 rounded-xl"></div>
                  <div>
                    <p className="text-white/60 text-xs uppercase font-medium">
                      Role
                    </p>
                    <p className="font-semibold">Lead Frontend Developer</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl"></div>
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
              <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
                View Live Site
              </button>

              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-semibold transition">
                View on GitHub
              </button>
            </div>
          </aside>

          {/* RIGHT MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-14">
            {/* PROJECT GOAL */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Goal</h2>

              <p className="text-white/80 leading-relaxed">
                The primary objective was to create a blazing-fast, visually
                appealing, and easily maintainable portfolio website. This
                platform needed to effectively showcase my skills and projects
                to potential employers and clients, with a strong emphasis on
                user experience and modern frontend practices.
              </p>

              <p className="text-white/80 leading-relaxed mt-4">
                Key goals included a fully responsive design, optimized
                performance (achieving high Lighthouse scores), and a clean,
                readable content structure for detailed project case studies
                like this one.
              </p>
            </section>

            {/* CHALLENGES */}
            <section>
              <h2 className="text-2xl font-bold mb-4">
                Challenges & My Solution
              </h2>

              <p className="text-white/80 leading-relaxed">
                One of the main challenges was balancing a rich user interface
                with top-tier performance. To solve this, I leveraged Next.js
                for its powerful static site generation (SSG) capabilities. This
                ensures that pages are pre-rendered and served instantly to the
                user, resulting in a near-instantaneous load time.
              </p>

              {/* Example images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="w-full h-64 bg-slate-700 rounded-xl"></div>
                <div className="w-full h-64 bg-slate-700 rounded-xl"></div>
              </div>

              <p className="text-white/80 leading-relaxed">
                Another challenge was creating a flexible and scalable styling
                system. I chose Tailwind CSS for its utility-first approach,
                which allowed rapid prototyping and consistent design language
                across the entire application.
              </p>

              {/* Highlight Box */}
              <div className="p-6 bg-blue-700/20 border border-blue-600/30 rounded-xl mt-6">
                <p className="font-semibold text-blue-300 leading-relaxed">
                  "Leveraging utility-first CSS with Tailwind allowed for an
                  incredibly efficient workflow, drastically reducing
                  development time.”
                </p>
              </div>

              <p className="text-white/80 leading-relaxed mt-6">
                To demonstrate technical proficiency, I included highlighted
                code snippets using a lightweight syntax highlighting library.
              </p>

              {/* CODE BLOCK */}
              <div className="bg-slate-800 border border-white/10 rounded-xl p-6 mt-6 font-mono text-sm text-white/90 overflow-auto">
                <p className="text-white/50 mb-3">src/components/Card.tsx</p>
                <pre>
                  {`import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;`}
                </pre>
              </div>
            </section>
          </div>
        </div>

        {/* NAVIGATION BETWEEN PROJECTS */}
        <div className="flex justify-between mt-20 text-white/70">
          <button className="flex items-center gap-2 hover:text-white transition">
            ← Previous Project
            <span className="font-semibold text-white">
              E-commerce Platform
            </span>
          </button>

          <button className="flex items-center gap-2 hover:text-white transition">
            <span className="font-semibold text-white">Data Dashboard</span>→
            Next Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcase;
