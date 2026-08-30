"use client";

import { useCallback, useSyncExternalStore } from "react";
import { THEMES, THEME_STORAGE_KEY, isTheme, type Theme } from "./theme";

const listeners = new Set<() => void>();
let current: Theme = "system";

function read(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function subscribe(onChange: () => void) {
  if (listeners.size === 0) current = read();
  listeners.add(onChange);
  // Another tab changing the preference should move this one too.
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) {
      current = read();
      apply(current);
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function apply(theme: Theme) {
  const root = document.documentElement;
  // Unset means "follow the OS", which is what `color-scheme: light dark` on
  // :root already does — so system is an absence, not a third palette.
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
}

// The server has no preference to report, and neither does the first client
// render — reading storage during render would disagree with the HTML React is
// hydrating. Both snapshots start at "system"; subscribe() reads the real value.
const getSnapshot = () => current;
const getServerSnapshot = (): Theme => "system";

const LABELS: Record<Theme, string> = {
  system: "Match system",
  light: "Light",
  dark: "Dark",
};

const ICONS: Record<Theme, React.ReactNode> = {
  system: (
    <>
      <rect x="2.5" y="3.5" width="13" height="9" rx="1.5" />
      <path d="M6 15.5h6" />
    </>
  ),
  light: (
    <>
      <circle cx="9" cy="9" r="3.25" />
      <path d="M9 1.5v1.8M9 14.7v1.8M1.5 9h1.8M14.7 9h1.8M3.7 3.7l1.3 1.3M13 13l1.3 1.3M14.3 3.7L13 5M5 13l-1.3 1.3" />
    </>
  ),
  dark: <path d="M15 10.4A6.4 6.4 0 0 1 7.6 3a6.5 6.5 0 1 0 7.4 7.4Z" />,
};

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const select = useCallback((next: Theme) => {
    current = next;
    apply(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // A pinned theme that cannot be remembered still applies for this visit.
    }
    listeners.forEach((l) => l());
  }, []);

  return (
    <div className="theme-toggle" role="radiogroup" aria-label="Colour theme">
      {THEMES.map((option) => (
        <button
          key={option}
          type="button"
          role="radio"
          aria-checked={theme === option}
          aria-label={LABELS[option]}
          title={LABELS[option]}
          data-active={theme === option}
          onClick={() => select(option)}
        >
          <svg
            viewBox="0 0 18 18"
            width="15"
            height="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {ICONS[option]}
          </svg>
        </button>
      ))}
    </div>
  );
}
