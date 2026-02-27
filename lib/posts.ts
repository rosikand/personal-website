export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string[];
  fullWidth?: boolean;
}

const posts: Post[] = [
  {
    slug: "problems-and-ideas-fall-2024",
    title: "Problems and Ideas, c. Fall 2024",
    date: "November 25, 2024",
    summary:
      "Three significant technical and industry challenges I'm actively thinking about.",
    content: [
      "Here are three problems I've been thinking about recently.",
      "GPU Core Utilization: Current AI infrastructure operates at surprisingly low efficiency. The Llama 3 technical report demonstrated 38-43% MFU (Model FLOPs Utilization) during training, meaning even well-resourced labs fail to fully utilize available computing power. With over half a trillion dollars invested in AI infrastructure, this inefficiency represents a substantial economic problem. Potential solutions include better CUDA kernel frameworks, improved GPU programming talent, or specialized hardware design.",
      "Robotics Platform Infrastructure: Existing platforms like ROS are outdated and disconnected from modern AI systems. Forward-thinking companies are rebuilding robotics stacks using systems languages like Rust, enabling on-device deployment of large models. The challenge becomes scaling billion-parameter models for physical robots while maintaining low latency and specialized hardware integration.",
      "Medical AI Diagnostics: Despite academic progress, healthcare adoption of diagnostic AI remains limited due to bureaucratic obstacles, practitioner resistance, and model reliability concerns. Overcoming these barriers could unlock AI's transformative potential in medicine.",
      "I'd love to hear your thoughts on these problems — feel free to reach out.",
    ],
  },
  {
    slug: "personalization-of-ai-models",
    title: "The Next Frontiers: Personalization of AI Models",
    date: "September 15, 2024",
    fullWidth: true,
    summary:
      "How AI models may become increasingly personalized rather than remaining uniform, large-scale systems.",
    content: [
      "This essay explores how AI models may become increasingly personalized rather than remaining uniform, large-scale systems deployed across applications. Instead of using the same massive model for multiple applications, separate fine-tuned versions could be developed for specific use cases.",
      "Computational Gains: Hardware efficiency improvements will make training and running larger models more affordable, potentially enabling 175-billion parameter models to run locally on devices.",
      "Algorithmic Advances: New techniques like inference-time reasoning (exemplified by OpenAI's approach) and State Space Models may reduce the need for enormous model sizes. These developments could enable applications training their own 1B-parameter models rather than relying on massive cloud APIs.",
      "Middle-Layer Technologies: Tools like RAG currently bridge base models and applications, though I'm skeptical about their long-term relevance as smaller specialized models become viable.",
      "Outstanding Challenges: Critical questions remain about updating personalized models with new data and whether in-context learning could eliminate the need for gradient-based updates entirely.",
      "I envision a future where individuals possess a small model living in our device, trained on our own data, that functions as a personalized, intelligent assistant.",
    ],
  },
  {
    slug: "functorch-example",
    title: "A Simple functorch Example",
    date: "November 5, 2022",
    summary:
      "An introduction to functorch — converting stateful PyTorch modules into stateless functions.",
    content: [
      "functorch is a PyTorch library that enables developers to convert stateful neural network modules into stateless functions. Stateless code offers several advantages over traditional object-oriented PyTorch modules, including clearer mathematical representation, reduced computational overhead, and compatibility with function transformations like vmap and grad.",
      "Key arguments for stateless code: less leaky abstractions and clearer mathematical foundations, better alignment between theoretical learning and practical implementation, reduced memory overhead through streamlined internal tracking, and lower-level programming that can facilitate innovation.",
      "The implementation includes a functional approach to gradient computation and parameter updates, demonstrating functorch's capability to bring JAX-like functional programming paradigms to the PyTorch ecosystem. Instead of relying on torch.optim, you can use manual SGD weight updates for a clearer picture of what's happening under the hood.",
      "This approach provides a complete working example demonstrating how to build an image classifier using functorch, training on a mini CIFAR dataset with stateless machine learning.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
