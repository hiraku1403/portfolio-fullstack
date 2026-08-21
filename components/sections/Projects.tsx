import { projects } from "../../data/projects";
import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

import { ProjectCard } from "../../components/ui/ProjectCard";

interface ProjectsProps {
  locale: Locale;
}

export function Projects({
  locale,
}: ProjectsProps) {
  const dict = getDictionary(locale);

  const professionalProjects =
    projects.filter(
      (project) =>
        project.category === "professional"
    );

  const studyProjects =
    projects.filter(
      (project) =>
        project.category === "study"
    );

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.projects.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {dict.projects.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {dict.projects.description}
          </p>
        </div>

        {/* Professional projects */}
        <div className="mt-16">
          <div className="grid gap-6 md:grid-cols-2">
            {professionalProjects.map(
              (project) => (
                <ProjectCard
                  key={project.url}
                  project={project}
                  locale={locale}
                  viewProject={
                    dict.projects.viewProject
                  }
                />
              )
            )}
          </div>
        </div>

        {/* Study projects */}
        {studyProjects.length > 0 && (
          <div className="mt-20">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold">
                {locale === "pt"
                  ? "Projetos de estudo"
                  : "Study projects"}
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {studyProjects.map(
                (project) => (
                  <ProjectCard
                    key={project.url}
                    project={project}
                    locale={locale}
                    viewProject={
                      dict.projects.viewProject
                    }
                  />
                )
              )}
            </div>
          </div>
        )}
      </div>
      <div className="mt-12 flex justify-center">
  <a
    href="https://github.com/hiraku1403/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
  >
    {dict.projects.viewMore}
  </a>
</div>
    </section>
  );
}