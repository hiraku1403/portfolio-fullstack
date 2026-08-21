import Image from "next/image";
import Link from "next/link";

import type { Locale } from "../../i18n/config";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  locale: Locale;
  viewProject: string;
}

export function ProjectCard({
  project,
  locale,
  viewProject,
}: ProjectCardProps) {
  const title = project.title[locale];
  const description = project.description[locale];

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Project image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project content */}
      <div className="p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">
            {title}
          </h3>

          {project.featured && (
            <span className="shrink-0 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-6 text-muted">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map(
            (technology) => (
              <span
                key={technology}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted"
              >
                {technology}
              </span>
            )
          )}
        </div>

        {/* Project link */}
        <div className="mt-6">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {viewProject}
          </Link>
        </div>
      </div>
    </article>
  );
}