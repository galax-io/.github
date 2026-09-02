/** Syntax classes used by the code frames: '' = plain, com = comment, key = keyword, str = string, fn = function. */
export type CodeToken = ['' | 'com' | 'key' | 'str' | 'fn', string];

export const productNames = [
  'gatling-kafka-plugin',
  'gatling-jdbc-plugin',
  'gatling-amqp-plugin',
  'gatling-picatinny',
  'ai-plugins',
  'galaxio-cli',
  'templates-gatling',
  'galaxio-template-registry',
  'spec-kit-performance',
  'spec-kit-galaxio-bootstrap',
  'opennfr',
  'sbt-schema-registry-plugin',
  'docker-images',
  'parsec',
] as const;

export type ProductName = (typeof productNames)[number];

/**
 * Structure only. Prose — summary, detail and bullets — is translated copy
 * and lives in the locale files, keyed by `name`. Code snippets, version
 * lines and URLs stay here: they are the same in every language.
 */
export interface Product {
  tag: 'Plugin' | 'AI' | 'Core' | 'Method' | 'Tooling';
  name: ProductName;
  lang: string;
  code: CodeToken[];
  readme: string;
  repo: string;
}

export const groupIds = ['plugins', 'ai', 'platform', 'method', 'tooling'] as const;

export type GroupId = (typeof groupIds)[number];

/** Group label and note are UI copy and live in src/i18n/ui.ts, keyed by id. */
export interface ProductGroup {
  id: GroupId;
  items: Product[];
}

export const archivedNames = ['galaxio-gatling-pro', 'gatling-template.g8'] as const;

export type ArchivedName = (typeof archivedNames)[number];

/** The "why it was archived" note is translated copy, keyed by `name`. */
export interface ArchivedRepo {
  name: ArchivedName;
  repo: string;
}

/** `key` indexes into a locale's `nav` strings; labels live in src/i18n/ui.ts. */
export const navLinks = [
  { href: '#products', num: '01', key: 'products' },
  { href: '#community', num: '02', key: 'community' },
  { href: '#manifesto', num: '03', key: 'origin' },
  { href: '#priority', num: '04', key: 'priority' },
] as const;

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
    items: [
      {
        tag: 'Plugin',
        name: 'gatling-kafka-plugin',
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
    items: [
      {
        tag: 'AI',
        name: 'ai-plugins',
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
    items: [
      {
        tag: 'Core',
        name: 'galaxio-cli',
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
    items: [
      {
        tag: 'Method',
        name: 'spec-kit-performance',
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
      {
        tag: 'Method',
        name: 'opennfr',
        lang: 'yaml · requirementset',
        // prettier-ignore
        code: [
          ['com', '# examples/one-request-is-fast.yaml — the smallest document\n'],
          ['key', 'apiVersion'], ['', ': opennfr.io/v1\n'],
          ['key', 'kind'], ['', ': RequirementSet\n'],
          ['key', 'metadata'], ['', ':\n'],
          ['', '  '], ['key', 'name'], ['', ': checkout-perf\n\n'],
          ['key', 'spec'], ['', ':\n'],
          ['', '  '], ['key', 'requirements'], ['', ':\n'],
          ['', '    - '], ['key', 'name'], ['', ': checkout\n'],
          ['', '      '], ['key', 'selector'], ['', ':\n'],
          ['', '        loadtest.request.name: '], ['str', 'POST /checkout'], ['', '\n'],
          ['', '      '], ['key', 'criteria'], ['', ':\n'],
          ['', '        - metric: loadtest.request.duration\n'],
          ['', '          aggregation: p95\n'],
          ['', '          op: lte\n'],
          ['', '          threshold: 500\n'],
          ['', '          unit: ms\n\n'],
          ['com', '# the schema, the corpus, the links and the language\n'],
          ['', '$ '], ['fn', 'bash'], ['', ' scripts/verify.sh'],
        ],
        readme: 'https://github.com/galax-io/opennfr#readme',
        repo: 'https://github.com/galax-io/opennfr',
      },
    ],
  },
  {
    id: 'tooling',
    items: [
      {
        tag: 'Tooling',
        name: 'sbt-schema-registry-plugin',
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
      {
        tag: 'Tooling',
        name: 'parsec',
        lang: 'shell · go get + packages',
        // prettier-ignore
        code: [
          ['com', '# nothing is implemented yet — this is what is being built\n'],
          ['', '$ '], ['fn', 'go'], ['', ' get github.com/galax-io/parsec\n\n'],
          ['com', '# the packages, once they exist\n'],
          ['', '    '], ['key', 'model/'], ['', '    canonical result types shared by every source\n'],
          ['', '    '], ['key', 'gatling/'], ['', '  text and binary codecs, version gate, discovery\n'],
          ['', '    '], ['key', 'stats/'], ['', '    counts, timings, percentiles, per-interval series\n\n'],
          ['com', '# progress is public: small milestones, each ending in a tag\n'],
          ['', '$ '], ['fn', 'gh'], ['', ' release list --repo galax-io/parsec'],
        ],
        readme: 'https://github.com/galax-io/parsec#readme',
        repo: 'https://github.com/galax-io/parsec',
      },
    ],
  },
];

export const archived: ArchivedRepo[] = [
  {
    name: 'galaxio-gatling-pro',
    repo: 'https://github.com/galax-io/galaxio-gatling-pro',
  },
  {
    name: 'gatling-template.g8',
    repo: 'https://github.com/galax-io/gatling-template.g8',
  },
];
