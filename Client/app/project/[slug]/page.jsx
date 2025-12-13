import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import Footer from "../../../components/Footer";
import { getProjectBySlug } from "../../../lib/projects";
import { absoluteUrl, breadcrumbJsonLd, buildMetadata } from "../../../lib/seo";

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/project/${project.slug}`,
    image: project.image,
    type: "article",
    keywords: project.seo?.keywords,
  });
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();

  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/project/${project.slug}` },
  ]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    image: absoluteUrl(project.image),
    author: { "@type": "Person", name: "Omid Teimory", url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/project/${project.slug}`),
    datePublished: project.seo?.publishedTime,
    dateModified: project.seo?.modifiedTime || project.seo?.publishedTime,
  };

  const structuredData = [breadcrumb, articleSchema].filter(Boolean);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        <Link href="/projects" className="text-sm text-white/70 hover:text-white">
          ← Back to projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={project.image}
                alt={project.title}
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold">{project.title}</h1>
              <p className="text-white/70 mt-3 leading-relaxed text-lg">{project.description}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h2 className="text-lg font-semibold mb-3">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs bg-white/10 border border-white/10 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={project.liveUrl || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center px-4 py-3 rounded-xl font-semibold ${
                  project.liveUrl
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-white/5 border border-white/10 cursor-not-allowed opacity-60"
                }`}
                aria-disabled={!project.liveUrl}
                tabIndex={project.liveUrl ? undefined : -1}
              >
                {project.liveUrl ? "View Live" : "Live demo coming soon"}
              </a>

              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl font-semibold"
              >
                View Source
              </a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
      {structuredData.length ? (
        <Script id="project-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      ) : null}
    </div>
  );
}
