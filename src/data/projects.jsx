// === src/data/projects.jsx ===
import veloraCover from "../assets/Velora.png";
import velora1 from "../assets/Velora1.png";
import velora2 from "../assets/Velora2.png";
import velora3 from "../assets/Velora3.png";

import portfolioCover from "../assets/Portfolio.png";
import portfolio1 from "../assets/Portfolio1.png";
import portfolio2 from "../assets/Portfolio2.png";
import portfolio3 from "../assets/Portfolio3.png";

import financeCover from "../assets/AvailableSoon.png"; // temporary placeholder

export const projects = [
  {
    slug: "velora",
    title: "Velora — E-commerce",
    desc: "Luxury clothing shop with responsive UI, categories, and cart.",
    tags: ["React", "Tailwind"],
    cover: veloraCover,
    images: [velora1, velora2, velora3],
    code: "https://github.com/omid2007hope/Velora",
    live: null,
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    desc: "Personal portfolio showcasing projects and polished UI components.",
    tags: ["React", "Tailwind"],
    cover: portfolioCover,
    images: [portfolio1, portfolio2, portfolio3],
    code: "https://github.com/omid2007hope/My-Portfolio",
    live: null,
  },
  {
    slug: "finance",
    title: "Finance App — Wallet & Budget",
    desc: "Monthly budget control with multiple wallets and spending insights.",
    tags: ["React", "Tailwind"],
    cover: financeCover,
    images: [financeCover, financeCover, financeCover], // replace later
    code: "https://github.com/omid2007hope",
    live: null,
  },
];

export default projects;
