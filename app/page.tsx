import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between">
        {/* Bio */}
        <div className="max-w-xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I&apos;m Rohan Sikand. I studied computer science (AI) at Stanford,
            completing both my B.S. and M.S. in 2025. My research interests span
            self-supervised learning and ML engineering.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Previously, I worked on self-supervised learning research at{" "}
            <a href="https://ai.stanford.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              SAIL (Stanford AI Lab)
            </a>{" "}
            and built segmentation models at{" "}
            <a href="https://insitro.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              insitro
            </a>.
          </p>
          <p className="text-gray-700 leading-relaxed">
            I also write about startups and venture capital on my Substack,{" "}
            <a href="https://rosikand.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Rohan&apos;s Random Walks
            </a>.
            Outside of work, I enjoy golf and poker.
          </p>
        </div>

        {/* Profile image + theme toggle */}
        <div className="flex flex-col items-center gap-3 flex-shrink-0">
          <div className="h-40 w-40 rounded-full bg-gray-200" />
          <ThemeToggle />
        </div>
      </div>

      {/* Social links */}
      <SocialLinks />
    </div>
  );
}
