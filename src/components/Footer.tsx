export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white mt-24">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-2">晨曦集团</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">
              一人公司创业者的 AI 自动化服务伙伴。
              <br />
              让技术服务于你的商业目标。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm text-zinc-800 mb-3">快速链接</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>
                <a href="/products" className="hover:text-amber-600 transition-colors">
                  服务列表
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-amber-600 transition-colors">
                  博客
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium text-sm text-zinc-800 mb-3">联系</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>闲鱼：搜索「晨曦集团」</li>
              <li>小红书：@曦哥跟您唠唠嗑</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-100 mt-8 pt-6 text-center text-xs text-zinc-400">
          &copy; {new Date().getFullYear()} 晨曦集团 · 一人公司 AI 自动化服务
        </div>
      </div>
    </footer>
  );
}
