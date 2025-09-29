import profile from "../assets/profile.jpg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64 mt-60"
    >
      <div className="rounded-2xl bg-white shadow ring-1 ring-blue-900/10 overflow-hidden">
        {/* Header stripe */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4">
          <h2 className="text-xl md:text-2xl font-bold">About Me</h2>
        </div>

        <div className="p-6 md:p-8 grid gap-8 md:grid-cols-3">
          {/* Left: Photo + Quick Facts */}
          <div className="space-y-6">
            <div className="w-40 h-40 md:w-44 md:h-44 rounded-xl overflow-hidden shadow ring-1 ring-blue-900/10">
              <img
                src={profile}
                alt="Omid Teimory"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Quick Facts
              </h3>
              <ul className="mt-2 space-y-1 text-blue-950/90 text-sm">
                <li>
                  <span className="font-semibold">Age:</span> 18
                </li>
                <li>
                  <span className="font-semibold">Location:</span> Vienna,
                  Austria
                </li>
                <li>
                  <span className="font-semibold">Languages:</span> Persian
                  (native), English (fluent), German (conversational)
                </li>
                <li>
                  <span className="font-semibold">Focus:</span> Front-end
                  (React, Tailwind, CSS, HTML)
                </li>
                <li>
                  <span className="font-semibold">Since:</span> 2025 (active)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                Social
              </h3>
              <ul className="mt-2 space-y-1 text-sm">
                <li>
                  <a
                    className="text-blue-800 underline"
                    href="https://x.com/Omid2007hope"
                    target="_blank"
                    rel="noreferrer"
                  >
                    X: @Omid2007hope
                  </a>
                </li>
                <li>
                  <a
                    className="text-blue-800 underline"
                    href="https://github.com/omid2007hope"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub: omid2007hope
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Story / Mission */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-900">Who I Am</h3>
              <p className="mt-2 text-blue-950/90 leading-relaxed">
                I’m Omid Teimory — a disciplined, purpose-driven developer in
                Vienna. I train like a soldier and think like a coder. My craft
                is building clean, responsive UIs with React and Tailwind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-900/10">
                <h4 className="font-semibold text-blue-900">Mission</h4>
                <ul className="mt-2 list-disc list-inside text-blue-950/90 text-sm space-y-1">
                  <li>Master full-stack development</li>
                  <li>Earn a tech job in Austria</li>
                  <li>Secure a U.S. role and relocate</li>
                </ul>
              </div>

              <div className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-900/10">
                <h4 className="font-semibold text-blue-900">Values</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "Discipline",
                    "Integrity",
                    "Ownership",
                    "Service",
                    "Excellence",
                  ].map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1 rounded-full text-sm bg-white ring-1 ring-blue-900/10"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <blockquote className="text-sm italic text-blue-800">
              “Treat the word impossible as nothing but motivation — never ever
              quit.”
            </blockquote>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/omid2007hope"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-blue-900 text-white px-4 py-2 font-semibold hover:bg-blue-800 transition"
              >
                View GitHub
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-white text-blue-900 px-4 py-2 font-semibold ring-1 ring-blue-900/10 hover:ring-blue-900/20 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
