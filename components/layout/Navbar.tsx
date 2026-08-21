"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { Locale } from "../../i18n/config";

type NavbarProps = {
  locale?: Locale;
};

const navigation = [
  {
    key: "home",
    label: {
      pt: "Início",
      en: "Home",
    },
    href: "#home",
  },
  {
    key: "about",
    label: {
      pt: "Sobre",
      en: "About",
    },
    href: "#about",
  },
  {
    key: "skills",
    label: {
      pt: "Habilidades",
      en: "Skills",
    },
    href: "#skills",
  },
  {
    key: "experience",
    label: {
      pt: "Experiência",
      en: "Experience",
    },
    href: "#experience",
  },
  {
    key: "projects",
    label: {
      pt: "Projetos",
      en: "Projects",
    },
    href: "#projects",
  },
  {
    key: "contact",
    label: {
      pt: "Contato",
      en: "Contact",
    },
    href: "#contact",
  },
];

export function Navbar({ locale = "pt" }: NavbarProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentLocale = locale === "en" ? "en" : "pt";
  const otherLocale = currentLocale === "pt" ? "en" : "pt";

  const languagePath =
    currentLocale === "pt"
      ? pathname.replace(/^\/pt/, "/en")
      : pathname.replace(/^\/en/, "/pt");

  const normalizedLanguagePath =
    languagePath === pathname
      ? `/${otherLocale}`
      : languagePath;

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="mt-4 flex h-16 items-center justify-between rounded-2xl border border-border bg-background/80 px-4 shadow-lg backdrop-blur-md sm:px-6">
          
          {/* Logo */}
          <Link
            href={`/${currentLocale}#home`}
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Matheus Henn - Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-sm font-bold text-background transition-transform duration-300 group-hover:scale-105">
              MH
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold leading-tight">
                Matheus Henn
              </p>

              <p className="text-xs text-muted">
                Frontend Developer
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.key}
                href={`/${currentLocale}${item.href}`}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {item.label[currentLocale]}
              </Link>
            ))}

            {/* Language Switcher */}
            <LanguageSwitcher
              currentLocale={currentLocale}
              otherLocale={otherLocale}
              href={normalizedLanguagePath}
            />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher
              currentLocale={currentLocale}
              otherLocale={otherLocale}
              href={normalizedLanguagePath}
            />

            <button
              type="button"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={
                isMenuOpen
                  ? "Fechar menu"
                  : "Abrir menu"
              }
              aria-expanded={isMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-secondary"
            >
              <span className="sr-only">
                {isMenuOpen
                  ? "Fechar menu"
                  : "Abrir menu"}
              </span>

              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full bg-current transition-transform ${
                    isMenuOpen
                      ? "translate-y-2 rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`block h-0.5 w-full bg-current transition-opacity ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`block h-0.5 w-full bg-current transition-transform ${
                    isMenuOpen
                      ? "-translate-y-2 -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-2 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.key}
                  href={`/${currentLocale}${item.href}`}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-muted transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label[currentLocale]}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

type LanguageSwitcherProps = {
  currentLocale: Locale;
  otherLocale: Locale;
  href: string;
};

function LanguageSwitcher({
  currentLocale,
  otherLocale,
  href,
}: LanguageSwitcherProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-9 items-center gap-1 rounded-lg border border-border bg-card px-2 text-xs font-semibold transition-colors hover:bg-secondary"
      aria-label={
        otherLocale === "en"
          ? "Switch to English"
          : "Mudar para Português"
      }
      title={
        otherLocale === "en"
          ? "Switch to English"
          : "Mudar para Português"
      }
    >
      <span
        className={
          currentLocale === "pt"
            ? "text-foreground"
            : "text-muted"
        }
      >
        🇧🇷 PT
      </span>

      <span className="text-muted">|</span>

      <span
        className={
          currentLocale === "en"
            ? "text-foreground"
            : "text-muted"
        }
      >
        🇺🇸 EN
      </span>
    </Link>
  );
}