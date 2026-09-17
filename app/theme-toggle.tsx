"use client";

import { useCallback, useId, useSyncExternalStore } from "react";
import { THEMES, THEME_STORAGE_KEY, isTheme, type Theme } from "./theme";

const listeners = new Set<() => void>();
type Preference = Theme | "system";
let preference: Preference = "system";
let current: Theme | null = null;

function read(): Preference {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : "system";
  } catch {
    return "system";
  }
}

function subscribe(onChange: () => void) {
  if (listeners.size === 0) {
    preference = read();
    apply(preference);
  }
  listeners.add(onChange);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (preference === "system") {
      apply(preference);
      listeners.forEach((l) => l());
    }
  };
  // Another tab changing the preference should move this one too.
  const onStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      preference = read();
      apply(preference);
      listeners.forEach((l) => l());
    }
  };
  window.addEventListener("storage", onStorage);
  media.addEventListener("change", onSystemChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
    media.removeEventListener("change", onSystemChange);
  };
}

function apply(theme: Preference) {
  const root = document.documentElement;
  // Unset means "follow the OS", which is what `color-scheme: light dark` on
  // :root already does — so system is an absence, not a third palette.
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  current = theme === "system"
    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    : theme;
}

// The server has no preference to report, and neither does the first client
// render — reading storage during render would disagree with the HTML React is
// hydrating. Neither radio is checked until subscribe() resolves the real theme.
const getSnapshot = () => current;
const getServerSnapshot = () => null;

const LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
};

const ICONS: Record<Theme, React.ReactNode> = {
  light: (
    <>
      <circle cx="9" cy="9" r="3.25" />
      <path d="M9 1.5v1.8M9 14.7v1.8M1.5 9h1.8M14.7 9h1.8M3.7 3.7l1.3 1.3M13 13l1.3 1.3M14.3 3.7L13 5M5 13l-1.3 1.3" />
    </>
  ),
  dark: <path d="M15 10.4A6.4 6.4 0 0 1 7.6 3a6.5 6.5 0 1 0 7.4 7.4Z" />,
};

export default function ThemeToggle() {
  const name = useId();
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const select = useCallback((next: Theme) => {
    preference = next;
    apply(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // A pinned theme that cannot be remembered still applies for this visit.
    }
    listeners.forEach((l) => l());
  }, []);

  return (
    <fieldset className="theme-toggle">
      <legend className="sr-only">Colour theme</legend>
      {THEMES.map((option) => (
        <label className="theme-option" key={option} title={`${LABELS[option]} mode`}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={theme === option}
            onChange={() => select(option)}
          />
          <span className="theme-option-content">
            <span className="sr-only">{LABELS[option]}</span>
            <svg
              viewBox="0 0 18 18"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {ICONS[option]}
            </svg>
          </span>
        </label>
      ))}
    </fieldset>
  );
}
