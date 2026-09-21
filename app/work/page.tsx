import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
export const metadata: Metadata = {
  title: "Work",
  description: "Selected frontend engineering work by Raj Kumar Shrestha.",
};
export default function WorkPage() {
  return (
    <main>
      <section className="page-hero container">
        <p className="eyebrow">Selected work</p>
        <h1>
          Work that balances <em>product</em> and engineering.
        </h1>
        <p>
          A selection of frontend projects, product interfaces and modernization
          work.
        </p>
      </section>
      <section className="section container">
        <div className="project-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
    </main>
  );
}
