<!--
Sync Impact Report
Version: (template) -> 1.0.0
Bump: MAJOR, the first ratified constitution of this repository.
Principles: 1. Public and True; 2. One Catalog, Two Surfaces; 3. Every Locale Complete;
4. A Static Site at a Stable Address; 5. The Gate Stays Green.
Templates: the shared Spec Kit kit is unchanged (it is the template's, scripts/check-speckit.sh).
-->

# .github Constitution

## Precedence

1. The maintainer's direct instruction.
2. The ecosystem constitution (`galax-io/galaxio-sdlc-backlog`, `.specify/memory/constitution.md`).
3. This constitution.
4. This repository's `AGENTS.md`.

This constitution may tighten the ecosystem principles and add its own; it never contradicts them.

## Core Principles

### 1. Public and True

This repository is public and is the organization's face: `profile/README.md` on github.com/galax-io and the site at https://galaxio.org.

- Both surfaces MUST describe only public repositories of galax-io, with links to `github.com/galax-io/<repo>`, and MUST state a repository's real status (pre-1.0, research & design, archived) as its own README does.
- They MUST NOT name, link or describe private repositories or the private orchestration (the backlog, the engine, their runs), and MUST NOT announce a capability a repository has not released.
- No secret, token or credential is committed; the site build needs none.

Rationale: whatever is merged is published to every visitor within one deploy; an overclaim or a leak is public at once.

### 2. One Catalog, Two Surfaces

The profile tables and the site list the same repositories in the same groups (plugins, AI, platform, method, tooling) and the same archived ones.

- Adding, removing, renaming or archiving a repository MUST change `profile/README.md` and `src/data/site.ts` (with the locale strings) in the same pull request.
- The profile references brand files by raw URL on `main` (`assets/SVG/...`); a file in `assets/` MUST NOT be moved or renamed without updating every reference.

Rationale: the two surfaces are read by different audiences and drift silently; `assets/` paths are a public interface of the profile.

### 3. Every Locale Complete

The site ships in `en` (default, at `/`), `ru`, `es-es` and `es-ar` (at `/<locale>/`), with canonical and `hreflang` links.

- Every piece of translatable prose MUST live in the locale files under `src/i18n/`, typed by `Strings`, so that a missing translation fails `astro check`. Components MUST NOT hard-code prose; only brand marks and language-neutral labels stay in code.
- Repository names, URLs, code snippets and version lines MUST live once, in `src/data/site.ts`, never in a locale file.
- A new locale MUST be added to every map in `src/i18n/locales.ts` and to `src/i18n/ui.ts`.
- Controls MUST keep an accessible name (`aria-label`), translated where it is prose; decorative graphics stay `aria-hidden`.

Rationale: a page that is complete in one language and stale in another misinforms the readers of that language.

### 4. A Static Site at a Stable Address

- The site MUST stay a static Astro build with no server runtime, served by GitHub Pages from `main` (`.github/workflows/deploy.yml`) at `https://galaxio.org` (`site` in `astro.config.mjs`, `public/CNAME`).
- Changing the domain, the deploy workflow or the URL scheme of the locales is a deliberate change that the maintainer approves first.
- The site MUST NOT add analytics, tracking or third-party scripts without the maintainer's decision. Today its only third-party request is Google Fonts and its only stored state is the theme (`galaxio-theme` in `localStorage`).

Rationale: every push to `main` deploys; links to galaxio.org from other repositories and search engines depend on the address and the locale paths.

### 5. The Gate Stays Green

- Every pull request MUST pass `npm run validate`: `prettier --check .`, `astro check` and `astro build`, as `.github/workflows/ci.yml` runs them.
- Files excluded from Prettier stay excluded on purpose: `README.md` and `profile/` (authored content), `AGENTS.md`/`CLAUDE.md` and the Spec Kit kit (rendered from spec-kit-galaxio-bootstrap).
- TypeScript MUST stay below major 7 until `astro check` supports it (`.github/dependabot.yml` explains why).

Rationale: there are no unit tests; the type check and the build are what stop a broken page from being deployed.

## Development Workflow and Quality Gates

- Work follows the ecosystem constitution and `AGENTS.md`: every pull request has a milestone and links its feature (`Part of galax-io/galaxio-sdlc-backlog#N`), checked by `.github/workflows/linkage.yml`; the kit is checked by `.github/workflows/speckit.yml`.
- `catalog-info.yaml` (component `github`, type `website`) is changed deliberately, never as a side effect.
- A spec that touches this repository states which surfaces it changes (profile, site, both) and which locales it updates.

## Governance

This constitution is amended by a pull request that edits this file, bumps its version (MAJOR for a removed or redefined principle, MINOR for a new principle or section, PATCH for wording) and updates the Sync Impact Report. Reviews and spec critics check changes against it; a conflict with `AGENTS.md` is resolved in favour of this file.

**Version**: 1.0.0 | **Ratified**: 2026-10-20 | **Last Amended**: 2026-10-20
