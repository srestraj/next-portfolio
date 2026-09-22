import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ArrowIcon from "./Arrow";

export default function FeaturedWork() {
  return (
    <section id="work" className="section container">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>
            Projects built to <em>ship.</em>
          </h2>
        </div>
        <Link href="/work" className="text-link">
          View all work <ArrowIcon className="arrow-icon" />
        </Link>
      </div>
      <div className="project-grid">
        {featuredProjects.map((project, i) => (
          <ProjectCard project={project} index={i} key={project.slug} />
        ))}
      </div>
    </section>
  );
}
