import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "../components/Header";
import StructuredData from "../components/StructuredData";
import { baseMetadata } from "../lib/seo";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const defaultDescription =
  "Frontend developer in Vienna crafting high-performing React and Tailwind experiences. Open to freelance and full-time work.";

export const metadata = {
  metadataBase: new URL(baseMetadata.siteUrl),
  title: {
    default: "Omid Teimory | Frontend Web Developer",
    template: "%s | Omid Teimory",
  },
  description: defaultDescription,
  keywords: [
    "Omid Teimory",
    "frontend developer",
    "React developer",
    "Tailwind CSS",
    "Vienna developer",
    "open to work",
    "web performance",
  ],
  authors: [{ name: "Omid Teimory", url: baseMetadata.siteUrl }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Omid Teimory | Frontend Web Developer",
    description: defaultDescription,
    url: "/",
    siteName: baseMetadata.siteName,
    locale: "en_US",
    type: "website",
    images: [{ url: baseMetadata.defaultImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omid Teimory | Frontend Web Developer",
    description: defaultDescription,
    images: [baseMetadata.defaultImage],
    site: baseMetadata.twitterHandle,
    creator: baseMetadata.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-[#0f172a] text-white">
        <a
          href="#main-content"
          className="sr-only focus-visible:outline-ring focus-visible:rounded focus-visible:px-4 focus-visible:py-2 focus-visible:bg-white focus-visible:text-black focus-visible:z-[999] focus-visible:absolute focus-visible:top-2 focus-visible:left-2"
        >
          Skip to main content
        </a>
        <Header />
        <StructuredData />
        <main id="main-content" className="pt-20 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
