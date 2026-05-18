import de from "./dictionaries/de.json";
import deCh from "./dictionaries/de-ch.json";
import dk from "./dictionaries/dk.json";
import en from "./dictionaries/en.json";
import fr from "./dictionaries/fr.json";
import nl from "./dictionaries/nl.json";
import nlGe from "./dictionaries/nl-ge.json";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;
export const translations = { de, "de-ch": deCh, dk, en, fr, nl, "nl-ge": nlGe } as const;
export type Locale = keyof typeof translations;
export const locales = Object.keys(translations) as Locale[];
export const defaultLocale: Locale = "en" as const;

export const pages = ["home", "about"] as const;
export type Page = (typeof pages)[number];
