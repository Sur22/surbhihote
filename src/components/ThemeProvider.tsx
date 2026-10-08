import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const STORAGE_KEY = "mira-theme-choice";
const DEFAULT_THEME: Theme = "light";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  resolved: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    return null;
  }
  return null;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    return getStoredTheme() ?? DEFAULT_THEME;
  });
  const [resolved, setResolved] = useState<Theme>(theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    setResolved(theme);
  }, [theme]);

  const toggle = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === "light" ? "dark" : "light";
      try {
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch {
        // Theme still changes for this session if storage is unavailable.
      }
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, resolved, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
