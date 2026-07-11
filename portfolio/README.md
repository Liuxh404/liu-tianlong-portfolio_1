# 刘天龙 · 个人作品集网站

视觉设计师 / AI设计师 / 品牌设计师 个人作品集，React + Vite 构建。

## 本地运行

```bash
npm install
npm run dev      # 本地预览，默认 http://localhost:5173
npm run build    # 生产构建，输出到 dist/
npm run preview  # 预览生产构建结果
```

## 目录结构

```
src/
  components/
    Nav.jsx          导航栏
    Hero.jsx         首页 Hero（全屏）
    HeroCanvas.jsx   Hero 动态背景（Canvas 节点网络，可替换为视频）
    About.jsx        个人经历模块
    AvatarPlate.jsx  头像/人物图占位
    Projects.jsx     精选项目模块
    ProjectCard.jsx  项目大卡片
    Skills.jsx       个人优势模块
    Contact.jsx      底部联系模块（整屏收尾）
    Seal.jsx         贯穿全站的印章式个人标志
    SectionHeading.jsx 板块标题（mono 小标签 + 衬线大标题）
  hooks/
    useReveal.js     滚动渐入效果
  index.css          设计令牌（颜色/字体）与全局样式
```

## 这一版用了哪些"占位内容"，后续替换建议

这是第一版基础框架，下面这些地方目前是占位内容，方便你后续替换成真实素材：

1. **头像 / 人物图**（`AvatarPlate.jsx`）：目前是印章式的"刘"字版式。
   替换为真实照片：把图片放进 `public/`，然后把组件内容换成
   `<img src="/portrait.jpg" className="h-full w-full object-cover" />`
2. **Hero 视频背景**（`Hero.jsx` 中的 `<HeroCanvas />`）：目前用 Canvas 节点网络动画代替视频
   （没有视频素材，且更轻量、不会出现加载黑屏）。`HeroCanvas.jsx` 文件底部有替换为
   `<video>` 标签的具体代码示例，拿到素材后可直接替换。
3. **项目图片**（`ProjectCard.jsx`）：目前用渐变 + 网格纹样代替真实作品图。
   替换为真实图片只需把 `PATTERNS[...]` 的 `<div>` 换成 `<img src="..." />`。
4. **联系方式**：`About.jsx`、`Contact.jsx` 中的邮箱 / 电话 / 微信号目前是占位文本
   （`your-email@example.com` 等），请替换为真实信息。
5. **四个精选项目的文案**：根据简历推断撰写（未见山民宿 / 圆勇文化传媒 / 临泉经开区 / AI视觉实验室），
   建议替换成更具体的项目细节、过程图与成果数据。

## 设计说明

- 配色：墨黑背景 + 暖白文字 + 青铜色（`#C9A876`）点缀，克制、不张扬。
- 字体：标题用衬线 Newsreader / Noto Serif SC（高级感），正文用 Inter，
  标签与数据用等宽 JetBrains Mono（科技感）。
- 个人标志：以姓氏"刘"做成印章式标志，反复出现在导航、Hero 角落与页脚，作为贯穿全站的视觉记忆点。
- 版心宽度：`.rail` class 控制在 1700px 居中，两侧留白随窗口缩放。

欢迎把截图和参考网站发给我，下一轮可以针对具体板块继续打磨细节、动效与真实素材的填充。
