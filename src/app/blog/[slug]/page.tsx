import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown-to-HTML (basic)
  const htmlContent = post.content
    .replace(/^### (.*$)/gm, "<h3>$1</h3>")
    .replace(/^## (.*$)/gm, "<h2>$1</h2>")
    .replace(/^# (.*$)/gm, "<h1>$1</h1>")
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/^- (.*)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>")
    .replace(/^<p>/, "<p>")
    .replace(/<\/p>$/, "</p>");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link
        href="/blog"
        className="text-sm text-zinc-400 hover:text-amber-600 transition-colors mb-8 inline-block"
      >
        &larr; 返回博客列表
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
          <div className="text-sm text-zinc-400">{post.date}</div>
        </header>

        <div
          className="prose prose-zinc max-w-none leading-relaxed text-zinc-700"
          dangerouslySetInnerHTML={{ __html: `<p>${htmlContent}</p>` }}
        />
      </article>
    </div>
  );
}
