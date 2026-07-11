import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-screen min-h-[720px] w-full flex-col justify-between overflow-hidden bg-ink"
    >
      <HeroCanvas />

      {/* Dark gradient keeps text legible over the animated network / future video */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/55 to-ink pointer-events-none" />

      <div className="relative flex-1" />

      <div className="relative rail pb-24 pt-40">
        <p className="seal mb-7 text-[12px] text-bronze">
          VISUAL DESIGNER&nbsp;&nbsp;/&nbsp;&nbsp;AI DESIGNER&nbsp;&nbsp;/&nbsp;&nbsp;BRAND DESIGNER
        </p>

        <h1 className="font-display max-w-[20ch] text-[clamp(40px,6.2vw,84px)] font-light leading-[1.14] text-paper">
          在设计与产业之间，
          <br />
          寻找品牌真正的形状。
        </h1>

        <p className="mt-8 max-w-[640px] text-[16px] leading-[1.9] text-mist">
          刘天龙 — 十年来穿梭于设计工作室、自主创业与产业一线之间，
          用 AI 与系统化的视觉语言，为品牌找到精准而有温度的表达。
        </p>
      </div>

      <div className="relative rail flex items-center justify-between border-t border-line py-6">
        <span className="seal text-[11px] text-mist-dim">
          安徽 · 阜阳&nbsp;&nbsp;—&nbsp;&nbsp;EST. 2016
        </span>

        <a
          href="#about"
          className="seal flex items-center gap-3 text-[11px] text-mist transition-colors duration-300 hover:text-bronze"
        >
          <span className="hidden sm:inline">向下滚动 · SCROLL</span>
          <span className="relative h-9 w-[1px] bg-line-strong overflow-hidden">
            <span className="absolute left-0 top-0 h-3 w-[1px] bg-bronze animate-[scrollcue_1.8s_ease-in-out_infinite]" />
          </span>
        </a>
      </div>

      <style>{`
        @keyframes scrollcue {
          0%   { transform: translateY(0); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateY(28px); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
