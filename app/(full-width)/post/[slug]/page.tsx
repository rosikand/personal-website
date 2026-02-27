import { notFound } from "next/navigation";
import { getPostBySlug, getAllPosts } from "@/lib/posts";
import Link from "next/link";

export function generateStaticParams() {
  return getAllPosts()
    .filter((post) => post.fullWidth)
    .map((post) => ({ slug: post.slug }));
}

export default async function FullWidthBlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.fullWidth) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <Link
          href="/blog"
          className="text-sm text-gray-400 transition-colors hover:text-[#8C1515]"
        >
          &larr; Back to blog
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">{post.title}</h1>
        <p className="text-sm text-gray-400">{post.date}</p>
      </div>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
        {post.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
