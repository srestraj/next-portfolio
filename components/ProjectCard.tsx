import Link from "next/link";
import { Project } from "@/data/projects";
import Image from "next/image";
import ArrowIcon from "./Arrow";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article
      className={`project-card project-${index % 2 === 0 ? "wide" : "standard"}`}
    >
      <Link href={`/work/${project.slug}`} className="project-media">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={300}
        />
        <span className="project-index">0{index + 1}</span>
        <span className="project-arrow">
          <ArrowIcon className="arrow-icon" />
        </span>
      </Link>
      <div className="project-meta">
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
      </div>
      <div className="tag-row">
        {project.technologies.slice(0, 5).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
    </article>
  );
}
