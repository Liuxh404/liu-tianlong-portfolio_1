import { useEffect, useState } from "react";
import Seal from "./Seal";

const LINKS = [
  { href: "#work", zh: "作品", en: "WORK" },
  { href: "#about", zh: "关于", en: "ABOUT" },
  { href: "#skills", zh: "能力", en: "SKILLS" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="rail flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Seal size={34} />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[15px] text-paper">刘天龙</span>
            <span className="seal text-[10px] text-mist">LIU TIANLONG</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="seal text-[12px] text-mist hover:text-paper transition-colors duration-300"
              >
                {l.en}
                <span className="ml-1.5 text-mist-dim">{l.zh}</span>
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="seal border border-line-strong px-5 py-2.5 text-[12px] text-paper transition-colors duration-300 hover:border-bronze hover:text-bronze"
        >
          联系我 · CONTACT
        </a>
      </nav>
    </header>
  );
}
