import Navbar from "@/components/Navbar";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-8 pb-8 min-h-screen flex flex-col">
      <Navbar />
      <hr className="mt-4 border-gray-200/50" />
      <main className="pt-8 flex-1">
        {children}
      </main>
      <footer className="mt-16 pt-6 border-t border-gray-200/50 flex items-center justify-between text-xs text-gray-400">
        <span>Rohan Sikand</span>
        <div className="flex gap-4">
          <a href="mailto:rsikand@stanford.edu" className="hover:text-gray-600 transition-colors">email</a>
          <a href="https://github.com/rosikand" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">github</a>
          <a href="https://twitter.com/rosikand" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 transition-colors">twitter</a>
        </div>
      </footer>
    </div>
  );
}
