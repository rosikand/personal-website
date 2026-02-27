"use client";

import { useState, useRef, useEffect } from "react";

export default function EmailDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-500 transition-colors hover:text-blue-600"
        aria-label="Email"
      >
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13 2 4" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-8 z-10 rounded-md border border-gray-200 bg-white py-2 shadow-md">
          <a
            href="mailto:rsikand@stanford.edu"
            className="block whitespace-nowrap px-4 py-1.5 text-sm text-gray-600 hover:text-blue-600"
          >
            rsikand@stanford.edu
          </a>
        </div>
      )}
    </div>
  );
}
