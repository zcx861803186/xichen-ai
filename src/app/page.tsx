import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
          一人公司
          <span className="block bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
            无需技术团队 · 也能 AI 自动化
          </span>
        </h1>
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          我是晨曦，一名一人公司创业者。
          <br />
          我用 AI 工具为和你一样的创业者搭建自动化系统——
          <br />
          客服、内容生产、业务流程，一个人也能跑通。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            查看服务
          </Link>
          <Link
            href="/blog"
            className="px-8 py-3 border border-zinc-300 rounded-full text-sm font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
          >
            阅读博客
          </Link>
        </div>
      </section>

      {/* HOW Section */}
      <section className="py-16 border-t border-zinc-200">
        <h2 className="text-2xl font-bold text-center mb-12">我如何帮你</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              emoji: "🤖",
              title: "AI 客服搭建",
              desc: "用 AI 替代 80% 的重复客服工作。情绪识别、多轮对话、自动回复，半小时上线。",
            },
            {
              emoji: "⚡",
              title: "业务流程自动化",
              desc: "把重复操作交给 AI Agent。表单处理、数据录入、定时任务，省下你的时间。",
            },
            {
              emoji: "🧰",
              title: "工具选型与搭建",
              desc: "不卖最贵的，只卖适合一人公司的。Dify / AutoGen / Ghost / Next.js，帮你选对工具。",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-4">{item.emoji}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why 一人公司 Section */}
      <section className="py-16 border-t border-zinc-200">
        <h2 className="text-2xl font-bold text-center mb-12">为什么专注一人公司</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-zinc-600 leading-relaxed">
          <p>
            我读过几百个一人公司的案例。Pieter Levels 年入 $2.1M 只用 PHP + SQLite，
            Marc Lou 25 个项目跑出 $1.03M/年。他们的共同点是——<strong>用技术杠杆代替人力杠杆</strong>。
          </p>
          <p>
            但大多数创业者不需要学写代码，他们只需要<strong>有人帮他们把技术搭好</strong>。
            这就是我在做的事。我用 AI 工具把搭建成本降到过去的 1/10，让一人公司也能用上大公司的技术设施。
          </p>
          <p className="text-sm text-zinc-400">
            参考文献：《一人企业方法论》 · awesome-one-person-company · IndieHackers
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t border-zinc-200">
        <h2 className="text-2xl font-bold mb-4">想聊聊你的项目？</h2>
        <p className="text-zinc-500 mb-8">
          来闲鱼找我，搜「晨曦集团」或直接发消息咨询
        </p>
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700">
          🏪 闲鱼：搜索「晨曦集团」
        </div>
      </section>
    </div>
  );
}
