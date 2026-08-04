import type { Locale } from './locales';
import type { GroupId } from '../data/site';

/**
 * UI copy, one entry per locale.
 *
 * Text marked with *asterisks* is rendered as an emphasized span by
 * <Emphasis>; see that component for the exact tag each slot uses.
 *
 * Repository-specific text — product summaries, details, bullets, code
 * captions and archived-repo notes — deliberately stays English in
 * src/data/site.ts, matching the READMEs and code those entries describe.
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

interface Card {
  num: string;
  title: string;
  body: string;
}

const en: Strings = {
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

const ru: Strings = {
  meta: {
    title: 'Galaxio — Одна экосистема. Много движущихся частей.',
    description:
      'Galaxio Team разрабатывает плагины для Gatling, плагины для AI-агентов, CLI, шаблоны проектов и spec-driven методологию нагрузочного тестирования.',
  },
  nav: { products: 'Продукты', community: 'Сообщество', origin: 'Истоки', priority: 'Приоритет' },
  theme: { light: 'Светлая', dark: 'Тёмная', toggle: 'Переключить тему' },
  language: 'Язык',
  hero: {
    est: 'Galaxio Team / Осн.',
    status: 'Статус системы — синхронизирован',
    eyebrow: 'Open-source · Инженерия производительности',
    headline: ['Одна *эко*', 'система,', 'много движущихся', 'частей'],
    lede: 'Мы делаем *плагины*, CLI, шаблоны проектов и переносимые плагины для *AI-агентов* — для Gatling и смежных экосистем нагрузочного тестирования.',
    ctaExplore: 'Изучить систему',
    ctaRepos: 'Все репозитории',
  },
  marquee: [
    'Инженерия производительности',
    'Gatling · Kafka · JDBC · AMQP',
    'Cursor · Claude Code · Codex',
    'Spec-driven нагрузочное тестирование',
    'Единый организм',
  ],
  products: {
    tag: 'Индекс / Продукты',
    title: 'Двенадцать репозиториев. *Одна* экосистема.',
    kicker:
      'Плагины для Gatling, плагины для AI-агентов, CLI, шаблоны проектов и spec-driven методология. Откройте любой репозиторий, чтобы увидеть реальный пример использования и перейти к README.',
    about: '// О продукте',
    highlights: '// Ключевое',
    readme: 'Читать README',
    repository: 'Репозиторий ↗',
    copy: 'Копировать',
    copied: 'Скопировано',
    archived: 'В архиве',
    groups: {
      plugins: {
        label: 'Плагины Gatling',
        note: 'Публикуются в Maven Central под org.galaxio',
      },
      ai: {
        label: 'AI-плагины',
        note: 'Наша инженерная практика, переносимая между агентами',
      },
      platform: {
        label: 'Ядро / Платформа',
        note: 'Скаффолдинг, шаблоны и CLI, который их связывает',
      },
      method: {
        label: 'Методология / Процесс',
        note: 'Spec-driven разработка для задач производительности',
      },
      tooling: {
        label: 'Инструменты / Инфраструктура',
        note: 'Вспомогательный состав',
      },
    },
  },
  community: {
    tag: 'Индекс / Сообщество',
    title: 'Мы строим вместе с контрибьюторами, *мейнтейнерами* и пользователями.',
    kicker:
      'Мы рады issues, идеям, улучшениям документации и интеграциям, которые помогают экосистеме расти.',
    cards: [
      {
        num: '01 / Код',
        title: 'Смотреть код',
        body: 'Изучите репозитории, разберитесь, как они связаны между собой, и следите за развитием на GitHub.',
      },
      {
        num: '02 / Обратная связь',
        title: 'Тестируйте, сообщайте, улучшайте',
        body: 'Пробуйте инструменты, заводите баг-репорты и запросы фич. Небольшие правки в документации часто быстрее всего упрощают внедрение продукта.',
      },
      {
        num: '03 / Опыт',
        title: 'Делитесь интеграциями',
        body: 'Если вы используете Gatling, k6 или смежные инструменты по-новому, этот опыт помогает нам формировать роадмап.',
      },
      {
        num: '04 / Общение',
        title: 'Присоединяйтесь к QA Load в Telegram',
        body: 'Самый быстрый способ связаться с командой и широким сообществом инженеров по нагрузке.',
      },
    ],
    tg: {
      eye: 'CH-002 · QA Load · Live',
      headline: 'Сигнал, который слушают *все.*',
      body: 'Живое сообщество инженеров по производительности, контрибьюторов и мейнтейнеров Galaxio. Задавайте вопросы, делитесь находками, следите за релизами — на русском, английском и испанском.',
      members: 'Участников',
      active: 'Онлайн',
      languages: 'Языки',
    },
  },
  manifesto: {
    tag: '§ 03 / Истоки',
    title: 'Название *Galaxio* восходит к Галаксии Азимова.',
    p1: '*Галаксия* — это будущее состояние, в котором все планеты, все люди, вся жизнь и даже неживая органическая материя объединены в единый организм.',
    p2: 'Нам близка эта идея, потому что она отражает то, чем мы занимаемся: *координация, масштаб и системы, работающие как одно целое.* Плагины, интеграции и рабочие процессы — те нити, что скрепляют инструментарий нагрузочного тестирования: экосистема прочна ровно настолько, насколько прочны связи между её частями.',
  },
  priority: {
    tag: 'Индекс / Приоритетные задачи',
    title: 'Нужно *срочно*? Возьмём в работу вне очереди.',
    body: 'Критичные фичи и интеграции можно приоритизировать в рамках платной работы. Это самый быстрый путь, когда скорость выпуска важнее ожидания в общей очереди.',
    cta: 'Связаться',
  },
  footer: {
    about:
      'Open-source плагины, инструменты для агентов и рабочие процессы для нагрузочного тестирования. Названы в честь Галаксии Азимова — координация, масштаб, системы, работающие как одно целое.',
    sections: 'Разделы',
    repositories: 'Репозитории',
    community: 'Сообщество',
    allOnGitHub: 'Всё на GitHub →',
    telegram: 'Telegram — QA Load',
    githubOrg: 'Организация на GitHub',
    copyright: '© 2026 Galaxio Team · MIT там, где применимо',
    tagline: 'Одна экосистема, много движущихся частей.',
  },
};

const esES: Strings = {
  meta: {
    title: 'Galaxio — Un ecosistema. Muchas piezas en movimiento.',
    description:
      'Galaxio Team desarrolla plugins para Gatling, plugins para agentes de IA, una CLI, plantillas de proyecto y una metodología spec-driven para pruebas de rendimiento.',
  },
  nav: {
    products: 'Productos',
    community: 'Comunidad',
    origin: 'Origen',
    priority: 'Prioridad',
  },
  theme: { light: 'Claro', dark: 'Oscuro', toggle: 'Cambiar tema' },
  language: 'Idioma',
  hero: {
    est: 'Galaxio Team / Desde',
    status: 'Estado del sistema — sincronizado',
    eyebrow: 'Open-source · Ingeniería de rendimiento',
    headline: ['Un *eco*', 'sistema,', 'muchas piezas', 'en movimiento'],
    lede: 'Creamos *plugins*, una CLI, plantillas de proyecto y plugins portables para *agentes de IA*, para Gatling y ecosistemas afines de pruebas de rendimiento.',
    ctaExplore: 'Explora el sistema',
    ctaRepos: 'Todos los repositorios',
  },
  marquee: [
    'Ingeniería de rendimiento',
    'Gatling · Kafka · JDBC · AMQP',
    'Cursor · Claude Code · Codex',
    'Pruebas de carga spec-driven',
    'Un solo organismo',
  ],
  products: {
    tag: 'Índice / Productos',
    title: 'Doce repositorios. *Un* ecosistema.',
    kicker:
      'Plugins para Gatling, plugins para agentes de IA, una CLI, plantillas de proyecto y una metodología spec-driven. Abre cualquier repositorio para ver su uso real y su README.',
    about: '// Acerca de',
    highlights: '// Destacado',
    readme: 'Leer el README',
    repository: 'Repositorio ↗',
    copy: 'Copiar',
    copied: 'Copiado',
    archived: 'Archivado',
    groups: {
      plugins: {
        label: 'Plugins de Gatling',
        note: 'Publicados en Maven Central bajo org.galaxio',
      },
      ai: {
        label: 'Plugins de IA',
        note: 'Nuestra práctica de ingeniería, portable entre agentes',
      },
      platform: {
        label: 'Núcleo / Plataforma',
        note: 'Scaffolding, plantillas y la CLI que los conecta',
      },
      method: {
        label: 'Metodología / Proceso',
        note: 'Desarrollo spec-driven para trabajo de rendimiento',
      },
      tooling: {
        label: 'Herramientas / Infraestructura',
        note: 'El reparto de apoyo',
      },
    },
  },
  community: {
    tag: 'Índice / Comunidad',
    title: 'Construido con colaboradores, *mantenedores* y usuarios.',
    kicker:
      'Damos la bienvenida a issues, ideas, mejoras de documentación e integraciones que ayuden a crecer al ecosistema.',
    cards: [
      {
        num: '01 / Código',
        title: 'Explora el código',
        body: 'Mira los repositorios, entiende cómo encajan entre sí y sigue su evolución en GitHub.',
      },
      {
        num: '02 / Feedback',
        title: 'Prueba, reporta, mejora',
        body: 'Prueba las herramientas, abre reportes de errores y peticiones de funcionalidades. Las pequeñas correcciones de documentación suelen ser la vía más rápida para facilitar la adopción.',
      },
      {
        num: '03 / Experiencia',
        title: 'Comparte integraciones',
        body: 'Si usas Gatling, k6 o herramientas afines de una forma nueva, ese contexto nos ayuda a definir la hoja de ruta.',
      },
      {
        num: '04 / Contacto',
        title: 'Únete a QA Load en Telegram',
        body: 'La forma más rápida de llegar al equipo y a la comunidad de ingenieros de rendimiento.',
      },
    ],
    tg: {
      eye: 'CH-002 · QA Load · Live',
      headline: 'La señal que todo el mundo *sintoniza.*',
      body: 'Una comunidad viva de ingenieros de rendimiento, colaboradores y mantenedores de Galaxio. Pregunta, comparte hallazgos y sigue los lanzamientos — en ruso, inglés y español.',
      members: 'Miembros',
      active: 'Activo',
      languages: 'Idiomas',
    },
  },
  manifesto: {
    tag: '§ 03 / Origen',
    title: 'El nombre *Galaxio* viene de la Galaxia de Asimov.',
    p1: '*Galaxia* describe un estado futuro en el que todos los planetas, todos los humanos, toda la vida e incluso la materia orgánica inerte se integran en un único organismo.',
    p2: 'Nos gustó la idea porque refleja aquello en lo que trabajamos: *coordinación, escala y sistemas que funcionan como uno solo.* Los plugins, las integraciones y los flujos de trabajo son los hilos que sostienen un toolchain de pruebas de rendimiento: el ecosistema es tan fuerte como las conexiones entre sus partes.',
  },
  priority: {
    tag: 'Índice / Trabajo prioritario',
    title: '¿Necesitas algo *urgente*? Podemos adelantarlo.',
    body: 'Las funcionalidades e integraciones críticas pueden priorizarse como trabajo remunerado. Es la vía más rápida cuando la velocidad de entrega importa más que esperar en la cola habitual.',
    cta: 'Hablemos',
  },
  footer: {
    about:
      'Plugins open-source, herramientas para agentes y flujos de trabajo para pruebas de rendimiento. Bautizado por la Galaxia de Asimov — coordinación, escala, sistemas que funcionan como uno solo.',
    sections: 'Secciones',
    repositories: 'Repositorios',
    community: 'Comunidad',
    allOnGitHub: 'Todo en GitHub →',
    telegram: 'Telegram — QA Load',
    githubOrg: 'Organización en GitHub',
    copyright: '© 2026 Galaxio Team · MIT donde corresponda',
    tagline: 'Un ecosistema, muchas piezas en movimiento.',
  },
};

/**
 * Rioplatense Spanish. Differs from es-ES mainly in voseo: second-person
 * imperatives and present-tense forms (explorá / mirá / unite / usás /
 * necesitás), plus "roadmap" over "hoja de ruta" in local dev usage.
 */
