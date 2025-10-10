// === src/components/ProjectCard.jsx ===
import {
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export function ProjectCard({ project, i = 0 }) {
  const { image, title, desc, tags, code, live } = project;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="group rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-slate-900 text-lg">{title}</h3>
        <p className="mt-1 text-slate-600 text-sm leading-relaxed">{desc}</p>
        {tags?.length ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-xs bg-slate-50 border border-slate-200 text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-4 flex gap-3">
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800"
            >
              <CodeBracketIcon className="h-4 w-4" /> Code
            </a>
          )}
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-900 border border-slate-300 bg-white hover:bg-slate-50"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-500 border border-dashed border-slate-300 bg-white">
              Live soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
