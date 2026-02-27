import Navbar from "@/components/Navbar";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-8 pb-8">
      <Navbar />
      <hr className="mt-4 border-gray-200/50" />
      <main className="pt-8">
        {children}
      </main>
    </div>
  );
}
