const WORK_EXPERIENCES = [
  {
    company: "上海市翰启文化传媒有限公司",
    role: "设计师 / 项目负责人",
    period: "2016 - 2020年",
    description: "独立打磨品牌全案设计体系，建立标准化视觉落地判断逻辑；2018年牵头承接上海大世界全年全案设计项目，项目总规模1200万元，完整负责视觉体系规划、落地全程把控，积累大型商业文旅项目设计操盘经验。",
    hasButton: true,
    buttonText: "查看作品集",
  },
  {
    company: "临泉县未见山民宿",
    role: "自主创业",
    period: "2020- 至今",
    description: "从零搭建民宿全案品牌体系，统筹空间视觉、运营定位、市场推广整套方案，实现项目2年完整回本，具备从0到1实体文旅项目创业操盘、盈亏管控实战经验。",
    hasButton: false,
  },
  {
    company: "阜阳圆腾直播MCN机构",
    role: "合伙创业",
    period: "2020-2023年",
    description: "深耕短视频、直播内容一线运营，搭建内容流量商业化闭环；2022年公司全年营收流水达3000万元，缴纳税收80万元，掌握流量运营、企业财税、商业变现全链路管理能力。",
    hasButton: true,
    buttonText: "点击详情",
  },
  {
    company: "临泉县经济开发区管委会",
    role: "办公室副主任",
    period: "2024- 至今",
    description: "深度参与县域产业一线管理工作，统筹主要领导日常会务、行程统筹与重大产业项目对接落地；联动政企资源，负责开发区招商引资、产业项目统筹推进，吃透区域产业政策、政企协作规则与资源调配逻辑。",
    hasButton: false,
  },
];

export default function RightPanel({ onPortfolioClick, onMCNClick }) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 bg-accent" />
        <h2 className="text-lg font-bold text-text tracking-wide">工作履历/WORK EXPERIENCE</h2>
      </div>

      <div className="space-y-8">
        {WORK_EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className="relative pl-6"
          >
            <div className="absolute left-0 top-0 w-1 h-full bg-dashed-line" />
            <div className="absolute left-[-3px] top-1 w-3 h-3 bg-accent rounded-full border-2 border-bg" />
            
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
              <h3 className="font-bold text-text text-base">{exp.company}</h3>
              <span className="text-sm text-text-secondary">{exp.period}</span>
            </div>
            
            <p className="text-sm font-medium text-text mb-3">{exp.role}</p>
            
            <p className="text-sm leading-loose text-text-secondary mb-3">
              {exp.description}
            </p>
            
            {exp.hasButton && (
              <button
                onClick={exp.buttonText === "查看作品集" ? onPortfolioClick : onMCNClick}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent text-white text-sm font-medium hover:bg-accent-light transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
                {exp.buttonText}
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
