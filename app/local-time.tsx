"use client";

import { useSyncExternalStore } from "react";

/**
 * A clock has to change every second, but getSnapshot must return the same
 * value every time React asks within one render — so the tick lives here and
 * getSnapshot only reads it. Reading Date.now() inside getSnapshot would make
 * every render see a new value and loop.
 */
let now = 0;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  if (!timer) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      listeners.forEach((l) => l());
    }, 1000);
  }
  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0) {
      clearInterval(timer);
      timer = undefined;
    }
  };
}

const getSnapshot = () => now;
// The server has no idea what time it is where the reader is, so it renders a
// placeholder of the same width and the clock starts after hydration.
const getServerSnapshot = () => 0;

const PLACEHOLDER = "--:--:--";

export default function LocalTime() {
  const stamp = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (stamp === 0) {
    return (
      <span className="local-time">
        <span className="label">Your time</span>
        <span className="local-time-clock">{PLACEHOLDER}</span>
      </span>
    );
  }

  const date = new Date(stamp);
  const clock = new Intl.DateTimeFormat([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);
  const zone =
    new Intl.DateTimeFormat([], { timeZoneName: "short" })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "";

  return (
    <span className="local-time">
      <span className="label">Your time</span>
      <time className="local-time-clock" dateTime={date.toISOString()}>
        {clock}
      </time>
      {zone && <span className="local-time-zone">{zone}</span>}
    </span>
  );
}
