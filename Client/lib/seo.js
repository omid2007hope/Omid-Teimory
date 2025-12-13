const siteUrl = "https://omidteimory.com";
const defaultImage = "/og-image.png";
const siteName = "Omid Teimory Portfolio";
const twitterHandle = "@Omid2007hope";

export const baseMetadata = {
  siteUrl,
  siteName,
  twitterHandle,
  defaultImage,
};

export const absoluteUrl = (path = "/") => {
  if (!path) return siteUrl;
  return new URL(path, siteUrl).toString();
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = defaultImage,
  type = "website",
  keywords = [],
}) {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type,
      url: path,
      siteName,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: twitterHandle,
      creator: twitterHandle,
    },
  };
}

export function breadcrumbJsonLd(items = []) {
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function webpageJsonLd({
  name,
  description,
  path = "/",
  image = defaultImage,
  datePublished,
  dateModified,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-US",
    image: absoluteUrl(image),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Person",
      name: "Omid Teimory",
      url: siteUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  };
}
