import Navbar from "@/components/Navbar";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto flex max-w-5xl px-6 pt-16 pb-8">
      <Navbar />
      <main className="flex-1 min-w-0 pl-8 ml-8 border-l border-gray-200">
        {children}
      </main>
    </div>
  );
}
