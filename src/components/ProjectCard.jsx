const PATTERNS = [
  "linear-gradient(135deg, rgba(201,168,118,0.22), transparent 55%), repeating-linear-gradient(115deg, rgba(237,234,226,0.05) 0px, rgba(237,234,226,0.05) 1px, transparent 1px, transparent 26px)",
  "radial-gradient(80% 60% at 75% 25%, rgba(201,168,118,0.20), transparent 60%), repeating-linear-gradient(0deg, rgba(237,234,226,0.045) 0px, rgba(237,234,226,0.045) 1px, transparent 1px, transparent 22px)",
  "linear-gradient(200deg, rgba(201,168,118,0.18), transparent 50%), repeating-linear-gradient(90deg, rgba(237,234,226,0.04) 0px, rgba(237,234,226,0.04) 1px, transparent 1px, transparent 34px)",
  "radial-gradient(70% 70% at 30% 70%, rgba(201,168,118,0.24), transparent 60%), repeating-linear-gradient(45deg, rgba(237,234,226,0.05) 0px, rgba(237,234,226,0.05) 1px, transparent 1px, transparent 18px)",
];

export default function ProjectCard({ project, index }) {
  return (
    <article className="group">
      <div
        className="relative aspect-[16/11] w-full overflow-hidden border border-line bg-ink-2 transition-colors duration-500 group-hover:border-line-strong"
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
          style={{ background: PATTERNS[index % PATTERNS.length] }}
        />
        <span className="seal absolute left-5 top-5 text-[11px] text-mist-dim">
          {project.code}
        </span>
        <span className="seal absolute right-5 top-5 text-[11px] text-mist-dim">
          {project.year}
        </span>
        <span className="font-display absolute bottom-5 left-5 text-[15px] text-paper/70">
          {project.enTitle}
        </span>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <h3 className="font-display text-[22px] leading-snug text-paper">
          {project.title}
        </h3>
        <div className="flex shrink-0 gap-2 pt-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="seal border border-line px-2.5 py-1 text-[10px] text-mist"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-3 max-w-[55ch] text-[14.5px] leading-[1.85] text-mist">
        {project.desc}
      </p>
    </article>
  );
}
