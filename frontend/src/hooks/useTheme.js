import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "af-portfolio-theme";

function initialTheme() {
  // Warm editorial light mode is the default; only honor an explicit saved "dark".
  try {
    if (window.localStorage.getItem(STORAGE_KEY) === "dark") return "dark";
  } catch {
    // storage unavailable — fall through to default light
  }
  return "light";
}

// Returns "light" | "dark".
export function useTheme() {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme === "dark" ? "dark" : "light";
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore write failures (private mode etc.)
    }
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggle };
}
