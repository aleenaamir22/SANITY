"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center bg-purple-200 px-3 py-3 rounded-lg mr-4 transition-all"
    >
      <Sun
        className={`w-6 h-6 transition-all duration-300 ease-in-out ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <Moon
        className={`w-6 h-6 transition-all duration-300 ease-in-out ${theme === "light" ? "opacity-0" : "opacity-100"}`}
      />
    </button>
  );
}