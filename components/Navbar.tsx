"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Blog" },
  { href: "/misc", label: "Misc" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-8 flex w-40 shrink-0 flex-col gap-6">
      <Link href="/" className="text-lg font-semibold text-gray-900">
        Rohan Sikand
      </Link>
      <div className="flex flex-col gap-3">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-sm transition-colors hover:text-blue-600 ${
              pathname === href || (href !== "/" && pathname.startsWith(href))
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
