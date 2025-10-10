// src/Pages/Cv.jsx
// Minimal page to present a single CV photo cleanly
import { motion } from "framer-motion";
import cvImage from "../assets/MyCv.jpg"; // keep this if your file name is exactly MyCv.jpg

export default function Cv() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative mx-auto max-w-6xl px-6 lg:px-8 py-12 lg:py-16">
        {/* subtle blue glow */}
        <div
          className="absolute -z-10 -top-28 right-0 w-[520px] h-[520px] rounded-full
                        bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.16),_transparent_70%)]"
        />
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          My CV
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
        >
          <img
            src={cvImage}
            alt="Omid Teimory — CV"
            className="w-full h-auto block"
          />
        </motion.div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={cvImage}
            download
            className="inline-flex items-center rounded-xl bg-slate-900 text-white px-5 py-2.5 font-semibold hover:bg-slate-800"
          >
            Download CV
          </a>
          <a
            href={cvImage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-2.5 font-semibold text-slate-900 hover:bg-slate-50"
          >
            Open Fullscreen
          </a>
        </div>
      </section>
    </main>
  );
}
