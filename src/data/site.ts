/** Syntax classes used by the code frames: '' = plain, com = comment, key = keyword, str = string, fn = function. */
export type CodeToken = ['' | 'com' | 'key' | 'str' | 'fn', string];

export interface Product {
  tag: 'Plugin' | 'AI' | 'Core' | 'Method' | 'Tooling';
  name: string;
  summary: string;
  detail: string;
  bullets: string[];
  lang: string;
  code: CodeToken[];
  readme: string;
  repo: string;
}

export interface ProductGroup {
  id: string;
  label: string;
  note: string;
  items: Product[];
}

export interface ArchivedRepo {
  name: string;
  note: string;
  repo: string;
}

export const navLinks = [
  { href: '#products', num: '01', label: 'Products' },
  { href: '#community', num: '02', label: 'Community' },
  { href: '#manifesto', num: '03', label: 'Origin' },
  { href: '#priority', num: '04', label: 'Priority' },
];

export const orbitLabels = [
  'galaxio-cli',
  'kafka-plugin',
  'jdbc-plugin',
  'amqp-plugin',
  'templates-gatling',
  'ai-plugins',
  'picatinny',
];

export const productGroups: ProductGroup[] = [
  {
    id: 'plugins',
    label: 'Gatling Plugins',
    note: 'Published to Maven Central under org.galaxio',
    items: [
      {
        tag: 'Plugin',
        name: 'gatling-kafka-plugin',
        summary: 'Kafka protocol plugin — produce, request-reply, Avro.',
        detail:
          'Kafka protocol plugin for Gatling. Produce-only and request-reply flows with plain serialization, Avro4s helpers and Schema Registry integration. Reply correlation is configured at the protocol level and tracked by a shared consumer.',
        bullets: [
          'Produce-only via kafka("name").topic(...).send(...)',
          'Request-reply with matchByValue / matchByMessage correlation',
          'Avro4s + Schema Registry, or your own Kafka Serde[T]',
          'Gatling 3.13.5 · Scala 2.13.16 · Java 17+',
        ],
        lang: 'scala · build.sbt + simulation',
        // prettier-ignore
        code: [
          ['com', '// build.sbt\n'],
          ['key', 'libraryDependencies'], ['', ' += '], ['str', '"org.galaxio" %% "gatling-kafka-plugin" % "<version>"'], ['', ' % Test\n\n'],
          ['key', 'import'], ['', ' org.galaxio.gatling.kafka.Predef._\n'],
          ['key', 'import'], ['', ' io.gatling.core.Predef._\n\n'],
          ['key', 'val'], ['', ' kafkaConf = kafka\n'],
          ['', '  .properties(Map('], ['str', '"bootstrap.servers"'], ['', ' -> '], ['str', '"localhost:9092"'], ['', '))\n\n'],
          ['key', 'val'], ['', ' scn = '], ['fn', 'scenario'], ['', '('], ['str', '"Kafka Producer"'], ['', ')\n'],
          ['', '  .exec(\n'],
          ['', '    kafka('], ['str', '"send message"'], ['', ')\n'],
          ['', '      .topic('], ['str', '"test-topic"'], ['', ')\n'],
          ['', '      .send[String, String]('], ['str', '"key"'], ['', ', '], ['str', '"""{"msg": "hello"}"""'], ['', ')\n'],
          ['', '  )\n\n'],
          ['fn', 'setUp'], ['', '(scn.inject(atOnceUsers(1))).protocols(kafkaConf)'],
        ],
        readme: 'https://github.com/galax-io/gatling-kafka-plugin#readme',
        repo: 'https://github.com/galax-io/gatling-kafka-plugin',
      },
      {
        tag: 'Plugin',
        name: 'gatling-jdbc-plugin',
        summary: 'JDBC plugin — SQL, batches, stored procedures, HikariCP.',
        detail:
          'Execute SQL queries, inserts, updates, batch operations, raw SQL and stored procedures against any JDBC-compatible database, with HikariCP connection pooling and result checks. Vendor drivers are not bundled — add the one for your database.',
        bullets: [
          'query / queryP prepared statements, insertInto, rawSql, batch, call',
          'HikariCP pooling with a dedicated blocking executor',
          'Checks: allResults, simpleCheck, Gatling EL in SQL',
          'Gatling 3.13.x · Scala 2.13 · Java 11+',
        ],
        lang: 'scala · build.sbt + simulation',
        // prettier-ignore
        code: [
          ['com', '// build.sbt — plugin + your JDBC driver\n'],
          ['key', 'libraryDependencies'], ['', ' ++= '], ['fn', 'Seq'], ['', '(\n'],
          ['', '  '], ['str', '"org.galaxio" %% "gatling-jdbc-plugin" % "<version>"'], ['', ' % Test,\n'],
          ['', '  '], ['str', '"org.postgresql" % "postgresql" % "42.7.11"'], ['', ' % Test,\n'],
          ['', ')\n\n'],
          ['key', 'import'], ['', ' org.galaxio.gatling.jdbc.Predef._\n\n'],
          ['key', 'val'], ['', ' dbConf = DB\n'],
          ['', '  .url('], ['str', '"jdbc:postgresql://localhost:5432/test"'], ['', ')\n'],
          ['', '  .username('], ['str', '"test"'], ['', ').password('], ['str', '"test"'], ['', ')\n'],
          ['', '  .maximumPoolSize(10)\n\n'],
          ['fn', 'scenario'], ['', '('], ['str', '"JDBC Query"'], ['', ')\n'],
          ['', '  .exec(\n'],
          ['', '    jdbc('], ['str', '"find user"'], ['', ')\n'],
          ['', '      .queryP('], ['str', '"SELECT * FROM users WHERE id = {id}"'], ['', ')\n'],
          ['', '      .params('], ['str', '"id"'], ['', ' -> '], ['str', '"#{userId}"'], ['', ')\n'],
          ['', '      .check(simpleCheck(_.nonEmpty))\n'],
          ['', '  )'],
        ],
        readme: 'https://github.com/galax-io/gatling-jdbc-plugin#readme',
        repo: 'https://github.com/galax-io/gatling-jdbc-plugin',
      },
      {
        tag: 'Plugin',
        name: 'gatling-amqp-plugin',
        summary: 'AMQP / RabbitMQ — publish, request-reply, consume.',
        detail:
          'AMQP protocol plugin supporting RabbitMQ with publish, request-reply and consume patterns, channel pooling and publisher confirms. Queue and exchange declarations can be driven from the DSL.',
        bullets: [
          'queueExchange / directExchange / topicExchange publishing',
          'Request-reply with matchByMessageId or matchByCorrelationId',
          'Full message-property DSL, all Gatling EL aware',
          'Gatling 3.13.x · Scala 2.13 · Java 17+',
        ],
        lang: 'scala · build.sbt + simulation',
        // prettier-ignore
        code: [
          ['com', '// build.sbt\n'],
          ['key', 'libraryDependencies'], ['', ' += '], ['str', '"org.galaxio" %% "gatling-amqp-plugin" % "<version>"'], ['', ' % Test\n\n'],
          ['key', 'import'], ['', ' org.galaxio.gatling.amqp.Predef._\n\n'],
          ['key', 'val'], ['', ' amqpConf = amqp\n'],
          ['', '  .connectionFactory(\n'],
          ['', '    rabbitmq.host('], ['str', '"localhost"'], ['', ').port(5672)\n'],
          ['', '      .username('], ['str', '"guest"'], ['', ').password('], ['str', '"guest"'], ['', ').vhost('], ['str', '"/"'], ['', ')\n'],
          ['', '  )\n'],
          ['', '  .usePersistentDeliveryMode\n'],
          ['', '  .matchByMessageId\n\n'],
          ['fn', 'scenario'], ['', '('], ['str', '"AMQP Publish"'], ['', ')\n'],
          ['', '  .exec(\n'],
          ['', '    amqp('], ['str', '"publish"'], ['', ').publish\n'],
          ['', '      .queueExchange('], ['str', '"test-queue"'], ['', ')\n'],
          ['', '      .textMessage('], ['str', '"""{"msg": "hello"}"""'], ['', ')\n'],
          ['', '      .contentType('], ['str', '"application/json"'], ['', ')\n'],
          ['', '  )'],
        ],
        readme: 'https://github.com/galax-io/gatling-amqp-plugin#readme',
        repo: 'https://github.com/galax-io/gatling-amqp-plugin',
      },
      {
        tag: 'Plugin',
        name: 'gatling-picatinny',
        summary: 'DSL extensions — feeders, transactions, JWT, Redis, config.',
        detail:
          'Production-grade helpers on top of the core Gatling DSL: structured configuration, Faker-backed data feeders, signed JWTs, Redis-backed scenarios, reusable transaction blocks, NFR assertions and secret masking in logs.',
        bullets: [
          'SimulationConfig — shared baseUrl / intensity / durations with -D overrides',
          'Faker API feeders, HC Vault, CSV and phone feeders',
          'JWT (HS/RS/ES), transactions with their own latency stats',
          'Gatling 3.13.x since 1.12.0 · Scala 2.13 · Java 17+',
        ],
        lang: 'scala · build.sbt + simulation',
        // prettier-ignore
        code: [
          ['com', '// build.sbt\n'],
          ['key', 'libraryDependencies'], ['', ' += '], ['str', '"org.galaxio" %% "gatling-picatinny" % "VERSION"'], ['', ' % Test\n\n'],
          ['key', 'import'], ['', ' org.galaxio.gatling.config.SimulationConfig._\n'],
          ['key', 'import'], ['', ' org.galaxio.gatling.feeders.faker.Predef._\n\n'],
          ['com', '// shared config from simulation.conf, overridable with -D\n'],
          ['key', 'val'], ['', ' httpProtocol = http.baseUrl(baseUrl)\n\n'],
          ['key', 'val'], ['', ' users = '], ['fn', 'GeneratedFeeder'], ['', '(\n'],
          ['', '  '], ['str', '"email"'], ['', ' -> Faker.internet.email(),\n'],
          ['', '  '], ['str', '"phone"'], ['', ' -> Faker.phone.mobile(Country.RU, PhoneFormatMode.E164),\n'],
          ['', ')\n\n'],
          ['', 'rampUsersPerSec(0).to(intensity).during(rampDuration)'],
        ],
        readme: 'https://github.com/galax-io/gatling-picatinny#readme',
        repo: 'https://github.com/galax-io/gatling-picatinny',
      },
    ],
  },
  {
    id: 'ai',
    label: 'AI Plugins',
    note: 'Our engineering practice, portable across agents',
    items: [
      {
        tag: 'AI',
        name: 'ai-plugins',
        summary: 'Galaxio Performance Kit for Cursor, Claude Code and Codex.',
        detail:
          'Galaxio engineering workflows packaged as portable agent plugins. One plugin is authored once — a single skills/ tree per plugin generates the Cursor, Claude Code and Codex manifests from one source file. Ships galaxio-gatling-pro: Gatling JVM performance testing in Galaxio style.',
        bullets: [
          'galaxio-gatling-pro — Gatling 3.9.x–3.15.x, Scala/Java/Kotlin',
          'sbt, Maven or Gradle · Picatinny · HTTP/JDBC/JMS/Kafka/AMQP',
          'Generated manifests are never hand-edited — npm run check gates drift',
          'Apache-2.0 · Node >= 22 · Agent Skills standard',
        ],
        lang: 'shell · install',
        // prettier-ignore
        code: [
          ['com', '# Claude Code\n'],
          ['', '$ claude plugin marketplace add galax-io/ai-plugins\n\n'],
          ['com', '# Codex\n'],
          ['', '$ codex plugin marketplace add galax-io/ai-plugins\n\n'],
          ['com', '# then install the plugin by name\n'],
          ['', '$ claude plugin install \\\n'],
          ['', '    galaxio-gatling-pro@galaxio-performance-kit\n\n'],
          ['com', '# Cursor: Dashboard -> Plugins -> Add Marketplace\n'],
          ['com', '#         -> Import from Repo\n'],
        ],
        readme: 'https://github.com/galax-io/ai-plugins#readme',
        repo: 'https://github.com/galax-io/ai-plugins',
      },
    ],
  },
  {
    id: 'platform',
    label: 'Core / Platform',
    note: 'Scaffolding, templates and the CLI that ties them together',
    items: [
      {
        tag: 'Core',
        name: 'galaxio-cli',
        summary: 'CLI — scaffold projects, generate scripts from API specs.',
        detail:
          'A Go CLI for Gatling performance-testing workflows. Scaffolds ready-to-compile load-test projects from templates and generates Gatling scripts from Swagger/OpenAPI, HAR recordings or Postman collections. Ships with a default registry, so discovery works with no configuration.',
        bullets: [
          'template init / list — scaffold and discover templates',
          'generate swagger / har / postman — scripts from an existing API spec',
          'doctor — validate config and registry access · update — self-update',
          'macOS, Linux, Windows · go install, shell installer, or Docker',
        ],
        lang: 'shell',
        // prettier-ignore
        code: [
          ['com', '# install (macOS / Linux)\n'],
          ['', '$ curl -fsSL https://raw.githubusercontent.com/galax-io/\\\n'],
          ['', '    galaxio-cli/main/scripts/install.sh | sh\n\n'],
          ['com', '# discover and scaffold\n'],
          ['', '$ galaxio template list\n'],
          ['', '$ galaxio template init gatling/scala-sbt \\\n'],
          ['', '    --set Name=orders-api \\\n'],
          ['', '    --set NameWord=ordersApi \\\n'],
          ['', '    -d ./perf-tests\n\n'],
          ['com', '# generate a simulation from an OpenAPI spec\n'],
          ['', '$ galaxio generate swagger --from ./petstore.yaml --init'],
        ],
        readme: 'https://github.com/galax-io/galaxio-cli#readme',
        repo: 'https://github.com/galax-io/galaxio-cli',
      },
      {
        tag: 'Core',
        name: 'templates-gatling',
        summary: 'Ready-to-compile Gatling templates for Scala, Java, Kotlin.',
        detail:
          'The Gatling template pack for galaxio-cli. Six ready-to-compile templates covering Scala, Java and Kotlin on sbt, Maven and Gradle, with optional Kafka, JDBC and AMQP plugin modules rendered on demand.',
        bullets: [
          'scala-sbt · scala-gradle · java-maven · java-gradle · kotlin-maven · kotlin-gradle',
          'Optional Kafka / JDBC / AMQP overlays via *PluginEnabled inputs',
          'Every input overridable with --set or a --values YAML file',
          'Pack 0.15.0 · Gatling 3.13.5 · Picatinny 1.17.1',
        ],
        lang: 'shell',
        // prettier-ignore
        code: [
          ['com', '# scaffold, then enable optional plugin modules\n'],
          ['', '$ galaxio template init gatling/scala-sbt \\\n'],
          ['', '    --set Name=my-service \\\n'],
          ['', '    --set NameWord=myservice \\\n'],
          ['', '    --set KafkaPluginEnabled=true \\\n'],
          ['', '    --set JdbcPluginEnabled=true \\\n'],
          ['', '    -d ./perf-tests\n\n'],
          ['com', '# compile the rendered project\n'],
          ['', '$ cd perf-tests && sbt -batch Gatling/compile'],
        ],
        readme: 'https://github.com/galax-io/templates-gatling#readme',
        repo: 'https://github.com/galax-io/templates-gatling',
      },
      {
        tag: 'Core',
        name: 'galaxio-template-registry',
        summary: 'Versioned template registry and metadata.',
        detail:
          'The default registry galaxio-cli reads from. Holds versioned project templates and their metadata, so the CLI can resolve a pack version to a GitHub release and render from it. Point the CLI elsewhere only when you need a private source.',
        bullets: [
          'Default source — github:galax-io/galaxio-template-registry',
          'Pack version resolves to a GitHub release tag',
          'Swap in your own with template configure --registry',
        ],
        lang: 'shell',
        // prettier-ignore
        code: [
          ['com', '# the default registry needs no setup, but you can inspect it\n'],
          ['', '$ galaxio template configure --show\n'],
          ['', '$ galaxio doctor\n\n'],
          ['com', '# point at your own registry\n'],
          ['', '$ galaxio template configure \\\n'],
          ['', '    --registry github:my-org/my-registry\n\n'],
          ['com', '# or a local checkout, for one command only\n'],
          ['', '$ galaxio template init mypack/mytemplate \\\n'],
          ['', '    --registry local:/path/to/registry'],
        ],
        readme: 'https://github.com/galax-io/galaxio-template-registry#readme',
        repo: 'https://github.com/galax-io/galaxio-template-registry',
      },
    ],
  },
  {
    id: 'method',
    label: 'Methodology / Process',
    note: 'Spec-driven development for performance work',
    items: [
      {
        tag: 'Method',
        name: 'spec-kit-performance',
        summary: 'Spec-driven-development methodology for load testing.',
        detail:
          'A spec-driven-development methodology for performance and load testing, built on GitHub spec-kit. It encodes load-testing methodology patterns as a ratified constitution, so an engagement runs as a governed, traceable, gated pipeline instead of a pile of ad-hoc scripts.',
        bullets: [
          'Four phases, two front-door actors — bootstrap, order, spec & plan, build & run',
          'NFR prose -> clarify -> EARS SLOs -> machine-readable nfr.yml',
          'Shipped as a spec-kit bundle: preset + extension + workflow',
          'Status: research & design — the design lives in docs/',
        ],
        lang: 'shell · specify',
        // prettier-ignore
        code: [
          ['com', '# discover\n'],
          ['', '$ specify preset search perf\n'],
          ['', '$ specify extension search perf\n\n'],
          ['com', '# install\n'],
          ['', '$ specify init --preset perf\n'],
          ['', '$ specify extension add <id>\n\n'],
          ['com', '# run the gated pipeline\n'],
          ['', '$ specify workflow run'],
        ],
        readme: 'https://github.com/galax-io/spec-kit-performance#readme',
        repo: 'https://github.com/galax-io/spec-kit-performance',
      },
      {
        tag: 'Method',
        name: 'spec-kit-galaxio-bootstrap',
        summary: 'Copier template — our dev process wired into a new project.',
        detail:
          'A Copier template for spinning up a new project with the Galaxio development process already wired in: spec-kit extensions and presets, the issue-PR-milestone linkage gate, and a stack-agnostic AGENTS.md / CLAUDE.md. The stack does not matter — the process is the same for every project.',
        bullets: [
          'Pick a stack (scala-sbt / jvm-gradle / node / python / go / generic) and defaults pre-fill',
          'linkage-guard hook blocks release tagging unless issue-PR-milestone holds',
          'copier update 3-way-merges later process changes into your project',
          'Installs 7 spec-kit extensions + a preset',
        ],
        lang: 'shell · copier',
        // prettier-ignore
        code: [
          ['com', '# install Copier once, isolated\n'],
          ['', '$ uv tool install copier    '], ['com', '# or: pipx install copier'], ['', '\n\n'],
          ['com', '# scaffold a new project (--trust runs post-gen tasks)\n'],
          ['', '$ copier copy --trust \\\n'],
          ['', '    gh:galax-io/spec-kit-galaxio-bootstrap \\\n'],
          ['', '    ~/code/my-new-project\n\n'],
          ['com', '# later, pull template/process updates in\n'],
          ['', '$ cd ~/code/my-new-project && copier update --trust'],
        ],
        readme: 'https://github.com/galax-io/spec-kit-galaxio-bootstrap#readme',
        repo: 'https://github.com/galax-io/spec-kit-galaxio-bootstrap',
      },
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling / Infrastructure',
    note: 'The supporting cast',
    items: [
      {
        tag: 'Tooling',
        name: 'sbt-schema-registry-plugin',
        summary: 'SBT plugin for Confluent Schema Registry.',
        detail:
          'Adds an SBT task that downloads Avro and Protobuf schemas from a Confluent Schema Registry and generates sources from them, so generated code stays in sync with whatever your producers and consumers expect.',
        bullets: [
          'Download and generate Avro / Protobuf schemas',
          'Keeps generated code in sync with the registry',
          'Pairs with gatling-kafka-plugin Avro support',
        ],
        lang: 'scala · plugins.sbt',
        // prettier-ignore
        code: [
          ['com', '// project/plugins.sbt\n'],
          ['fn', 'addSbtPlugin'], ['', '('], ['str', '"org.galaxio" % "sbt-schema-registry-plugin" % "<version>"'], ['', ')\n\n'],
          ['com', '// build.sbt — point at your registry\n'],
          ['key', 'schemaRegistryUrl'], ['', ' := '], ['str', '"http://localhost:8081"'], ['', '\n\n'],
          ['com', '// download the schemas\n'],
          ['', '$ sbt schemaRegistryDownload'],
        ],
        readme: 'https://github.com/galax-io/sbt-schema-registry-plugin#readme',
        repo: 'https://github.com/galax-io/sbt-schema-registry-plugin',
      },
      {
        tag: 'Tooling',
        name: 'docker-images',
        summary: 'Images for Galaxio CI/CD and local development.',
        detail:
          'Container images used by Galaxio CI/CD pipelines and local development environments — pinned toolchains so a Gatling run behaves the same on a laptop and in CI.',
        bullets: [
          'Images for CI/CD and local development',
          'Pinned JDK / build-tool versions',
          'Reproducible across CI providers',
        ],
        lang: 'shell',
        // prettier-ignore
        code: [
          ['com', '# the galaxio CLI is also published as an image\n'],
          ['', '$ docker pull galaxioteam/galaxio:latest\n\n'],
          ['', '$ docker run --rm \\\n'],
          ['', '    -v "$PWD":/work -w /work \\\n'],
          ['', '    galaxioteam/galaxio template list'],
        ],
        readme: 'https://github.com/galax-io/docker-images#readme',
        repo: 'https://github.com/galax-io/docker-images',
      },
    ],
  },
];

export const archived: ArchivedRepo[] = [
  {
    name: 'galaxio-gatling-pro',
    note: 'moved to ai-plugins as a plugin in the Galaxio Performance Kit',
    repo: 'https://github.com/galax-io/galaxio-gatling-pro',
  },
  {
    name: 'gatling-template.g8',
    note: 'superseded by templates-gatling',
    repo: 'https://github.com/galax-io/gatling-template.g8',
  },
];
