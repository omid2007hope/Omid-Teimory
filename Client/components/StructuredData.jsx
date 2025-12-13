import Script from "next/script";
import { absoluteUrl, baseMetadata } from "../lib/seo";

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Omid Teimory",
    jobTitle: "Frontend Web Developer",
    description:
      "Frontend developer in Vienna crafting performant React and Tailwind interfaces.",
    url: baseMetadata.siteUrl,
    image: absoluteUrl(baseMetadata.defaultImage),
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
    name: baseMetadata.siteName,
    url: baseMetadata.siteUrl,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseMetadata.siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
];

export default function StructuredData() {
  return (
    <Script id="global-schema" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(schema)}
    </Script>
  );
}
