"use client";

import {
  FormEvent,
  useState,
} from "react";

import type { Locale } from "../../i18n/config";
import { getDictionary } from "../../i18n/getDictionary";

type ContactProps = {
  locale: Locale;
};

export function Contact({
  locale,
}: ContactProps) {
  const dict = getDictionary(locale);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] =
    useState("");

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name,
            email,
            message,
            locale,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to send message"
        );
      }

      setName("");
      setEmail("");
      setMessage("");

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            {dict.contact.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {dict.contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            {dict.contact.description}
          </p>
        </div>

        {/* Form */}
        <div className="mx-auto mt-16 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="text-sm font-medium"
              >
                {dict.contact.form.name}
              </label>

              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                placeholder={
                  dict.contact.form.namePlaceholder
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="contact-email"
                className="text-sm font-medium"
              >
                {dict.contact.form.email}
              </label>

              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder={
                  dict.contact.form.emailPlaceholder
                }
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="text-sm font-medium"
              >
                {dict.contact.form.message}
              </label>

              <textarea
                id="contact-message"
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder={
                  dict.contact.form.messagePlaceholder
                }
                rows={6}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground"
              />
            </div>

            {/* Status */}
            {status === "success" && (
              <div className="mt-5 rounded-xl border border-border bg-secondary px-4 py-3 text-sm">
                {dict.contact.success}
              </div>
            )}

            {status === "error" && (
              <div className="mt-5 rounded-xl border border-border bg-secondary px-4 py-3 text-sm">
                {!name.trim() ||
                !email.trim() ||
                !message.trim()
                  ? dict.contact.required
                  : dict.contact.error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 w-full rounded-xl bg-foreground px-5 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending"
                ? dict.contact.form.sending
                : dict.contact.form.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}