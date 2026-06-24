import Link from "next/link";

export const metadata = {
  title: "服务与产品",
  description:
    "AI 客服搭建、业务流程自动化、AI 工具选型，一人公司也能用上的自动化服务。",
};

const products = [
  {
    title: "AI 情绪识别客服搭建包",
    price: "¥49.90",
    tag: "热卖",
    desc: "一套即开即用的 AI 客服系统模板。支持情绪识别、多轮对话、自动回复，半小时完成部署。",
    features: [
      "中文情绪词库 + 分类 Prompt 模板",
      "OpenAI / DeepSeek 双引擎配置",
      "支持接入微信客服 / 网站 / API",
      "交付文档即买即用",
    ],
    link: "https://m.2.taobao.com/item.htm?id=1055811390394",
  },
  {
    title: "企业 AI 自动化搭建服务",
    price: "¥999",
    tag: "定制",
    desc: "完整的企业 AI 自动化诊断 + 搭建。适合有明确需求但不知道如何落地的创业者。",
    features: [
      "30 分钟在线诊断",
      "全套 AI 自动化方案设计",
      "工具选型与部署指导",
      "7 天售后支持",
    ],
    link: "https://m.2.taobao.com/item.htm?id=1054919495660",
  },
];

export default function ProductsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">服务与产品</h1>
      <p className="text-zinc-500 mb-10">
        所有产品均为一人公司设计。低成本、高回报、可落地。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white border border-zinc-200 rounded-xl p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <h2 className="font-semibold text-lg">{product.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  product.tag === "热卖"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {product.tag}
              </span>
            </div>

            <p className="text-3xl font-bold mb-4">
              {product.price}
              <span className="text-sm font-normal text-zinc-400 ml-1">/ 次</span>
            </p>

            <p className="text-sm text-zinc-600 mb-4">{product.desc}</p>

            <ul className="space-y-2 mb-6 flex-1">
              {product.features.map((f) => (
                <li key={f} className="text-sm text-zinc-500 flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors"
            >
              在闲鱼购买
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
        <h3 className="font-semibold mb-2">有定制需求？</h3>
        <p className="text-sm text-zinc-600 mb-4">
          每个一人公司的业务都不一样。来闲鱼聊聊你的具体场景，我帮你评估方案。
        </p>
        <p className="text-sm text-amber-700">🏪 闲鱼搜索「晨曦集团」</p>
      </div>
    </div>
  );
}
