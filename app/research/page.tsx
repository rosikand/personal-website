const publications = [
  {
    title: "A Novel Approach to Neural Architecture Search",
    authors: ["Your Name", "Collaborator One", "Advisor Name"],
    venue: "NeurIPS",
    year: 2025,
    tldr: "We propose a gradient-based method for efficiently searching over neural architectures that reduces compute costs by 10x while maintaining competitive accuracy on standard benchmarks.",
    image: "/placeholder-paper.svg",
    links: {
      paper: "#",
      code: "#",
      project: "#",
    },
    tags: ["AutoML", "Optimization"],
  },
  {
    title: "Efficient Methods for Large-Scale Optimization",
    authors: ["Your Name", "Collaborator Two"],
    venue: "ICML",
    year: 2025,
    tldr: "A new family of second-order optimizers that scale linearly with parameter count, enabling practical use in training large language models.",
    image: "/placeholder-paper.svg",
    links: {
      paper: "#",
      code: "#",
    },
    tags: ["Optimization", "LLMs"],
  },
  {
    title: "Benchmarking Foundation Models on Scientific Tasks",
    authors: ["Collaborator Three", "Your Name", "Advisor Name"],
    venue: "ICLR",
    year: 2024,
    tldr: "A comprehensive benchmark suite evaluating foundation models across physics, chemistry, and biology tasks, revealing surprising gaps in scientific reasoning capabilities.",
    image: "/placeholder-paper.svg",
    links: {
      paper: "#",
      project: "#",
    },
    tags: ["Benchmarks", "Foundation Models", "Science"],
  },
  {
    title: "Computational Methods for Fluid Dynamics Simulation",
    authors: ["Your Name", "Collaborator Four"],
    venue: "Journal of Computational Physics",
    year: 2024,
    tldr: "We introduce a neural operator approach to accelerate fluid dynamics simulations, achieving 100x speedup over traditional PDE solvers with bounded error guarantees.",
    image: "/placeholder-paper.svg",
    links: {
      paper: "#",
    },
    tags: ["Scientific Computing", "Neural Operators"],
  },
];

function highlightAuthor(name: string) {
  if (name === "Your Name") {
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
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-gray-900">Research</h2>
        <p className="text-gray-600 leading-relaxed">
          I&apos;m interested in machine learning, scientific computing, and AI
          benchmarks. Below are selected publications &mdash; see{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>{" "}
          for a full list.
        </p>
      </div>

      <div className="space-y-4">
        {publications.map((pub) => (
          <article
            key={pub.title}
            className="group flex gap-4 rounded-lg border border-gray-100 bg-white p-4 transition-shadow hover:shadow-md"
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

              <p className="text-xs text-gray-500 truncate">
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
                    className="text-[11px] font-medium text-blue-600 hover:underline"
                  >
                    [paper]
                  </a>
                )}
                {pub.links.code && (
                  <a
                    href={pub.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-blue-600 hover:underline"
                  >
                    [code]
                  </a>
                )}
                {pub.links.project && (
                  <a
                    href={pub.links.project}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-medium text-blue-600 hover:underline"
                  >
                    [project]
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
