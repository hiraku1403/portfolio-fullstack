"use client";

import Link from "next/link";

import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

interface HeroProps {
  locale: Locale;
}

export function Hero({
  locale,
}: HeroProps) {
  const dict = getDictionary(locale);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Content */}
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-secondary px-4 py-2 text-sm text-muted">
              <span className="mr-2 h-2 w-2 rounded-full bg-foreground" />

              {dict.hero.availability}
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              {dict.hero.role}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {dict.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {dict.hero.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                {dict.hero.projectsButton}
              </Link>

              <Link
                href="#contact"
                className="rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                {dict.hero.contactButton}
              </Link>
            </div>

            {/* Technologies */}
            <div className="mt-10">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                {dict.hero.stackLabel}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "Django",
                  "SQL",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "AI / LLM",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">

            <div className="relative aspect-square rounded-3xl border border-border bg-secondary p-6 shadow-xl">

              <div className="absolute inset-6 rounded-2xl border border-border bg-card" />

              <div className="relative z-10 flex h-full flex-col justify-center p-6">

                <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                  {dict.hero.profileLabel}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  Matheus Henn
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {dict.hero.profileDescription}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted">
                      Backend
                    </p>

                    <p className="mt-1 font-semibold">
                      Python
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted">
                      Full Stack
                    </p>

                    <p className="mt-1 font-semibold">
                      React + Next.js
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted">
                      APIs
                    </p>

                    <p className="mt-1 font-semibold">
                      FastAPI
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-background p-4">
                    <p className="text-xs text-muted">
                      AI
                    </p>

                    <p className="mt-1 font-semibold">
                      LLMs & Agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}