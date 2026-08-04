import type { Strings } from './types';

export const en: Strings = {
  meta: {
    title: 'Galaxio — One ecosystem. Many moving parts.',
    description:
      'Galaxio Team builds Gatling plugins, AI agent plugins, a CLI, project templates and a spec-driven methodology for performance testing.',
  },
  nav: { products: 'Products', community: 'Community', origin: 'Origin', priority: 'Priority' },
  theme: { light: 'Light', dark: 'Dark', toggle: 'Toggle theme' },
  language: 'Language',
  hero: {
    est: 'Galaxio Team / Est.',
    status: 'System status — synchronized',
    eyebrow: 'Open-source · Performance engineering',
    headline: ['One *eco*', 'system,', 'many moving', 'parts'],
    lede: 'We build *plugins*, a CLI, project templates and portable *AI agent* plugins for Gatling and adjacent performance-testing ecosystems.',
    ctaExplore: 'Explore the system',
    ctaRepos: 'All repositories',
  },
  marquee: [
    'Performance engineering',
    'Gatling · Kafka · JDBC · AMQP',
    'Cursor · Claude Code · Codex',
    'Spec-driven load testing',
    'One organism',
  ],
  products: {
    tag: 'Index / Products',
    title: 'Twelve repositories. *One* ecosystem.',
    kicker:
      'Gatling plugins, AI agent plugins, a CLI, project templates and a spec-driven methodology. Tap any repository to see real usage and open its README.',
    about: '// About',
    highlights: '// Highlights',
    readme: 'Read the README',
    repository: 'Repository ↗',
    copy: 'Copy',
    copied: 'Copied',
    archived: 'Archived',
    groups: {
      plugins: {
        label: 'Gatling Plugins',
        note: 'Published to Maven Central under org.galaxio',
      },
      ai: {
        label: 'AI Plugins',
        note: 'Our engineering practice, portable across agents',
      },
      platform: {
        label: 'Core / Platform',
        note: 'Scaffolding, templates and the CLI that ties them together',
      },
      method: {
        label: 'Methodology / Process',
        note: 'Spec-driven development for performance work',
      },
      tooling: {
        label: 'Tooling / Infrastructure',
        note: 'The supporting cast',
      },
    },
    items: {
      'gatling-kafka-plugin': {
        summary: 'Kafka protocol plugin — produce, request-reply, Avro.',
        detail:
          'Kafka protocol plugin for Gatling. Produce-only and request-reply flows with plain serialization, Avro4s helpers and Schema Registry integration. Reply correlation is configured at the protocol level and tracked by a shared consumer.',
        bullets: [
          'Produce-only via kafka("name").topic(...).send(...)',
          'Request-reply with matchByValue / matchByMessage correlation',
          'Avro4s + Schema Registry, or your own Kafka Serde[T]',
          'Gatling 3.13.5 · Scala 2.13.16 · Java 17+',
        ],
      },
      'gatling-jdbc-plugin': {
        summary: 'JDBC plugin — SQL, batches, stored procedures, HikariCP.',
        detail:
          'Execute SQL queries, inserts, updates, batch operations, raw SQL and stored procedures against any JDBC-compatible database, with HikariCP connection pooling and result checks. Vendor drivers are not bundled — add the one for your database.',
        bullets: [
          'query / queryP prepared statements, insertInto, rawSql, batch, call',
          'HikariCP pooling with a dedicated blocking executor',
          'Checks: allResults, simpleCheck, Gatling EL in SQL',
          'Gatling 3.13.x · Scala 2.13 · Java 11+',
        ],
      },
      'gatling-amqp-plugin': {
        summary: 'AMQP / RabbitMQ — publish, request-reply, consume.',
        detail:
          'AMQP protocol plugin supporting RabbitMQ with publish, request-reply and consume patterns, channel pooling and publisher confirms. Queue and exchange declarations can be driven from the DSL.',
        bullets: [
          'queueExchange / directExchange / topicExchange publishing',
          'Request-reply with matchByMessageId or matchByCorrelationId',
          'Full message-property DSL, all Gatling EL aware',
          'Gatling 3.13.x · Scala 2.13 · Java 17+',
        ],
      },
      'gatling-picatinny': {
        summary: 'DSL extensions — feeders, transactions, JWT, Redis, config.',
        detail:
          'Production-grade helpers on top of the core Gatling DSL: structured configuration, Faker-backed data feeders, signed JWTs, Redis-backed scenarios, reusable transaction blocks, NFR assertions and secret masking in logs.',
        bullets: [
          'SimulationConfig — shared baseUrl / intensity / durations with -D overrides',
          'Faker API feeders, HC Vault, CSV and phone feeders',
          'JWT (HS/RS/ES), transactions with their own latency stats',
          'Gatling 3.13.x since 1.12.0 · Scala 2.13 · Java 17+',
        ],
      },
      'ai-plugins': {
        summary: 'Galaxio Performance Kit for Cursor, Claude Code and Codex.',
        detail:
          'Galaxio engineering workflows packaged as portable agent plugins. One plugin is authored once — a single skills/ tree per plugin generates the Cursor, Claude Code and Codex manifests from one source file. Ships galaxio-gatling-pro: Gatling JVM performance testing in Galaxio style.',
        bullets: [
          'galaxio-gatling-pro — Gatling 3.9.x–3.15.x, Scala/Java/Kotlin',
          'sbt, Maven or Gradle · Picatinny · HTTP/JDBC/JMS/Kafka/AMQP',
          'Generated manifests are never hand-edited — npm run check gates drift',
          'Apache-2.0 · Node >= 22 · Agent Skills standard',
        ],
      },
      'galaxio-cli': {
        summary: 'CLI — scaffold projects, generate scripts from API specs.',
        detail:
          'A Go CLI for Gatling performance-testing workflows. Scaffolds ready-to-compile load-test projects from templates and generates Gatling scripts from Swagger/OpenAPI, HAR recordings or Postman collections. Ships with a default registry, so discovery works with no configuration.',
        bullets: [
          'template init / list — scaffold and discover templates',
          'generate swagger / har / postman — scripts from an existing API spec',
          'doctor — validate config and registry access · update — self-update',
          'macOS, Linux, Windows · go install, shell installer, or Docker',
        ],
      },
      'templates-gatling': {
        summary: 'Ready-to-compile Gatling templates for Scala, Java, Kotlin.',
        detail:
          'The Gatling template pack for galaxio-cli. Six ready-to-compile templates covering Scala, Java and Kotlin on sbt, Maven and Gradle, with optional Kafka, JDBC and AMQP plugin modules rendered on demand.',
        bullets: [
          'scala-sbt · scala-gradle · java-maven · java-gradle · kotlin-maven · kotlin-gradle',
          'Optional Kafka / JDBC / AMQP overlays via *PluginEnabled inputs',
          'Every input overridable with --set or a --values YAML file',
          'Pack 0.15.0 · Gatling 3.13.5 · Picatinny 1.17.1',
        ],
      },
      'galaxio-template-registry': {
        summary: 'Versioned template registry and metadata.',
        detail:
          'The default registry galaxio-cli reads from. Holds versioned project templates and their metadata, so the CLI can resolve a pack version to a GitHub release and render from it. Point the CLI elsewhere only when you need a private source.',
        bullets: [
          'Default source — github:galax-io/galaxio-template-registry',
          'Pack version resolves to a GitHub release tag',
          'Swap in your own with template configure --registry',
        ],
      },
      'spec-kit-performance': {
        summary: 'Spec-driven-development methodology for load testing.',
        detail:
          'A spec-driven-development methodology for performance and load testing, built on GitHub spec-kit. It encodes load-testing methodology patterns as a ratified constitution, so an engagement runs as a governed, traceable, gated pipeline instead of a pile of ad-hoc scripts.',
        bullets: [
          'Four phases, two front-door actors — bootstrap, order, spec & plan, build & run',
          'NFR prose -> clarify -> EARS SLOs -> machine-readable nfr.yml',
          'Shipped as a spec-kit bundle: preset + extension + workflow',
          'Status: research & design — the design lives in docs/',
        ],
      },
      'spec-kit-galaxio-bootstrap': {
        summary: 'Copier template — our dev process wired into a new project.',
        detail:
          'A Copier template for spinning up a new project with the Galaxio development process already wired in: spec-kit extensions and presets, the issue-PR-milestone linkage gate, and a stack-agnostic AGENTS.md / CLAUDE.md. The stack does not matter — the process is the same for every project.',
        bullets: [
          'Pick a stack (scala-sbt / jvm-gradle / node / python / go / generic) and defaults pre-fill',
          'linkage-guard hook blocks release tagging unless issue-PR-milestone holds',
          'copier update 3-way-merges later process changes into your project',
          'Installs 7 spec-kit extensions + a preset',
        ],
      },
      'sbt-schema-registry-plugin': {
        summary: 'SBT plugin for Confluent Schema Registry.',
        detail:
          'Adds an SBT task that downloads Avro and Protobuf schemas from a Confluent Schema Registry and generates sources from them, so generated code stays in sync with whatever your producers and consumers expect.',
        bullets: [
          'Download and generate Avro / Protobuf schemas',
          'Keeps generated code in sync with the registry',
          'Pairs with gatling-kafka-plugin Avro support',
        ],
      },
      'docker-images': {
        summary: 'Images for Galaxio CI/CD and local development.',
        detail:
          'Container images used by Galaxio CI/CD pipelines and local development environments — pinned toolchains so a Gatling run behaves the same on a laptop and in CI.',
        bullets: [
          'Images for CI/CD and local development',
          'Pinned JDK / build-tool versions',
          'Reproducible across CI providers',
        ],
      },
    },
    archivedNotes: {
      'galaxio-gatling-pro': 'moved to ai-plugins as a plugin in the Galaxio Performance Kit',
      'gatling-template.g8': 'superseded by templates-gatling',
    },
  },
  community: {
    tag: 'Index / Community',
    title: 'Built with contributors, *maintainers* and users.',
    kicker:
      'We welcome issues, ideas, documentation improvements, and integrations that help the ecosystem grow.',
    cards: [
      {
        num: '01 / Code',
        title: 'Browse the code',
        body: 'See the repositories, understand how they fit together, and follow the evolution on GitHub.',
      },
      {
        num: '02 / Feedback',
        title: 'Test, report, improve',
        body: 'Try the tools, file bug reports and feature requests. Small documentation fixes are often the fastest way to make a product easier to adopt.',
      },
      {
        num: '03 / Share',
        title: 'Share integrations',
        body: 'If you use Gatling, k6, or adjacent tools in a new way, that context helps us shape the roadmap.',
      },
      {
        num: '04 / Talk',
        title: 'Join QA Load on Telegram',
        body: 'The fastest way to reach the team and the wider community of performance engineers.',
      },
    ],
    tg: {
      eye: 'CH-002 · QA Load · Live',
      headline: 'The signal everybody *tunes into.*',
      body: 'A live community of performance engineers, contributors and Galaxio maintainers. Ask questions, share findings, follow releases — in Russian, English and Spanish.',
      members: 'Members',
      active: 'Active',
      languages: 'Languages',
    },
  },
  manifesto: {
    tag: '§ 03 / Origin',
    title: "The name *Galaxio* comes from Asimov's Galaxia.",
    p1: '*Galaxia* describes a future state where all planets, all humans, all life and even non-living organic matter are incorporated into one single organism.',
    p2: 'We liked the idea because it reflects what we work on: *coordination, scale, and systems working together as one.* Plugins, integrations and workflows are the threads that hold a performance-testing toolchain together — the ecosystem is only as strong as the connections between its parts.',
  },
  priority: {
    tag: 'Index / Priority work',
    title: 'Need something *urgent*? We can fast-track it.',
    body: 'Critical features and integrations can be prioritized as a paid engagement. That is the fastest path when shipping speed matters more than waiting in the regular queue.',
    cta: 'Get in touch',
  },
  footer: {
    about:
      "Open-source plugins, agent tooling and workflows for performance testing. Named after Asimov's Galaxia — coordination, scale, systems working as one.",
    sections: 'Sections',
    repositories: 'Repositories',
    community: 'Community',
    allOnGitHub: 'All on GitHub →',
    telegram: 'Telegram — QA Load',
    githubOrg: 'GitHub org',
    copyright: '© 2026 Galaxio Team · MIT-licensed where applicable',
    tagline: 'One ecosystem, many moving parts.',
  },
};
