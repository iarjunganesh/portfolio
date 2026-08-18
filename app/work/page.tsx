import type { Metadata } from "next";
import SectionPage from "../section-page";
import WorkItem from "../work-item";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "Work",
  alternates: { canonical: "/work" },
  description:
    "ARGUS, Bastion, DRIFT, Continuum and Banker's Wrapped — five deployed systems or active investigations.",
};

export default function WorkPage() {
  return (
    <SectionPage
      n="02"
      title="Selected systems"
      lede="Five deployed systems or active investigations. Problem, approach, and the evidence behind each one."
    >
      {projects.map((p, i) => (
        <WorkItem key={p.key} p={p} n={i + 1} />
      ))}
    </SectionPage>
  );
}
