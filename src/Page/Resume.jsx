function Resume() {
  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-10">
          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-white/20 border border-white/10"></div>
            <div>
              <h2 className="font-bold text-lg">Omid Teimory</h2>
              <p className="text-white/60 text-sm">Frontend Developer</p>
            </div>
          </div>

          {/* Menu */}
          <div className="space-y-2">
            <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-left font-semibold transition">
              Experience
            </button>
            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left font-semibold hover:bg-white/10 transition">
              Education
            </button>
            <button className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-left font-semibold hover:bg-white/10 transition">
              Skills
            </button>
          </div>

          {/* Download Button */}
          <button className="w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition">
            Download Resume
          </button>
        </aside>

        {/* MAIN SECTION */}
        <main className="w-full lg:w-3/4 space-y-14">
          {/* TITLE */}
          <div>
            <h1 className="text-4xl font-extrabold">My Resume</h1>
            <p className="text-white/70 text-lg mt-2">
              A chronological overview of my career path and skills.
            </p>
          </div>

          {/* WORK EXPERIENCE */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

            {/* Job 1 */}
            <div className="space-y-4 flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"></div>

              <div>
                <h3 className="font-bold text-lg">
                  Senior Frontend Developer, Tech Solutions Inc.
                </h3>
                <p className="text-white/60 text-sm">2020 – Present</p>

                <ul className="list-disc ml-6 mt-2 space-y-1 text-white/80">
                  <li>
                    Architected and implemented a state management solution
                    using Redux Toolkit.
                  </li>
                  <li>
                    Optimized performance, achieving a 50% reduction in load
                    times.
                  </li>
                  <li>
                    Collaborated with designers to translate Figma UI into
                    production-quality components.
                  </li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="mt-10 space-y-4 flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"></div>

              <div>
                <h3 className="font-bold text-lg">
                  Frontend Developer, Web Innovators LLC
                </h3>
                <p className="text-white/60 text-sm">2018 – 2020</p>

                <ul className="list-disc ml-6 mt-2 space-y-1 text-white/80">
                  <li>
                    Built responsive web applications using Vue.js and SCSS.
                  </li>
                  <li>Improved accessibility to meet WCAG 2.1 AA standards.</li>
                  <li>
                    Integrated REST APIs to display dynamic content efficiently.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"></div>

              <div>
                <h3 className="font-bold text-lg">B.S. in Computer Science</h3>
                <p className="text-white/60 text-sm">
                  State University, 2014 – 2018
                </p>

                <p className="text-white/80 mt-2 max-w-xl">
                  Focused on web development, data structures, software
                  engineering, and algorithms.
                </p>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            {/* Languages */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              Languages & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2 mt-3 mb-6">
              {[
                "JavaScript (ES6+)",
                "React",
                "Vue.js",
                "TypeScript",
                "HTML5",
                "CSS3/SASS",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Tools */}
            <h4 className="text-white/60 font-semibold uppercase text-sm">
              Tools & Platforms
            </h4>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Git & GitHub",
                "Webpack",
                "Figma",
                "Jest",
                "Vercel",
                "Jira",
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
