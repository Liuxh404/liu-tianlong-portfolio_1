const SKILLS = [
  { name: "C4D 建模 / 渲染", level: 85 },
  { name: "AI/Agent", level: 75 },
  { name: "直播 / 短视频社媒", level: 70 },
  { name: "政务接待 / 商业洽谈", level: 80 },
];

export default function LeftPanel() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-accent" />
          <h2 className="text-lg font-bold text-text tracking-wide">自我介绍/PROFILE</h2>
        </div>
        <p className="text-sm leading-loose text-text-secondary">
          我叫刘天龙，9年的设计工作经验，现在是一名会用vibecoding的三维设计师，擅长建模，AIGC视觉创造、IP形象、品牌视觉和建筑设计。熟悉Midjourney、GPT、codex，也会用Agent思维把设计做的更高效。
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-accent" />
          <h2 className="text-lg font-bold text-text tracking-wide">职业技能/SKILL</h2>
        </div>
        <div className="space-y-4">
          {SKILLS.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text font-medium">{skill.name}</span>
              </div>
              <div className="h-2 bg-skill-bar overflow-hidden">
                <div
                  className="h-full bg-skill-bar-fill transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-accent" />
          <h2 className="text-lg font-bold text-text tracking-wide">获奖经历/AWARD</h2>
        </div>
        <p className="text-sm leading-loose text-text-secondary">
          2年兵役生涯，获得过执行重大任务3次等
        </p>
      </section>
    </div>
  );
}
