"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { usePlatformTheme, type PlatformTheme } from "./theme-provider";

const OPTIONS: { id: PlatformTheme; label: string; Icon: typeof Sun }[] = [
  { id: "light", label: "Light", Icon: Sun },
  { id: "dark", label: "Dark", Icon: Moon },
  { id: "system", label: "System", Icon: Monitor },
];

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, resolved, setTheme, toggle } = usePlatformTheme();

  if (compact) {
    return (
      <button
        type="button"
        onClick={toggle}
        title={`Theme: ${resolved} (click to toggle)`}
        className="rounded-full border border-border/60 p-1.5 text-muted-foreground transition hover:text-foreground"
      >
        {resolved === "light" ? (
          <Sun className="h-3.5 w-3.5" />
        ) : (
          <Moon className="h-3.5 w-3.5" />
        )}
      </button>
    );
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border/60 bg-background/50 p-0.5">
      {OPTIONS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          title={label}
          onClick={() => setTheme(id)}
          className={`rounded-full p-1.5 transition ${
            theme === id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Icon className="h-3.5 w-3.5" />
        </button>
      ))}
    </div>
  );
}
