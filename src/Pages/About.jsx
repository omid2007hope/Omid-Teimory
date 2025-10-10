// === src/pages/About.jsx ===
import {
  EnvelopeIcon,
  MapPinIcon,
  AtSymbolIcon,
} from "@heroicons/react/24/outline";
import { motion as Motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative mx-auto max-w-7xl px-6 lg:px-8 py-12 lg:py-16">
        <Motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          About
        </Motion.h1>
        <div className="grid lg:grid-cols-2 gap-10">
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-slate-200 p-6"
          >
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="font-semibold text-slate-900">Location</p>
                  <p>Vienna, Austria</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AtSymbolIcon className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="font-semibold text-slate-900">Languages</p>
                  <p>Persian (Native), English (C1), German (A2)</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeIcon className="w-5 h-5 text-slate-500" />
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <a
                    href="mailto:omidhope2007@gmail.com"
                    className="text-blue-700 hover:underline"
                  >
                    omidhope2007@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-slate-200 p-6"
          >
            <h3 className="text-xl font-bold mb-4">Who I Am</h3>
            <p className="text-slate-700 leading-relaxed">
              Disciplined and driven developer with a passion for building
              clean, responsive user interfaces using React and Tailwind.
              Focused on mastering full‑stack development and earning a tech
              role in Austria.
            </p>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="font-semibold mb-2">Mission</p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm">
                  <li>Advance my tech development</li>
                  <li>Secure a role in Austria</li>
                  <li>Expand my portfolio</li>
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <p className="font-semibold mb-2">Values</p>
                <div className="flex flex-wrap gap-2">
                  {["Discipline", "Integrity", "Growth"].map((v) => (
                    <span
                      key={v}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-sm text-slate-700"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
  );
}
