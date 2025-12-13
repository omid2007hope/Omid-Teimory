import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import { breadcrumbJsonLd, buildMetadata, webpageJsonLd } from "../../lib/seo";

const description =
  "Resume of Omid Teimory, Frontend Developer & Designer specializing in React, Tailwind CSS, UI/UX, and modern component engineering.";

export const metadata = buildMetadata({
  title: "Resume",
  description,
  path: "/resume",
  image: "/images/Me.jpg",
  type: "article",
  keywords: ["Omid Teimory resume", "frontend developer CV", "React developer", "UI engineer"],
});

export default function ResumePage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Resume", url: "/resume" },
  ]);

  const webPageSchema = webpageJsonLd({
    name: "Resume | Omid Teimory",
    description,
    path: "/resume",
    image: "/images/Me.jpg",
    datePublished: "2024-12-01",
    dateModified: "2025-12-06",
  });

  const structuredData = [breadcrumb, webPageSchema].filter(Boolean);

  return (
    <div className="w-full min-h-screen bg-[#0f172a] text-white px-6 py-16 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-1/4 bg-white/5 border border-white/10 rounded-2xl p-6 h-fit space-y-10">
          <div className="flex items-center gap-4">
            <Image
              src="/images/Me.jpg"
              alt="Omid Teimory headshot"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full bg-white/20 border border-white/10"
              loading="lazy"
            />
            <div>
              <h2 className="font-bold text-lg">Omid Teimory</h2>
              <p className="text-white/60 text-sm">Frontend Developer</p>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                @
              </span>
              <span>omidhope2007@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                ☎
              </span>
              <span>+43 681-81580180</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                📍
              </span>
              <span>EichenStrasse 13/2, Vienna 1120, Austria</span>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Important Links</h3>
            <LinkListItem href="https://omidteimory.com" label="Portfolio" />
            <LinkListItem href="https://github.com/omid2007hope" label="GitHub" />
            <LinkListItem href="https://www.linkedin.com/in/omid-teimory-48233638b" label="LinkedIn" />
            <LinkListItem href="https://velorashop.app" label="Velora Shop" />
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Languages</h3>
            <ul className="mt-3 space-y-1 text-white/80 text-sm">
              <li>English - Fluent</li>
              <li>German - Basic</li>
              <li>Persian - Native</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide">Certificates</h3>
            <div className="mt-3 space-y-3 text-white/80 text-sm">
              <div className="flex items-start gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                  ★
                </span>
                <div>
                  <p className="font-semibold">IBM Web Development Fundamentals</p>
                  <p className="text-xs opacity-70">Issued: Oct 26, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
                  ★
                </span>
                <div>
                  <p className="font-semibold">A-SD Zertifikat A1 – German</p>
                  <p className="text-xs opacity-70">Score: 94/100</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-3/4 space-y-16">
          <header className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <Image
              src="/images/Me.jpg"
              alt="Omid Teimory"
              width={160}
              height={160}
              priority
              className="w-40 h-40 rounded-2xl object-cover shadow-lg border border-white/10"
            />

            <div>
              <h1 className="text-4xl font-extrabold">Omid Teimory</h1>
              <p className="text-white/60 text-lg mt-2">Frontend Developer &amp; UI/UX Designer</p>

              <p className="text-white/70 mt-4 max-w-2xl leading-relaxed">
                A front-end developer specializing in modern UI engineering, React, Tailwind, and clean
                component-based architecture. Focused on speed, precision, and creating smooth, intentional digital
                experiences. Currently expanding into backend development to become a full-stack engineer.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl font-bold mb-6">Experience</h2>

            <ExperienceItem
              role="Frontend Developer - Freelancer"
              period="2024 - Present - Vienna, Austria"
              bullets={[
                "Building responsive, high-performance interfaces using React & Tailwind.",
                "Designing component systems, UI/UX flows, routing, and front-end architecture.",
                "Developing dashboards, animated gradients, charts, and data-driven UI components.",
                "Created Velora - an e-commerce front-end with selectors, detail pages, cart flows, responsive grids, and dynamic UI logic.",
                "Built a professional portfolio showcasing animations, UI polish, and multi-page routing.",
                "Implemented user account systems with localStorage, editable profile data, and validation.",
              ]}
            />

            <ExperienceItem
              role="Web Development Student - Independent"
              period="2023 - Present"
              bullets={[
                "Studying full-stack development: React, Tailwind, Node.js, MongoDB, SQL.",
                "Building production-level UIs including portfolios, task managers, and finance tools.",
                "Practicing advanced UI/UX design, alignment precision, spacing, typography mastery.",
                "Learning professional component architecture and state logic patterns.",
              ]}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <ExperienceItem
              role="Full-Stack Web Development"
              period="2023 - Present - Self-Taught"
              bullets={[
                "Studying modern front-end and back-end technologies including React, Tailwind, Node.js, Express, REST APIs, MongoDB, and SQL.",
                "Focused on real-world projects, component architecture, UI/UX, and scalable front-end systems.",
              ]}
            />

            <ExperienceItem
              role="Educational Background"
              period=""
              bullets={[
                "Full-Stack Program (Online) - 2025-Present",
                "HAK Schule, Austria - 2025",
                "Infenium Schule, Austria - 2024-2025",
                "High School, Iran - 2019-2024",
                "Elementary School, Iran - 2013-2019",
              ]}
            />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Skills</h2>

            <SkillGroup
              title="Front-End Development"
              items={[
                "HTML5",
                "CSS3",
                "JavaScript (ES6+)",
                "React (Hooks, Components)",
                "React Router",
                "Tailwind CSS",
                "Responsive Design",
                "Component Architecture",
                "Lucide Icons",
                "Heroicons",
                "Headless UI",
              ]}
            />

            <SkillGroup
              title="UI / UX & Component Design"
              items={[
                "Responsive Layouts",
                "Animated Gradients",
                "Neon / Conic-Gradient Charts",
                "Blur / Glow Effects",
                "Advanced Tailwind Styling",
                "Product Cards & Grids",
                "Detail Pages",
                "Color & Size Selectors",
                "Mobile-First UI",
                "Precision Spacing",
                "High-Fidelity Components",
              ]}
            />

            <SkillGroup
              title="State & Logic"
              items={[
                "LocalStorage User Systems",
                "Profile Update Logic",
                "Form Handling & Validation",
                "Sign-In / Sign-Out Systems",
                "Dynamic Modals & Sidebars",
                "Reusable Form Components",
              ]}
            />

            <SkillGroup
              title="Data & Architecture"
              items={[
                "Product Array Structures",
                "Multi-Page Flow Systems",
                "Routing Logic",
                "Basic Node.js",
                "REST API Understanding",
                "Data-Driven UI",
              ]}
            />

            <SkillGroup
              title="Tools & Platforms"
              items={[
                "Git & GitHub",
                "Figma",
                "Vercel",
                "Netlify",
                "npm",
                "VS Code",
                "Linux",
                "Chrome DevTools",
              ]}
            />
          </section>
        </main>
      </div>
      <Footer />
      {structuredData.length ? (
        <Script id="resume-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      ) : null}
    </div>
  );
}

function ExperienceItem({ role, period, bullets }) {
  return (
    <div className="flex gap-6 mb-10">
      <div className="w-12 h-12 bg-blue-600 rounded-xl flex justify-center items-center">
        <span className="text-white font-bold text-xl">✦</span>
      </div>

      <div>
        <h3 className="font-bold text-lg">{role}</h3>
        {period ? <p className="text-white/60 text-sm">{period}</p> : null}

        <ul className="list-disc ml-6 mt-3 space-y-1 text-white/80">
          {bullets.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="mb-8">
      <h4 className="text-white/60 font-semibold uppercase text-sm">{title}</h4>
      <div className="flex flex-wrap gap-2 mt-3">
        {items.map((item) => (
          <span key={item} className="px-4 py-1 bg-white/10 border border-white/10 rounded-lg text-sm font-semibold">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function LinkListItem({ href, label }) {
  return (
    <div className="flex items-center gap-2 text-white/80 text-sm">
      <span className="inline-flex size-6 items-center justify-center rounded bg-blue-600 text-xs font-bold text-white">
        ↗
      </span>
      <a href={href} target="_blank" rel="noreferrer" className="hover:text-blue-400">
        {label}
      </a>
    </div>
  );
}
