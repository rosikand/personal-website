import Link from "next/link";

export default function ResearchStatement() {
  return (
    <article className="space-y-6">
      <div className="space-y-2">
        <Link
          href="/research"
          className="text-sm text-gray-400 transition-colors hover:text-blue-600"
        >
          &larr; Back to research
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">
          Research Statement
        </h1>
      </div>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
        <p>
          My research interests lie at the intersection of machine learning and
          scientific computing. I am broadly interested in developing methods
          that make AI systems more capable, efficient, and reliable.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          Self-Supervised Learning
        </h2>
        <p>
          A core thread of my work focuses on self-supervised learning &mdash;
          training models to learn useful representations from unlabeled data. At
          SAIL (Stanford AI Lab), I worked on contrastive pre-training methods
          that pair ground-level images with remote sensing data, improving
          visual representation learning for natural world imagery. This work was
          published at ECCV 2024.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          Benchmarks &amp; Evaluation
        </h2>
        <p>
          I am also interested in how we evaluate AI systems. I contributed to
          the BIG-bench project, a large-scale collaborative effort to
          quantify and extrapolate the capabilities of language models across
          diverse tasks. This work appeared as a Spotlight paper at ICLR 2023
          and has shaped how the community thinks about LLM evaluation
          methodology.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          ML Engineering &amp; Applied AI
        </h2>
        <p>
          Beyond research, I care deeply about building practical ML systems. At
          insitro, I built segmentation models for computational biology
          applications. I have also developed several open-source tools
          including torchplate (a minimal PyTorch experiment framework) and
          rsbox (a utility toolbox for ML workflows), aimed at reducing
          friction in the ML development cycle.
        </p>

        <h2 className="text-lg font-semibold text-gray-900 pt-2">
          Future Directions
        </h2>
        <p>
          Going forward, I am excited about problems at the frontier of AI
          infrastructure efficiency (GPU utilization, model deployment on edge
          devices), personalization of AI models, and applications of AI in
          healthcare diagnostics. I believe the next wave of progress will come
          from making powerful models smaller, faster, and more tailored to
          individual use cases.
        </p>
      </div>
    </article>
  );
}
