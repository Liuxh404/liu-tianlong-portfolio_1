import { useReveal } from "../hooks/useReveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    code: "BRAND IDENTITY",
    enTitle: "WEIJIANSHAN",
    year: "2020–2022",
    title: "未见山民宿 — 品牌全案",
    tags: ["品牌识别", "空间体验"],
    desc: "从命名、视觉识别到空间动线的整体设计，独立操盘并实现两年回本，验证了设计判断力在真实商业场景下的价值。",
  },
  {
    code: "CONTENT SYSTEM",
    enTitle: "YUANYONG MEDIA",
    year: "2021–2023",
    title: "圆勇文化传媒 — 内容视觉矩阵",
    tags: ["MCN", "新媒体"],
    desc: "为合伙创办的直播 MCN 机构搭建统一的内容视觉语言，覆盖账号矩阵、直播间美术与短视频封面体系。",
  },
  {
    code: "PUBLIC BRAND",
    enTitle: "LINQUAN EDZ",
    year: "2024–2026",
    title: "临泉经开区 — 产业形象规范",
    tags: ["公共品牌", "形象系统"],
    desc: "在产业管理一线参与区域品牌与项目视觉的统筹工作，把企业级设计思维带入政企协作场景。",
  },
  {
    code: "AI-GENERATED",
    enTitle: "AI VISUAL LAB",
    year: "持续进行",
    title: "AI 视觉实验室",
    tags: ["AI设计", "概念探索"],
    desc: "用生成式 AI 探索品牌视觉的新可能性，从概念草图到风格化输出，建立可控、可复用的 AI 设计工作流。",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="work" className="bg-ink py-32">
      <div ref={ref} className="reveal rail">
        <div className="flex items-end justify-between gap-8">
          <SectionHeading eyebrow="WORK · 精选项目" title="四段经历，四套视觉系统" />
          <p className="hidden max-w-[34ch] pb-1 text-[13px] leading-relaxed text-mist-dim sm:block">
            按时间顺序排列 —— 每一份作品背后，
            都对应着一段真实投入的工作阶段。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-20 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
