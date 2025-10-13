import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-2xl font-bold text-slate-900">
            Project not found
          </h1>
          <Link
            to="/"
            className="mt-3 inline-block text-blue-600 hover:underline"
          >
            ← Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top spacing / breadcrumb */}
      <div className="border-b border-slate-200/70 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-sm">
          <Link to="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-slate-900 font-medium">{project.title}</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Hero */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
          <img
            src={project.cover}
            alt={`${project.title} cover`}
            className="w-16 h-16 rounded-xl object-cover ring-4 ring-white shadow-sm"
          />
          <div className="mt-4 md:mt-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {project.title}
            </h1>
            <p className="mt-2 max-w-2xl text-slate-600">{project.desc}</p>

            {/* Tech tags: React + Tailwind only */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags
                .filter((t) => ["React", "Tailwind"].includes(t))
                .map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-inset ring-slate-200"
                  >
                    {t}
                  </span>
                ))}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  View Code
                </a>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
                >
                  Live site
                </a>
              ) : (
                <span className="inline-flex items-center rounded-lg border border-dashed border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-500">
                  Live soon
                </span>
              )}
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {project.images.map((src, i) => (
            <a
              key={i}
              href={src}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="Open full image"
            >
              <div className="aspect-[16/10] sm:aspect-[4/3] bg-slate-100">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
