import type { Metadata } from "next";
import SectionPage from "../section-page";
import WorkItem from "../work-item";
import { projects } from "../data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "ARGUS, Bastion, DRIFT, Continuum and Banker's Wrapped — five systems in production or active development.",
};

export default function WorkPage() {
  return (
    <SectionPage
      n="02"
      title="Selected systems"
      lede="Five systems in production or active development. Problem, approach, and what each one actually guarantees."
    >
      {projects.map((p, i) => (
        <WorkItem key={p.key} p={p} n={i + 1} />
      ))}
    </SectionPage>
  );
}