const esAR: Strings = {
  ...esES,
  meta: {
    ...esES.meta,
  },
  hero: {
    ...esES.hero,
    ctaExplore: 'Explorá el sistema',
  },
  products: {
    ...esES.products,
    kicker:
      'Plugins para Gatling, plugins para agentes de IA, una CLI, plantillas de proyecto y una metodología spec-driven. Abrí cualquier repositorio para ver su uso real y su README.',
  },
  community: {
    ...esES.community,
    cards: [
      {
        num: '01 / Código',
        title: 'Explorá el código',
        body: 'Mirá los repositorios, entendé cómo encajan entre sí y seguí su evolución en GitHub.',
      },
      {
        num: '02 / Feedback',
        title: 'Probá, reportá, mejorá',
        body: 'Probá las herramientas, abrí reportes de errores y pedidos de funcionalidades. Las pequeñas correcciones de documentación suelen ser la vía más rápida para facilitar la adopción.',
      },
      {
        num: '03 / Experiencia',
        title: 'Compartí integraciones',
        body: 'Si usás Gatling, k6 o herramientas afines de una forma nueva, ese contexto nos ayuda a definir el roadmap.',
      },
      {
        num: '04 / Contacto',
        title: 'Unite a QA Load en Telegram',
        body: 'La forma más rápida de llegar al equipo y a la comunidad de ingenieros de rendimiento.',
      },
    ],
    tg: {
      ...esES.community.tg,
      headline: 'La señal que todos *sintonizan.*',
      body: 'Una comunidad viva de ingenieros de rendimiento, colaboradores y mantenedores de Galaxio. Preguntá, compartí hallazgos y seguí los lanzamientos — en ruso, inglés y español.',
    },
  },
  priority: {
    ...esES.priority,
    title: '¿Necesitás algo *urgente*? Lo podemos adelantar.',
  },
};

export const ui: Record<Locale, Strings> = {
  en,
  ru,
  'es-es': esES,
  'es-ar': esAR,
};
