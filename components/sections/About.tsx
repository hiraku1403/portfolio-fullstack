import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const dict = getDictionary(locale);

  return (
    <section
      id="about"
      className="py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.about.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {dict.about.title}
          </h2>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            {dict.about.description}
          </p>
        </div>

        {/* Text */}
        <div className="mt-8 max-w-4xl space-y-5">
          <p className="text-base leading-7 text-muted">
            {dict.about.paragraph2}
          </p>

          <p className="text-base leading-7 text-muted">
            {dict.about.paragraph3}
          </p>
        </div>

        {/* Highlights */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              {dict.about.highlight1.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              {dict.about.highlight1.description}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              {dict.about.highlight2.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              {dict.about.highlight2.description}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">
              {dict.about.highlight3.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-muted">
              {dict.about.highlight3.description}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}