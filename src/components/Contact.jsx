import Seal from "./Seal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex h-screen min-h-[640px] w-full flex-col justify-between bg-ink"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(201,168,118,0.10), transparent 65%)",
        }}
      />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 text-center">
        <p className="seal mb-6 text-[12px] text-bronze">CONTACT · 联系方式</p>

        <h2 className="font-display max-w-[18ch] text-[clamp(32px,5vw,58px)] font-light leading-[1.2] text-paper">
          有项目想聊聊？
          <br />
          我们可以从一次对话开始。
        </h2>

        <a
          href="mailto:your-email@example.com"
          className="font-display mt-12 border-b border-line-strong pb-2 text-[clamp(22px,3vw,34px)] text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
        >
          your-email@example.com
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-[13px] text-mist">
          <span className="seal text-mist-dim">PHONE</span>
          <span>+86 138 0000 0000</span>
          <span className="hidden h-3 w-px bg-line-strong sm:inline-block" />
          <span className="seal text-mist-dim">WECHAT</span>
          <span>your-wechat-id</span>
          <span className="hidden h-3 w-px bg-line-strong sm:inline-block" />
          <span className="seal text-mist-dim">BASE</span>
          <span>安徽 · 阜阳 / 临泉</span>
        </div>
      </div>

      <div className="relative rail flex items-center justify-between border-t border-line py-8">
        <div className="flex items-center gap-3">
          <Seal size={28} />
          <span className="seal text-[11px] text-mist-dim">
            © 2026 LIU TIANLONG. ALL RIGHTS RESERVED.
          </span>
        </div>

        <a
          href="#top"
          className="seal text-[11px] text-mist transition-colors duration-300 hover:text-bronze"
        >
          回到顶部 · BACK TO TOP ↑
        </a>
      </div>
    </section>
  );
}
