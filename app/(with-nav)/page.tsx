import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
        {/* Bio */}
        <div className="max-w-xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I&apos;m Rohan Sikand. I studied computer science (AI) at Stanford,
            completing both my B.S. and M.S. in 2025. My research interests span
            self-supervised learning and ML engineering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Previously, I worked on self-supervised learning research at{" "}
            <a href="https://ai.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-[#8C1515] hover:underline">
              SAIL (Stanford AI Lab)
            </a>{" "}
            and built segmentation models at{" "}
            <a href="https://insitro.com/" target="_blank" rel="noopener noreferrer" className="text-[#8C1515] hover:underline">
              insitro
            </a>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I also write about startups and venture capital on my Substack,{" "}
            <a href="https://rosikand.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[#8C1515] hover:underline">
              Rohan&apos;s Random Walks
            </a>.
            Outside of work, I enjoy golf and poker.
          </p>
        </div>

        {/* Profile image + theme toggle */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <img src="https://pbs.twimg.com/profile_images/2026276901573251072/Zd186FU9_400x400.jpg" alt="Rohan Sikand" className="h-40 w-40 rounded-full object-cover" />
          <ThemeToggle />
        </div>
      </div>

      {/* Social links */}
      <SocialLinks />

      {/* Now */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Now</h2>
        <ul className="space-y-1.5 text-sm text-gray-700">
          <li>Thinking about GPU utilization, robotics infrastructure, and medical AI diagnostics.</li>
          <li>Writing on <a href="https://rosikand.substack.com/" target="_blank" rel="noopener noreferrer" className="text-[#8C1515] hover:underline">Rohan&apos;s Random Walks</a>.</li>
          <li>Building with LLMs and exploring personalized AI models.</li>
        </ul>
      </section>

      {/* News */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">News</h2>
        <ul className="space-y-1.5 text-sm text-gray-700">
          <li><span className="text-gray-400">2025</span> &mdash; Completed M.S. in Computer Science (AI) at Stanford.</li>
          <li><span className="text-gray-400">2024</span> &mdash; Paper accepted at ECCV 2024 on contrastive pre-training for natural world imagery.</li>
          <li><span className="text-gray-400">2023</span> &mdash; BIG-bench paper accepted as Spotlight at ICLR 2023.</li>
        </ul>
      </section>

      {/* Selected Work */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Selected Work</h2>
        <div className="space-y-2">
          <div>
            <Link href="/research" className="text-sm font-medium text-gray-900 hover:text-[#8C1515] transition-colors">
              Contrastive Ground-Level Image and Remote Sensing Pre-Training
            </Link>
            <p className="text-xs text-gray-500">ECCV 2024</p>
          </div>
          <div>
            <Link href="/research" className="text-sm font-medium text-gray-900 hover:text-[#8C1515] transition-colors">
              Beyond the Imitation Game (BIG-bench)
            </Link>
            <p className="text-xs text-gray-500">ICLR 2023, Spotlight</p>
          </div>
          <div>
            <a href="https://github.com/rosikand/torchplate" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-900 hover:text-[#8C1515] transition-colors">
              torchplate
            </a>
            <p className="text-xs text-gray-500">Minimal PyTorch experiment framework</p>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">Writing</h2>
        <div className="space-y-2">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.fullWidth ? `/post/${post.slug}` : `/blog/${post.slug}`}
              className="flex items-baseline justify-between gap-4 group"
            >
              <span className="text-sm text-gray-900 group-hover:text-[#8C1515] transition-colors">
                {post.title}
              </span>
              <span className="text-xs text-gray-400 shrink-0">{post.date}</span>
            </Link>
          ))}
        </div>
        <Link href="/blog" className="text-xs text-[#8C1515] hover:underline">
          All posts &rarr;
        </Link>
      </section>
    </div>
  );
}
