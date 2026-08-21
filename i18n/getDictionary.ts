import type { Locale } from "./config";

import en from "./en";
import pt from "./pt";

const dictionaries = {
  pt,
  en,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}