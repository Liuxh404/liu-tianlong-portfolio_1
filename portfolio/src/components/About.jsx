import { useReveal } from "../hooks/useReveal";
import AvatarPlate from "./AvatarPlate";
import SectionHeading from "./SectionHeading";

const CONTACT = [
  { label: "EMAIL", value: "your-email@example.com" },
  { label: "PHONE", value: "+86 138 0000 0000" },
  { label: "BASE", value: "安徽 · 阜阳 / 临泉" },
  { label: "WECHAT", value: "your-wechat-id" },
];

const STATS = [
  { value: "10+", unit: "年", label: "跨领域设计与产业实战" },
  { value: "04", unit: "年", label: "专业品牌设计训练" },
  { value: "03", unit: "次", label: "创业 / 合伙创业实践" },
  { value: "02", unit: "年", label: "首个创业项目回本周期" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="bg-ink py-32">
      <div ref={ref} className="reveal rail">
        <SectionHeading eyebrow="ABOUT · 关于我" title="一条不太常规的设计路径" />

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[400px_1fr]">
          {/* Portrait + contact column */}
          <div>
            <AvatarPlate />

            <ul className="mt-8 space-y-3 border-t border-line pt-6">
              {CONTACT.map((c) => (
                <li
                  key={c.label}
                  className="flex items-baseline justify-between gap-4 text-[13px]"
                >
                  <span className="seal text-mist-dim">{c.label}</span>
                  <span className="text-paper">{c.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Intro + stats column */}
          <div className="flex flex-col">
            <p className="max-w-[58ch] text-[17px] leading-[2] text-mist">
              2016 年从设计工作室起步，四年里打磨出对品牌视觉与系统化设计的判断力；
              2020 年独立创业，把这套判断力用在了一间从零盈利的乡村民宿品牌全案上；
              随后两年与伙伴共同创办文化传媒公司，扎进短视频与直播内容的一线运营；
              2024 年起，又把视角带进产业管理一线，在县域经济开发区参与品牌与项目的统筹落地。
              <br />
              <br />
              这条路径让我习惯在不同语境里切换：在设计室里追求细节，在创业中对结果负责，
              在内容行业里理解流量与情绪，在产业一线里理解资源与规则。
              现在，我把这些经验和 AI 工具结合起来，专注于做<span className="text-paper">视觉、品牌与 AI 设计</span>——
              既要有审美的克制，也要有落地的效率。
            </p>

            <div className="mt-auto grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 mt-12">
              {STATS.map((s) => (
                <div key={s.label} className="bg-ink-2 px-6 py-7">
                  <p className="font-display text-[34px] leading-none text-paper">
                    {s.value}
                    <span className="ml-1 text-[16px] text-bronze">{s.unit}</span>
                  </p>
                  <p className="mt-3 text-[12.5px] leading-snug text-mist">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
