import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">Blog</h2>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="flex items-baseline justify-between gap-4 group"
          >
            <span className="text-gray-900 group-hover:text-blue-600 transition-colors">
              {post.title}
            </span>
            <span className="text-sm text-gray-400 shrink-0">{post.date}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
