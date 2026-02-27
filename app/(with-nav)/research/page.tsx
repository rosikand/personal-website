import Link from "next/link";

const publications = [
  {
    title:
      "Contrastive Ground-Level Image and Remote Sensing Pre-Training Improves Representation Learning for Natural World Imagery",
    authors: ["Rohan Sikand", "et al."],
    venue: "ECCV",
    year: 2024,
    tldr: "We propose a contrastive pre-training method that pairs ground-level images with remote sensing data to improve visual representation learning for natural world imagery.",
    image: "/paper-eccv2024.svg",
    links: {
      paper: "#",
    },
    tags: ["Self-Supervised Learning", "Remote Sensing", "Computer Vision"],
  },
  {
    title:
      "Beyond the Imitation Game: Quantifying and Extrapolating the Capabilities of Language Models",
    authors: ["BIG-bench collaboration (incl. Rohan Sikand)"],
    venue: "ICLR (Spotlight)",
    year: 2023,
    tldr: "A large-scale collaborative benchmark evaluating the capabilities of language models across a diverse set of tasks, revealing insights about scaling and reasoning.",
    image: "/paper-bigbench.svg",
    links: {
      paper: "#",
    },
    tags: ["Benchmarks", "Language Models"],
  },
];

const projects = [
  {
    title: "min-llm",
    year: "2024–",
    description:
      "Minimal LLM component implementations for educational purposes.",
    link: "https://github.com/rosikand",
  },
  {
    title: "GPbeT",
    year: "2024",
    description: "LLM-powered interface for sports betting assistance.",
    link: "https://github.com/rosikand",
  },
  {
    title: "CS 231N Project — Prototypical Pre-Training",
    year: "2023",
    description:
      "Prototypical pre-training for visual representation learning.",
  },
  {
    title: "CS 330 Project — Few-Shot Cell Segmentation",
    year: "2022",
    description:
      "Gradient-based meta learning for few-shot cell segmentation.",
  },
  {
    title: "CS 221 Project — Fair Skin Cancer Classification",
    year: "2022",
    description:
      "Distributionally robust multi-task optimization for fair skin cancer classification.",
  },
  {
    title: "torchplate",
    year: "2022–2023",
    description: "Minimal experiment framework for PyTorch machine learning.",
    link: "https://github.com/rosikand/torchplate",
  },
  {
    title: "rsbox",
    year: "2022–2023",
    description: "Utility function toolbox for Python machine learning.",
    link: "https://github.com/rosikand/rsbox",
  },
  {
    title: "ddpm-pytorch",
    year: "2022–2023",
    description: "DDPM implementation in PyTorch.",
    link: "https://github.com/rosikand/ddpm-pytorch",
  },
  {
    title: "CS 109 Project — Spiral Curvature Modeling",
    year: "2022",
    description:
      "Novel Gaussian distribution approach for modeling hand-drawn spiral curvature. Won challenge (1st of 239).",
  },
  {
    title: "lemnos",
    year: "2021–2022",
    description: "Command-line to-do list manager in Python.",
    link: "https://github.com/rosikand/lemnos",
  },
];

function highlightAuthor(name: string) {
  if (name.includes("Rohan Sikand")) {
    return (
      <span key={name} className="font-semibold text-gray-900">
        {name}
      </span>
    );
  }
  return <span key={name}>{name}</span>;
}

export default function Research() {
  return (
    <div className="space-y-10">
      {/* Page header */}
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">Research</h2>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m interested in self-supervised learning, ML engineering, and AI
          evaluation. Read my{" "}
          <Link
            href="/research/statement"
            className="text-[#8C1515] hover:underline"
          >
            research statement
          </Link>{" "}
          or see{" "}
          <a
            href="https://scholar.google.com/citations?user=rosikand"
            className="text-[#8C1515] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>{" "}
          for a full list of publications.
        </p>
      </div>

      {/* Publications */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900">Publications</h3>
      </div>

      <div className="space-y-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="group flex gap-4 rounded-lg border border-gray-200 p-4"
          >
            {/* Thumbnail */}
            <img
              src={pub.image}
              alt=""
              className="h-24 w-24 flex-shrink-0 rounded-md bg-gray-100 object-cover"
            />

            {/* Content */}
            <div className="min-w-0 space-y-1">
              <h3 className="text-sm font-semibold text-gray-900 leading-snug">
                {pub.title}
              </h3>

              <p className="text-xs text-gray-500">
                {pub.authors.map((author, i) => (
                  <span key={author}>
                    {highlightAuthor(author)}
                    {i < pub.authors.length - 1 && ", "}
                  </span>
                ))}
              </p>

              <p className="text-xs">
                <span className="font-medium text-gray-700">{pub.venue}</span>
                <span className="text-gray-400"> &middot; </span>
                <span className="text-gray-500">{pub.year}</span>
              </p>

              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">
                {pub.tldr}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600"
                  >
                    {tag}
                  </span>
                ))}

                <span className="mx-0.5" />

                {pub.links.paper && (
                  <a
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-[#8C1515] hover:underline"
                  >
                    [paper]
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Projects */}
      <div className="space-y-3">
        <h3 className="text-lg font-medium text-gray-900">Projects</h3>
      </div>

      <div className="space-y-3">
        {projects.map((proj) => (
          <div key={proj.title} className="flex items-baseline gap-3">
            <span className="text-sm text-gray-400 shrink-0">{proj.year}</span>
            <div>
              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-900 hover:text-[#8C1515] transition-colors"
                >
                  {proj.title}
                </a>
              ) : (
                <span className="text-sm font-medium text-gray-900">
                  {proj.title}
                </span>
              )}
              <p className="text-xs text-gray-500">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
