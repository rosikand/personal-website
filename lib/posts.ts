export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
}

const posts: Post[] = [
  {
    slug: "building-better-benchmarks",
    title: "Building Better Benchmarks for AI Systems",
    date: "January 15, 2025",
    summary:
      "Thoughts on what makes a good benchmark and why evaluation methodology matters more than leaderboard rankings.",
    content: [
      "Benchmarks are the backbone of progress in machine learning. They give us a shared language for comparing models, tracking improvements, and identifying blind spots. But not all benchmarks are created equal, and the way we build them has a profound impact on the research directions they incentivize.",
      "A good benchmark should test for capabilities that matter in practice, not just narrow skills that can be gamed. It should be robust to data contamination and memorization. And critically, it should come with a clear evaluation methodology that researchers can trust.",
      "In my recent work, I've been exploring how to design benchmarks that are both challenging and meaningful. This involves careful curation of test cases, thoughtful metric design, and extensive analysis of failure modes.",
      "One key insight is that the process of building a benchmark often reveals as much about a problem as the benchmark itself. The act of defining what 'success' looks like forces you to confront ambiguities and edge cases that might otherwise go unnoticed.",
    ],
  },
  {
    slug: "lessons-from-physics",
    title: "What Physics Taught Me About Software Engineering",
    date: "December 3, 2024",
    summary:
      "How a background in physics shaped my approach to writing code and solving engineering problems.",
    content: [
      "Before I wrote my first neural network, I spent years solving differential equations and building simulations of physical systems. That experience left a lasting mark on how I think about software.",
      "Physics teaches you to reason from first principles. Instead of memorizing solutions, you learn to break problems down into fundamental components and build up from there. This translates directly to software design — the best architectures are the ones that emerge from a clear understanding of the problem, not from copying patterns blindly.",
      "Another lesson is the importance of dimensional analysis — or in software terms, type checking your reasoning. In physics, if the units don't work out, your answer is wrong. In code, if the data shapes don't align or the interfaces don't match, something is off upstream.",
      "Perhaps most importantly, physics taught me comfort with approximation. Not every problem has an exact solution, and that's okay. The art is in knowing which simplifications are safe to make and which will come back to bite you.",
    ],
  },
  {
    slug: "on-research-taste",
    title: "On Developing Research Taste",
    date: "October 18, 2024",
    summary:
      "Reflections on how to identify important problems and develop intuition for impactful research directions.",
    content: [
      "One of the hardest skills to develop as a researcher is taste — the ability to distinguish problems that are merely interesting from problems that are truly important. This isn't something that can be taught in a classroom; it develops gradually through exposure, mentorship, and a lot of reading.",
      "I've found that the best way to sharpen research taste is to study the history of your field. Understanding why certain breakthroughs happened when they did, and what conditions enabled them, gives you a sense for where the next opportunities might lie.",
      "It also helps to maintain a broad reading habit. Some of my best research ideas have come from connecting concepts across seemingly unrelated fields. The boundaries between disciplines are often where the most interesting problems live.",
      "Finally, talking to practitioners — people who use the tools we build — is invaluable. They have a grounded sense of what works, what doesn't, and what would be transformative. Their perspective is a powerful antidote to the echo chamber of academic incentives.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
