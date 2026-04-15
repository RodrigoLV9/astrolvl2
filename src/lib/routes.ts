import { isLocale, type Locale } from "../i18n";

export const PAGE_SEGMENTS = ["home", "services", "process", "blogs", "contact"] as const;
export type PageSegment = (typeof PAGE_SEGMENTS)[number];

export function localizedPage(locale: Locale, segment: PageSegment): string {
  if (locale === "en" && segment === "home") {
    return "/";
  }

  return `/${locale}/${segment}`;
}

export function localizedService(locale: Locale, slug: string): string {
  return `/${locale}/${slug}`;
}

export function localizedBlogPost(locale: Locale, slug: string): string {
  return `/${locale}/blog/${slug}`;
}

export function withLocalePrefix(locale: Locale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    return normalized;
  }

  if (normalized === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalized}`;
}

export function switchLocalePath(currentPathname: string, nextLocale: Locale): string {
  const segments = currentPathname.split("/").filter(Boolean);
  const first = segments[0] ?? "";

  const baseSegments = isLocale(first) ? segments.slice(1) : segments;
  const basePath = baseSegments.join("/");

  if (!basePath) {
    return nextLocale === "en" ? "/" : `/${nextLocale}`;
  }

  if (basePath === "home") {
    return nextLocale === "en" ? "/" : `/${nextLocale}/home`;
  }

  return `/${nextLocale}/${basePath}`;
}
