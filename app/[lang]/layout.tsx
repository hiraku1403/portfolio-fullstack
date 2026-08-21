import type { ReactNode } from "react";

import { notFound } from "next/navigation";

import { isValidLocale, locales, type Locale } from "../../i18n/config";

type LayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

export default async function LangLayout({
  children,
  params,
}: LayoutProps) {
  const { lang } = await params;

  if (!isValidLocale(lang)) {
    notFound();
  }

  const locale: Locale = lang;

  return <>{children}</>;
}