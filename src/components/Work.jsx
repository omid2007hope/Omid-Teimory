export default function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "Velora — E-commerce (React + Tailwind)",
      desc: "Luxury clothing shop with responsive UI, categories, cart.",
      tags: ["React", "Tailwind", "Vite"],
      image:
        "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=80&auto=format&fit=crop",
      code: "https://github.com/omid2007hope/Velora",
      live: null, // add live URL if you have one
    },
    {
      id: 2,
      title: "UI Components Pack",
      desc: "Reusable cards, navbars, modals styled for Velora.",
      tags: ["React", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1520975739176-23e58f79b8f3?w=1200&q=80&auto=format&fit=crop",
      code: "https://github.com/omid2007hope",
      live: null,
    },
    {
      id: 3,
      title: "Training Dashboard",
      desc: "Fitness & HRV tracker layout with clean charts.",
      tags: ["React", "JS"],
      image:
        "https://images.unsplash.com/photo-1518732714860-b62714ce0b18?w=1200&q=80&auto=format&fit=crop",
      code: "https://github.com/omid2007hope",
      live: null,
    },
  ];

  return (
    <section
      id="work"
      className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64 mt-60"
    >
      <div className="rounded-2xl bg-white shadow ring-1 ring-blue-900/10 overflow-hidden">
        {/* Section header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-4">
          <h2 className="text-xl md:text-2xl font-bold">My Works</h2>
        </div>

        {/* Cards */}
        <div className="p-6 md:p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group rounded-xl overflow-hidden ring-1 ring-blue-900/10 shadow-sm bg-white flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-blue-900">{p.title}</h3>
                <p className="mt-1 text-sm text-blue-950/90">{p.desc}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs bg-blue-50 ring-1 ring-blue-900/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-2 rounded-lg text-sm font-semibold bg-blue-900 text-white hover:bg-blue-800 transition"
                  >
                    Code
                  </a>
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 rounded-lg text-sm font-semibold bg-white text-blue-900 ring-1 ring-blue-900/10 hover:ring-blue-900/20 transition"
                    >
                      Live
                    </a>
                  ) : (
                    <span className="px-3 py-2 rounded-lg text-sm font-semibold bg-white text-blue-900/50 ring-1 ring-blue-900/10">
                      Live soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
