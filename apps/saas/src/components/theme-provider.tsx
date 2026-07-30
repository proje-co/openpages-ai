"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type PlatformTheme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: PlatformTheme;
  resolved: "light" | "dark";
  setTheme: (theme: PlatformTheme) => void;
  toggle: () => void;
};

const STORAGE_KEY = "openpages-platform-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyDomTheme(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.classList.toggle("dark", resolved === "dark");
  root.style.colorScheme = resolved;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<PlatformTheme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as PlatformTheme | null;
    const initial =
      stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    const nextResolved = initial === "system" ? getSystemTheme() : initial;
    setThemeState(initial);
    setResolved(nextResolved);
    applyDomTheme(nextResolved);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const nextResolved = theme === "system" ? getSystemTheme() : theme;
    setResolved(nextResolved);
    applyDomTheme(nextResolved);
    localStorage.setItem(STORAGE_KEY, theme);

    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      const sys = getSystemTheme();
      setResolved(sys);
      applyDomTheme(sys);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme, ready]);

  const setTheme = useCallback((next: PlatformTheme) => {
    setThemeState(next);
  }, []);

  const toggle = useCallback(() => {
    setThemeState((prev) => {
      const current = prev === "system" ? getSystemTheme() : prev;
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  const value = useMemo(
    () => ({ theme, resolved, setTheme, toggle }),
    [theme, resolved, setTheme, toggle],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function usePlatformTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("usePlatformTheme must be used within ThemeProvider");
  }
  return ctx;
}
