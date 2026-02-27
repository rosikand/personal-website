"use client";

import { useState, useEffect } from "react";

const themes = [
  { name: "White", color: "#ffffff" },
  { name: "Grey", color: "#f5f5f5" },
  { name: "Beige", color: "#f5f0e8" },
];

export default function ThemeToggle() {
  const [themeIndex, setThemeIndex] = useState(1);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background",
      themes[themeIndex].color
    );
  }, [themeIndex]);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <button
      onClick={cycleTheme}
      className="h-5 w-5 rounded-full border border-gray-300 transition-colors hover:border-gray-500"
      style={{ backgroundColor: themes[themeIndex].color }}
      title={themes[themeIndex].name}
      aria-label={`Background: ${themes[themeIndex].name}`}
    />
  );
}
