import type { ArchivedName, GroupId, ProductName } from '../data/site';

/**
 * Every user-visible string on the site, one entry per locale.
 *
 * Text marked with *asterisks* is rendered as an emphasized span by
 * <Emphasis>; see that component for the tag each slot uses.
 *
 * Not in here, because it is identical in every language: repository names,
 * code snippets, the `lang` caption naming the file a snippet belongs to
 * (`scala · build.sbt`), version lines and URLs.
 */
export interface Strings {
  meta: { title: string; description: string };
  nav: { products: string; community: string; origin: string; priority: string };
  theme: { light: string; dark: string; toggle: string };
  language: string;
  hero: {
    est: string;
    status: string;
    eyebrow: string;
    /** Line 1 carries the *blue* fragment, line 2 is the outlined one. */
    headline: [string, string, string, string];
    lede: string;
    ctaExplore: string;
    ctaRepos: string;
  };
  marquee: [string, string, string, string, string];
  products: {
    tag: string;
    title: string;
    kicker: string;
    about: string;
    highlights: string;
    readme: string;
    repository: string;
    copy: string;
    copied: string;
    archived: string;
    groups: Record<GroupId, { label: string; note: string }>;
    items: Record<ProductName, ProductCopy>;
    archivedNotes: Record<ArchivedName, string>;
  };
  community: {
    tag: string;
    title: string;
    kicker: string;
    cards: [Card, Card, Card, Card];
    tg: {
      eye: string;
      headline: string;
      body: string;
      members: string;
      active: string;
      languages: string;
    };
  };
  manifesto: { tag: string; title: string; p1: string; p2: string };
  priority: { tag: string; title: string; body: string; cta: string };
  footer: {
    about: string;
    sections: string;
    repositories: string;
    community: string;
    allOnGitHub: string;
    telegram: string;
    githubOrg: string;
    copyright: string;
    tagline: string;
  };
}

export interface ProductCopy {
  summary: string;
  detail: string;
  bullets: string[];
}

export interface Card {
  num: string;
  title: string;
  body: string;
}
