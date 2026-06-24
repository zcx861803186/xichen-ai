import Link from "next/link";

const capabilities = [
  {
    emoji: "🔬",
    title: "研发技术部",
    tagline: "AI 编码与自动化基础设施",
    items: [
      { icon: "🐘", name: "PostgreSQL 19", desc: "自建数据库服务，存储10+项目数据" },
      { icon: "🎯", name: "Playwright MCP", desc: "AI 操控浏览器，网页自动化操作" },
      { icon: "🕷️", name: "Scrapling", desc: "自适应爬虫，Cloudflare 绕过" },
      { icon: "📚", name: "Context7", desc: "实时文档检索，消除 AI 代码幻觉" },
      { icon: "📁", name: "Filesystem MCP", desc: "AI 安全读写文件系统" },
      { icon: "🧠", name: "Sequential Thinking", desc: "AI 分步推理、修订与分支探索" },
    ],
  },
  {
    emoji: "📊",
    title: "数据智能部",
    tagline: "数据采集 → 存储 → 分析 → 预测",
    items: [
      { icon: "🕷️", name: "Scrapling", desc: "爬取任意网页数据，自动适配改版" },
      { icon: "🎬", name: "yt-dlp", desc: "933 个站点视频/音频下载" },
      { icon: "🐘", name: "PostgreSQL 19", desc: "关系型数据库，完整 SQL 引擎" },
      { icon: "🔮", name: "Predict Anything", desc: "量化策略回测与市场预测" },
    ],
  },
  {
    emoji: "✍️",
    title: "内容创作部",
    tagline: "从素材到成片，AI 全流程生产",
    items: [
      { icon: "🎬", name: "OpenMontage", desc: "AI 全自动视频制作（$0.15起）" },
      { icon: "🎬", name: "yt-dlp", desc: "采集竞品短视频素材" },
      { icon: "🕷️", name: "Scrapling", desc: "爬取热点话题与素材" },
      { icon: "📚", name: "Context7", desc: "技术写作时查真实 API 文档" },
    ],
  },
  {
    emoji: "📡",
    title: "自媒体传播部",
    tagline: "一键分发 · 自动互动 · 内容变现",
    items: [
      { icon: "🔥", name: "AiToEarn", desc: "14个平台一键发布，3种变现模式" },
      { icon: "🎯", name: "Playwright MCP", desc: "自动发布流程，浏览器操作自动化" },
      { icon: "🎬", name: "OpenMontage", desc: "短视频批量化生产" },
    ],
  },
  {
    emoji: "🧠",
    title: "元技能部",
    tagline: "AI 技能引擎与知识底座",
    items: [
      { icon: "🧠", name: "101 个 AI 技能", desc: "覆盖公司全部 14 个部门职能" },
      { icon: "🧠", name: "Sequential Thinking", desc: "复杂问题分步拆解推理" },
      { icon: "⏳", name: "Prompt Optimizer", desc: "提示词优化平台（待部署）" },
      { icon: "🎯", name: "Memory MCP", desc: "AI 跨会话知识图谱记忆" },
    ],
  },
  {
    emoji: "🔄",
    title: "AI 编排部",
    tagline: "MCP 生态 · 技能路由 · 工作流编排",
    items: [
      { icon: "🎯", name: "MCP Servers 合集", desc: "7 个官方 MCP 服务器任意组装" },
      { icon: "🔮", name: "Predict Anything", desc: "4 层技能路由架构（设计参考）" },
      { icon: "📁", name: "Filesystem MCP", desc: "安全文件操作 MCP" },
    ],
  },
];

const valueChain = [
  { emoji: "🕷️🎬", label: "数据采集", dept: "Scrapling + yt-dlp" },
  { emoji: "🐘", label: "数据存储", dept: "PostgreSQL 19" },
  { emoji: "🧠", label: "AI 推理", dept: "Sequential Thinking" },
  { emoji: "🎬✍️", label: "内容生产", dept: "OpenMontage + AiToEarn" },
  { emoji: "📡🔥", label: "分发变现", dept: "AiToEarn 14个平台" },
];

