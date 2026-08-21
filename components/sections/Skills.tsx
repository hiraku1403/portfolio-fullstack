import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

interface SkillsProps {
  locale: Locale;
}

export function Skills({ locale }: SkillsProps) {
  const dict = getDictionary(locale);

  const categories = [
    dict.skills.categories.backend,
    dict.skills.categories.integrations,
    dict.skills.categories.data,
    dict.skills.categories.frontend,
    dict.skills.categories.engineering,
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.skills.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.skills.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {dict.skills.description}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {categories.map((content, index) => (
            <article
              key={index}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div>
                <h3 className="text-lg font-semibold">
                  {content.title}
                </h3>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                  {content.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {content.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}