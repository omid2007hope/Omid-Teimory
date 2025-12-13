import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { projects } from "../../lib/projects";
import { breadcrumbJsonLd, buildMetadata, webpageJsonLd } from "../../lib/seo";
import Script from "next/script";

const description =
  "Selected React and Tailwind projects by Omid Teimory, showcasing e-commerce, portfolio design, and UI engineering. Open to work.";

export const metadata = buildMetadata({
  title: "Projects",
  description,
  path: "/projects",
  keywords: ["React projects", "Tailwind case studies", "frontend projects", "Omid Teimory projects", "open to work"],
});

export default function ProjectsPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
  ]);
  const webPageSchema = webpageJsonLd({
    name: "Projects | Omid Teimory",
    description,
    path: "/projects",
  });
  const structuredData = [breadcrumb, webPageSchema].filter(Boolean);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Selected Projects</h1>
        <p className="text-white/70 text-lg mt-2 mb-10">
          A collection of my recent work, from personal projects to client applications. I am open to work and new
          collaborations.
        </p>

        <div className="flex gap-4 mb-10">
          <button className="px-5 py-2 bg-white/5 border border-white/10 rounded-lg font-medium">All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.slug} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition">
              <Link href={`/project/${project.slug}`}>
                <div className="w-full h-48 rounded-xl overflow-hidden mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={640}
                    height={360}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <h2 className="text-xl font-bold mt-3">{project.title}</h2>
                <p className="text-white/60 mt-2 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg text-xs bg-white/10 border border-white/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>

              <div className="flex gap-4 mt-5">
                <a
                  href={project.liveUrl || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold text-center ${
                    project.liveUrl
                      ? "bg-blue-600 hover:bg-blue-700"
                      : "bg-white/5 border border-white/10 cursor-not-allowed opacity-60"
                  }`}
                  aria-disabled={!project.liveUrl}
                  tabIndex={project.liveUrl ? undefined : -1}
                >
                  {project.liveUrl ? "Live Demo" : "Live Demo (coming soon)"}
                </a>

                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-sm font-semibold text-center"
                >
                  Source
                </a>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
      {structuredData.length ? (
        <Script id="projects-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      ) : null}
    </div>
  );
}
