import SocialLinks from "@/components/SocialLinks";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start md:justify-between">
        {/* Bio */}
        <div className="max-w-xl space-y-4">
          <p className="text-gray-700 leading-relaxed">
            I&apos;m a researcher and engineer interested in machine learning, computational
            science, and building tools that make complex ideas accessible. Currently,
            I&apos;m pursuing graduate studies in computer science at a leading university.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Previously, I studied physics and mathematics as an undergraduate. I&apos;ve
            worked on projects spanning scientific computing, natural language processing,
            and data visualization at several research labs and technology companies.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Outside of work, I enjoy reading, hiking, and exploring new cities.
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
