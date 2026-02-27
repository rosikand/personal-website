import Navbar from "@/components/Navbar";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-3xl px-6 pt-8 pb-8 ml-[10%]">
      <Navbar />
      <main className="pt-12">
        {children}
      </main>
    </div>
  );
}
