// === src/components/SkillChip.jsx ===
export function SkillChip({ children }) {
  return (
    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-sm">
      {children}
    </span>
  );
}
