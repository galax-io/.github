# Galaxio Team

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/galax-io/.github/main/assets/SVG/GLX_Team_Style-03-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/galax-io/.github/main/assets/SVG/GLX_Team_Style-03.svg" />
    <img src="https://raw.githubusercontent.com/galax-io/.github/main/assets/SVG/GLX_Team_Style-03.svg" alt="Galaxio Team" width="100%" />
  </picture>
</p>

<p align="center">
  <strong>We simplify load testing tooling for modern engineering teams</strong><br/>
  Plugins, integrations, and practical workflows for Gatling, k6, and adjacent performance-testing ecosystems.
</p>

<p align="center">
  <a href="https://github.com/galax-io"><img src="https://img.shields.io/badge/GitHub-galax--io-181717?logo=github" alt="GitHub" /></a>
  <a href="https://galaxio.org"><img src="https://img.shields.io/badge/site-galaxio.org-0000FF" alt="Site" /></a>
</p>

---

### What we do

- Build plugins for Gatling, k6, and related tooling
- Design integrations that make load testing easier to adopt
- Ship AI agent plugins that bring our practices into Cursor, Claude Code, and Codex
- Define open, tool-agnostic formats for load-testing requirements and results
- Improve workflows for performance engineering teams
- Reduce complexity in setup, automation, and maintenance

### Our focus

We help teams move faster with cleaner load-testing toolchains, more reliable automation, easier maintenance for testing infrastructure, and practical improvements that fit real delivery workflows.

---

### Plugins

| Repository | Version | Description |
| :-- | :-- | :-- |
| [gatling-kafka-plugin](https://github.com/galax-io/gatling-kafka-plugin) | [![Release](https://img.shields.io/github/v/release/galax-io/gatling-kafka-plugin)](https://github.com/galax-io/gatling-kafka-plugin/releases) | Gatling plugin for Apache Kafka — produce, request-reply, and consume with Avro, Protobuf, Schema Registry. |
| [gatling-jdbc-plugin](https://github.com/galax-io/gatling-jdbc-plugin) | [![Release](https://img.shields.io/github/v/release/galax-io/gatling-jdbc-plugin)](https://github.com/galax-io/gatling-jdbc-plugin/releases) | Gatling plugin for JDBC — SQL queries, batch operations, stored procedures with HikariCP. |
| [gatling-amqp-plugin](https://github.com/galax-io/gatling-amqp-plugin) | [![Release](https://img.shields.io/github/v/release/galax-io/gatling-amqp-plugin)](https://github.com/galax-io/gatling-amqp-plugin/releases) | Gatling plugin for AMQP/RabbitMQ — publish, request-reply, and consume patterns. |
| [gatling-picatinny](https://github.com/galax-io/gatling-picatinny) | [![Release](https://img.shields.io/github/v/release/galax-io/gatling-picatinny)](https://github.com/galax-io/gatling-picatinny/releases) | Gatling DSL extensions — feeders, transactions, assertions, Redis, and utilities. |

### AI Plugins

| Repository | Version | Description |
| :-- | :-- | :-- |
| [ai-plugins](https://github.com/galax-io/ai-plugins) | [![Release](https://img.shields.io/github/v/release/galax-io/ai-plugins)](https://github.com/galax-io/ai-plugins/releases) | Galaxio Performance Kit — engineering workflows as portable agent plugins for Cursor, Claude Code, and Codex. Includes `galaxio-gatling-pro`. |

### Methodology / Process

| Repository | Version | Description |
| :-- | :-- | :-- |
| [spec-kit-performance](https://github.com/galax-io/spec-kit-performance) | — | Spec-driven-development methodology for performance/load testing, built on GitHub spec-kit — constitution, EARS SLOs, gated pipeline. *(research & design)* |
| [spec-kit-galaxio-bootstrap](https://github.com/galax-io/spec-kit-galaxio-bootstrap) | — | Copier template for new projects — spec-kit, issue↔PR↔milestone linkage gate, stack-agnostic `AGENTS.md`/`CLAUDE.md`. |
| [opennfr](https://github.com/galax-io/opennfr) | [![Release](https://img.shields.io/github/v/release/galax-io/opennfr)](https://github.com/galax-io/opennfr/releases) | One format for load-testing requirements that names no tool — a JSON Schema for requirement sets, with a validated example corpus. *(pre-1.0; nothing executes a document yet)* |

### Core / Platform

| Repository | Version | Description |
| :-- | :-- | :-- |
| [galaxio-cli](https://github.com/galax-io/galaxio-cli) | [![Release](https://img.shields.io/github/v/release/galax-io/galaxio-cli)](https://github.com/galax-io/galaxio-cli/releases) | CLI for Galaxio platform — project scaffolding, template management, plugin discovery. |
| [galaxio-template-registry](https://github.com/galax-io/galaxio-template-registry) | [![Release](https://img.shields.io/github/v/release/galax-io/galaxio-template-registry)](https://github.com/galax-io/galaxio-template-registry/releases) | Template registry — versioned project templates and metadata. |
| [templates-gatling](https://github.com/galax-io/templates-gatling) | [![Release](https://img.shields.io/github/v/release/galax-io/templates-gatling)](https://github.com/galax-io/templates-gatling/releases) | Ready-to-use Gatling project templates for Scala, Java, and Kotlin. |

### Tooling / Infrastructure

| Repository | Version | Description |
| :-- | :-- | :-- |
| [sbt-schema-registry-plugin](https://github.com/galax-io/sbt-schema-registry-plugin) | [![Release](https://img.shields.io/github/v/release/galax-io/sbt-schema-registry-plugin)](https://github.com/galax-io/sbt-schema-registry-plugin/releases) | SBT plugin for Confluent Schema Registry — download and generate Avro/Protobuf schemas. |
| [docker-images](https://github.com/galax-io/docker-images) | — | Docker images for Galaxio CI/CD and local development environments. |
| [parsec](https://github.com/galax-io/parsec) | — | Load-test result primitives in Go — one model for Gatling, JMeter, k6, Locust and Yandex.Tank results, with decoders and statistics. *(scaffold & backlog; nothing implemented yet)* |

<details>
<summary>Archived</summary>

| Repository | Description |
| :-- | :-- |
| [galaxio-gatling-pro](https://github.com/galax-io/galaxio-gatling-pro) | Gatling performance-testing skill — moved to [`ai-plugins`](https://github.com/galax-io/ai-plugins) as a plugin in the Galaxio Performance Kit. |
| [gatling-template.g8](https://github.com/galax-io/gatling-template.g8) | Giter8 template for Gatling projects — superseded by `templates-gatling`. |

</details>

---

### Why Galaxio

The name **Galaxio** comes from Isaac Asimov's **Galaxia**.

Galaxia describes a future state where all planets, all humans, all life, and even non-living organic matter are incorporated into one single organism. We liked the idea because it reflects coordination, scale, and systems working together as one.

### Priority work

If you need a critical feature delivered fast, we can prioritize it as a paid engagement.
That is the fastest path for urgent work when shipping quickly matters more than waiting in the regular queue.

### Contributing

We welcome ideas, issues, and contributions.
If you are working on load testing infrastructure and see room for improvement, feel free to reach out or open an issue.
