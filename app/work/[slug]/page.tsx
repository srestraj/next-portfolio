import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return {
    title: p?.title ?? "Work",
    description: p?.description,
    openGraph: {
      title: p?.title ?? "Work",
      description: p?.description,
      images: [p?.image ? p.image : "/raj-og-img.png"],
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <main>
      <section className="project-hero container">
        <Link className="back-link" href="/work">
          ← All work
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-intro">{project.description}</p>
        <div className="project-cover">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={300}
          />
        </div>
      </section>
      <section className="project-details container">
        <div>
          <p className="eyebrow">Project details</p>
        </div>
        <div className="details-grid">
          <div>
            <span>Role</span>
            <strong>{project.role}</strong>
          </div>
          <div>
            <span>Year</span>
            <strong>{project.year}</strong>
          </div>
          <div>
            <span>Technology</span>
            <strong>{project.technologies.join(" · ")}</strong>
          </div>
          {project.site && (
            <div>
              <span>Website</span>
              <a href={project.site} target="_blank" rel="noreferrer">
                Visit project ↗
              </a>
            </div>
          )}
        </div>
      </section>
      <section className="section container case-study">
        <p className="eyebrow">Overview</p>
        <h2>
          Building a frontend that <em>works.</em>
        </h2>
        <div className="case-grid">
          {project.details.map((d, i) => (
            <div key={i}>
              <span>0{i + 1}</span>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
