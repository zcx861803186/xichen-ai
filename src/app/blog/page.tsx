import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata = {
  title: "博客",
  description: "一人公司实战记录 · AI 自动化经验分享 · Build in Public",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">博客</h1>
      <p className="text-zinc-500 mb-10">
        一人公司实战记录 · AI 自动化经验 · Build in Public
      </p>

      {posts.length === 0 ? (
        <p className="text-zinc-400">暂无文章，正在撰写中...</p>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-zinc-100 pb-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold group-hover:text-amber-600 transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <div className="text-xs text-zinc-400 mb-3">{post.date}</div>
              <p className="text-sm text-zinc-600 leading-relaxed">{post.excerpt}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 bg-zinc-100 text-zinc-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
