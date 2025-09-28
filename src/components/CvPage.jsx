// src/pages/CvPage.jsx
import cv from "../assets/cv.jpeg"; // big image

export default function CvPage() {
  return (
    // add top padding so content sits below the fixed header
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-50 pt-56 md:pt-64">
      <section id="cv" className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64">
        <img
          src={cv}
          alt="Curriculum Vitae"
          className="w-full rounded-xl shadow ring-1 ring-blue-900/10"
        />
      </section>
      {/* Optional placeholder sections so navbar anchors don't 404-scroll */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64"
      ></section>
      <section
        id="work"
        className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64"
      ></section>
      <section
        id="contact"
        className="max-w-6xl mx-auto px-4 py-10 scroll-mt-64"
      ></section>
    </div>
  );
}
