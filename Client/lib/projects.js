export const projects = [
  {
    slug: "velora-ecommerce",
    title: "Velora || E-commerce",
    description:
      "Front-end e-commerce experience showcasing modern UX, dynamic product logic, and performance-focused patterns.",
    image: "/images/Velora.jpeg",
    tech: ["HTML", "Tailwind CSS", "React", "React Router DOM", "Redux", "React Suite", "GitHub"],
    sourceUrl: "https://github.com/omid2007hope/Velora",
    liveUrl: "https://velorashop.app",
    seo: {
      keywords: [
        "Velora",
        "ecommerce frontend",
        "React e-commerce",
        "Tailwind shop UI",
        "Omid Teimory projects",
      ],
      publishedTime: "2024-10-01",
      modifiedTime: "2025-12-06",
    },
  },
  {
    slug: "omid-teimory-portfolio",
    title: "Omid Teimory || Portfolio",
    description: "Portfolio with case studies, resume, and contact workflows.",
    image: "/images/Portfolio.jpeg",
    tech: ["HTML", "Tailwind CSS", "React", "React Router DOM", "Redux", "React Suite", "GitHub"],
    sourceUrl: "https://github.com/omid2007hope/Omid-Teimory",
    liveUrl: "https://omidteimory.com",
    seo: {
      keywords: ["portfolio", "frontend portfolio", "React portfolio", "Omid Teimory portfolio"],
      publishedTime: "2024-12-01",
      modifiedTime: "2025-12-06",
    },
  },
  {
    slug: "vcce",
    title: "VCCE",
    description:
      "Virtual Cloud Coding Environment (VCCE) is a web-based IDE that allows users to code in the cloud.",
    image: "/images/VCCE.jpeg",
    tech: ["HTML", "Tailwind CSS", "React", "React Router DOM", "Redux", "React Suite", "GitHub"],
    sourceUrl: "https://github.com/omid2007hope/Real-VCCE-Version-1",
    liveUrl: "",
    seo: {
      keywords: ["cloud ide", "vcce", "web ide", "coding environment"],
      publishedTime: "2024-09-01",
      modifiedTime: "2024-12-15",
    },
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
