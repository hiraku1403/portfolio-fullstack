import { notFound } from "next/navigation";

import { Navbar } from "../../components/layout/Navbar";


import { Hero } from "../../components/sections/Hero";
import { About } from "../../components/sections/About";
import { Skills } from "../../components/sections/Skills";
import { Experience } from "../../components/sections/Experience";
import { Projects } from "../../components/sections/Projects";
import { Contact } from "../../components/sections/Contact";

import {
  isValidLocale,
  locales,
  type Locale,
} from "../../i18n/config";

type PageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

export default async function Page({
  params,
}: PageProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;

  return (
    <>
      <Navbar locale={locale} />

      <main>
        <Hero locale={locale} />

        <About locale={locale} />

        <Skills locale={locale} />

        <Experience locale={locale} />

        <Projects locale={locale} />

        <Contact locale={locale} />
      </main>

      
    </>
  );
}