export default function CapabilitiesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 pb-20">
      {/* Hero */}
      <section className="py-16 md:py-24 text-center border-b border-zinc-200">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-700 mb-6 tracking-wider">
          🎙️ 晨曦集团 · 能力全景
        </div>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-4">
          一人公司的
          <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            {" "}全栈 AI 能力
          </span>
        </h1>
        <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed">
          15 个开源项目 · 14 个部门 · 101 个 AI 技能
          <br />
          从数据库到视频制作、从爬虫到全平台发布——供应链全在自己手里。
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { num: "15", label: "开源项目" },
            { num: "14", label: "职能部门" },
            { num: "101", label: "AI 技能" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-zinc-900">{s.num}</div>
              <div className="text-xs text-zinc-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capability Clusters */}
      <section className="py-16 border-b border-zinc-200">
        <h2 className="text-xl font-bold text-center mb-2">六大能力集群</h2>
        <p className="text-sm text-zinc-400 text-center mb-10">
          每个集群由一个部门主导，其他部门协作
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cluster) => (
            <div
              key={cluster.title}
              className="bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{cluster.emoji}</span>
                <h3 className="font-bold text-base">{cluster.title}</h3>
              </div>
              <p className="text-xs text-zinc-400 mb-3">{cluster.tagline}</p>
              <ul className="space-y-1.5">
                {cluster.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2 text-sm">
                    <span className="text-xs mt-0.5 shrink-0">{item.icon}</span>
                    <div>
                      <span className="font-medium text-zinc-800">{item.name}</span>
                      <span className="text-zinc-400"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Value Chain */}
      <section className="py-16 border-b border-zinc-200">
        <h2 className="text-xl font-bold text-center mb-2">全链路能力</h2>
        <p className="text-sm text-zinc-400 text-center mb-10">
          从原始数据到变现收入的完整闭环
        </p>
        <div className="flex flex-col md:flex-row items-stretch gap-3 max-w-4xl mx-auto">
          {valueChain.map((step, i) => (
            <div key={step.label} className="flex-1 flex flex-col items-center text-center">
              <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 w-full">
                <div className="text-xl mb-1">{step.emoji}</div>
                <div className="text-sm font-bold text-zinc-800">{step.label}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5 break-all">{step.dept}</div>
              </div>
              {i < valueChain.length - 1 && (
                <div className="hidden md:block text-zinc-300 text-lg mt-1">→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* What This Means */}
      <section className="py-16 border-b border-zinc-200">
        <h2 className="text-xl font-bold text-center mb-8">这意味着什么</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            {
              q: '🤔 客户问「能不能爬一下竞品的数据？」',
              a: 'Scrapling 十分钟搭好，数据直接进 PostgreSQL。',
            },
            {
              q: '🤔 客户问「帮我做个产品介绍视频？」',
              a: 'OpenMontage + yt-dlp 素材 + AiToEarn 发布，全自动。',
            },
            {
              q: '🤔 客户问「这个数据库方案靠谱吗？」',
              a: 'PostgreSQL 19 源码在手 + Context7 查最新文档 = 问不倒。',
            },
            {
              q: '🤔 客户问「能不能自动化运营自媒体？」',
              a: 'AiToEarn 一键发 14 平台 + Playwright MCP 自动化操作。',
            },
          ].map((item) => (
            <div
              key={item.q}
              className="bg-white border border-zinc-200 rounded-xl p-5"
            >
              <p className="text-sm font-semibold text-zinc-800 mb-2">{item.q}</p>
              <p className="text-sm text-zinc-500">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-xl font-bold mb-3">想把这些能力变成你的？</h2>
        <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
          这些项目从今天起都是公司的资产。需要哪个，直接跟我说。
        </p>
        <Link
          href="/products"
          className="inline-flex px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          查看服务
        </Link>
      </section>
    </div>
  );
}
