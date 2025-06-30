"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`p-2 rounded-lg transition-colors duration-200 hover:cursor-pointer
        ${isLight
          ? "bg-black text-white hover:bg-gray-800"
          : "bg-gray-700 text-white hover:bg-gray-600"
        }
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900
      `}
    >
      {/* these emojis are not entirely accessible on older browsers, in real world I would consider SVGs given by my design team */}
      {isLight ? "🌙" : "☀️"}
    </button>
  );
}
