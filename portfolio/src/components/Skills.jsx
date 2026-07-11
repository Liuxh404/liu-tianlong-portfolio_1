import { PenTool, Sparkles, Megaphone, TrendingUp, Network, Landmark } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  {
    icon: PenTool,
    title: "品牌视觉系统构建",
    desc: "从标志、色彩到应用规范，建立可延展、经得起多场景检验的品牌视觉语言。",
  },
  {
    icon: Sparkles,
    title: "AI 辅助设计工作流",
    desc: "把生成式 AI 嵌入提案、概念与产出环节，在保证审美判断的前提下提升效率。",
  },
  {
    icon: Megaphone,
    title: "内容策划与新媒体运营",
    desc: "理解短视频与直播内容的生产逻辑，能把品牌语言转译成有传播力的内容形式。",
    },
  {
    icon: TrendingUp,
    title: "商业落地与运营管理",
    desc: "有从设计方案到真实回本的完整经营经验，懂设计也懂账。",
  },
  {
    icon: Network,
    title: "跨界资源整合能力",
    desc: "在设计、文旅、媒体与产业管理之间积累的人脉与协作经验，能快速对接不同领域的需求。",
  },
  {
    icon: Landmark,
    title: "政企级视觉规范经验",
    desc: "熟悉公共与产业语境下的品牌表达边界，能在规范与美感之间找到平衡。",
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="bg-ink py-32">
      <div ref={ref} className="reveal rail">
        <SectionHeading eyebrow="SKILLS · 个人优势" title="设计之外，还有这些支撑" />

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-5 bg-ink px-9 py-11 transition-colors duration-500 hover:bg-ink-2"
            >
              <Icon
                size={22}
                strokeWidth={1.4}
                className="text-bronze transition-transform duration-500 group-hover:-translate-y-0.5"
              />
              <h3 className="font-display text-[19px] leading-snug text-paper">{title}</h3>
              <p className="text-[14px] leading-[1.85] text-mist">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
