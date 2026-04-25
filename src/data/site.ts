export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/team', label: 'Team' },
  { href: '/community', label: 'Community' },
];

export const products = [
  {
    name: 'gatling-jdbc-plugin',
    summary: 'Simple Gatling plugin for JDBC-based scenarios.',
    detail:
      'Designed for teams that need realistic database-backed load tests without extra integration friction.',
    href: 'https://github.com/galax-io/gatling-jdbc-plugin',
    tag: 'Core',
  },
  {
    name: 'gatling-amqp-plugin',
    summary: 'Performance testing with AMQP in Gatling.',
    detail:
      'Useful for teams validating messaging flows and event-driven architectures.',
    href: 'https://github.com/galax-io/gatling-amqp-plugin',
    tag: 'Core',
  },
  {
    name: 'gatling-kafka-plugin',
    summary: 'Gatling protocol plugin for Kafka workloads.',
    detail:
      'Helps model high-throughput messaging scenarios in a practical way.',
    href: 'https://github.com/galax-io/gatling-kafka-plugin',
    tag: 'Core',
  },
  {
    name: 'gatling-picatinny',
    summary: 'Utility extensions for the Gatling DSL.',
    detail:
      'Reduces boilerplate and keeps test suites easier to maintain over time.',
    href: 'https://github.com/galax-io/gatling-picatinny',
    tag: 'Core',
  },
  {
    name: 'sbt-schema-registry-plugin',
    summary: 'SBT plugin for downloading schemas from a schema registry.',
    detail:
      'Helps teams manage schema-driven workflows in performance test projects.',
    href: 'https://github.com/galax-io/sbt-schema-registry-plugin',
    tag: 'Other',
  },
  {
    name: 'gatling-template.g8',
    summary: 'Giter8 template for starting Gatling projects faster.',
    detail:
      'A practical starting point for repeatable performance test repositories.',
    href: 'https://github.com/galax-io/gatling-template.g8',
    tag: 'Other',
  },
  {
    name: 'docker-images',
    summary: 'Docker images maintained by Galaxio Team.',
    detail:
      'Reusable images that support the surrounding tooling and automation.',
    href: 'https://github.com/galax-io/docker-images',
    tag: 'Other',
  },
];

export const people = [
  {
    initials: 'EN',
    name: 'Engineering',
    role: 'Core team',
    bio: 'Builds plugins, integrations, and the technical paths around them.',
    accent: 'cyan',
  },
  {
    initials: 'PR',
    name: 'Product',
    role: 'Core team',
    bio: 'Keeps the roadmap focused on useful tooling and real outcomes.',
    accent: 'lime',
  },
  {
    initials: 'CO',
    name: 'Community',
    role: 'Core team',
    bio: 'Works with contributors, users, maintainers, and ecosystem feedback.',
    accent: 'violet',
  },
  {
    initials: 'DL',
    name: 'Delivery',
    role: 'Priority work',
    bio: 'Handles urgent paid engagements and fast-track feature requests.',
    accent: 'amber',
  },
];

export const contributionPaths = [
  {
    title: 'Browse the code',
    description:
      'Explore the repositories, open issues, and see how the ecosystem fits together.',
  },
  {
    title: 'Improve the docs',
    description:
      'Small documentation fixes often help more people than new features do.',
  },
  {
    title: 'Share integrations',
    description:
      'If you use Gatling, k6, or adjacent tooling in a new way, we want to hear about it.',
  },
];
