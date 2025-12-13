import Script from "next/script";
import HomeHero from "../components/HomeHero";
import { breadcrumbJsonLd, buildMetadata, webpageJsonLd } from "../lib/seo";

const description =
  "Frontend developer in Vienna crafting high-performing React and Tailwind experiences. Open to freelance and full-time roles.";

export const metadata = buildMetadata({
  title: "Frontend Web Developer",
  description,
  path: "/",
  keywords: [
    "Frontend developer in Vienna",
    "React developer portfolio",
    "Tailwind CSS engineer",
    "open to work",
    "Omid Teimory",
  ],
});

export default function HomePage() {
  const breadcrumb = breadcrumbJsonLd([{ name: "Home", url: "/" }]);
  const webPageSchema = webpageJsonLd({
    name: "Omid Teimory | Frontend Web Developer",
    description,
    path: "/",
  });

  const structuredData = [breadcrumb, webPageSchema].filter(Boolean);

  return (
    <>
      <HomeHero />
      {structuredData.length ? (
        <Script id="home-schema" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
      ) : null}
    </>
  );
}
