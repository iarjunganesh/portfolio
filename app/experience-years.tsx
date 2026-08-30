"use client";

import { useSyncExternalStore } from "react";
import { CAREER_START_DATE } from "./site-config";

const DISPLAY_TIME_ZONE = "Europe/Stockholm";

function dateParts(date: Date) {
  const values = new Intl.DateTimeFormat("en-CA", {
    timeZone: DISPLAY_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  return Object.fromEntries(values.map(({ type, value }) => [type, value]));
}

export function completedExperienceYears(date = new Date()) {
  const [startYear, startMonth, startDay] = CAREER_START_DATE.split("-").map(Number);
  const parts = dateParts(date);
  const year = Number(parts.year);
  const month = Number(parts.month);
  const day = Number(parts.day);
  const beforeAnniversary = month < startMonth || (month === startMonth && day < startDay);

  return year - startYear - Number(beforeAnniversary);
}

// The count is fixed for the whole session — the store never emits.
const subscribe = () => () => {};

export default function ExperienceYears({ suffix = "+" }: { suffix?: string }) {
  // These pages are statically generated, so a long-lived deployment can cross
  // the anniversary while still serving the number baked in at build time.
  //
  // useSyncExternalStore is the primitive for exactly this split: React renders
  // the server snapshot during SSR *and* during hydration, then swaps to the
  // client snapshot after mount. So the markup React hydrates always matches
  // the HTML it was sent, and the number still self-corrects on a stale build.
  // (An inline script that rewrote the text node before hydration did not have
  // that property, and threw a hydration error.)
  const years = useSyncExternalStore(
    subscribe,
    completedExperienceYears,
    completedExperienceYears,
  );

  return (
    <>
      {years}
      {suffix}
    </>
  );
}
