export default function SectionHeading({ eyebrow, title, align = "left" }) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="seal mb-4 text-[12px] text-bronze">{eyebrow}</p>
      <h2 className="font-display text-[clamp(28px,3.4vw,46px)] font-light leading-tight text-paper">
        {title}
      </h2>
    </div>
  );
}
