import { useEffect } from "react";

const defaultDescription =
  "Portfolio of Omid Teimory, frontend web developer crafting performant React, Tailwind, and JavaScript experiences. Open to work and collaborations.";
const defaultKeywords =
  "Omid Teimory, frontend developer, React developer, Tailwind CSS, JavaScript engineer, web developer portfolio, open to work";
const fallbackOrigin = "https://omidteimory.com";

const resolveUrl = (value) => {
  if (!value) return fallbackOrigin;
  if (/^https?:\/\//i.test(value)) return value;
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : fallbackOrigin;
  return `${origin}${value.startsWith("/") ? value : `/${value}`}`;
};

const upsertMeta = (attr, name, content) => {
  if (!content) return;
  const selector = attr === "name" ? `meta[name="${name}"]` : `meta[property="${name}"]`;
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const upsertLink = (rel, href) => {
  if (!href) return;
  let tag = document.head.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
};

const upsertJsonLd = (data) => {
  if (!data) return;
  const scriptId = "structured-data";
  let script = document.getElementById(scriptId);
  if (!script) {
    script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
};

function SEO({
  title,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = "/og-image.png",
  type = "website",
  url,
  publishedTime,
  jsonLd,
}) {
  useEffect(() => {
    const origin =
      typeof window !== "undefined" && window.location.origin
        ? window.location.origin
        : fallbackOrigin;
    const canonical = url || `${origin}${typeof window !== "undefined" ? window.location.pathname : "/"}`;
    const resolvedImage = resolveUrl(image);
    const pageTitle = title
      ? `${title} | Omid Teimory`
      : "Omid Teimory | Frontend Web Developer";

    document.title = pageTitle;

    upsertMeta("name", "description", description);
    upsertMeta("name", "keywords", keywords);
    upsertMeta("property", "og:title", pageTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", resolvedImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", pageTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", resolvedImage);
    if (publishedTime && type === "article") {
      upsertMeta("property", "article:published_time", publishedTime);
    }

    upsertLink("canonical", canonical);

    const structuredData =
      jsonLd ||
      [
        {
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Omid Teimory",
          jobTitle: "Frontend Web Developer",
          description,
          url: canonical,
          image: resolvedImage,
          sameAs: [
            "https://github.com/omid2007hope",
            "https://www.linkedin.com/in/omid-teimory-48233638b/",
            "https://x.com/Omid2007hope",
          ],
          email: "mailto:omidhope2007@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Vienna",
            addressCountry: "Austria",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Omid Teimory Portfolio",
          url: canonical,
          potentialAction: {
            "@type": "ContactAction",
            target: "mailto:omidhope2007@gmail.com",
            name: "Contact Omid Teimory",
          },
        },
      ];

    upsertJsonLd(structuredData);
  }, [
    description,
    image,
    jsonLd ? JSON.stringify(jsonLd) : null,
    keywords,
    publishedTime,
    title,
    type,
    url,
  ]);

  return null;
}

export default SEO;

