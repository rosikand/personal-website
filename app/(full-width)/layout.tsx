export default function FullWidthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-16 pb-8">
      {children}
    </div>
  );
}
