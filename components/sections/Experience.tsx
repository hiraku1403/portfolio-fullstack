import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";
import { experiences } from "../../data/experience";

interface ExperienceProps {
  locale: Locale;
}

export function Experience({
  locale,
}: ExperienceProps) {
  const dict = getDictionary(locale);

  return (
    <section
      id="experience"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.experience.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.experience.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-muted">
            {dict.experience.description}
          </p>
        </div>

        <div className="relative mt-12">
          <div className="space-y-8">
            {experiences.map(
              (experience, index) => (
                <article
                  key={`${experience.company.pt}-${index}`}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold">
                        {experience.role[locale]}
                      </h3>

                      <p className="mt-1 font-medium text-muted">
                        {experience.company[locale]}
                      </p>
                    </div>

                    <div className="text-sm text-muted sm:text-right">
                      <p>
                        {experience.period[locale]}
                      </p>

                      <p className="mt-1">
                        {experience.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {experience.description[
                      locale
                    ].map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex gap-3 text-sm leading-6 text-muted"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}