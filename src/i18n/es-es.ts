import type { Strings } from './types';

export const esES: Strings = {
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
    title: 'Catorce repositorios. *Un* ecosistema.',
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
    items: {
      'gatling-kafka-plugin': {
        summary: 'Plugin del protocolo Kafka — produce, request-reply, Avro.',
        detail:
          'Plugin del protocolo Kafka para Gatling. Flujos produce-only y request-reply con serialización simple, helpers de Avro4s e integración con Schema Registry. La correlación de respuestas se configura a nivel de protocolo y la sigue un consumer compartido.',
        bullets: [
          'Produce-only mediante kafka("name").topic(...).send(...)',
          'Request-reply con correlación matchByValue / matchByMessage',
          'Avro4s + Schema Registry, o tu propio Kafka Serde[T]',
          'Gatling 3.13.5 · Scala 2.13.16 · Java 17+',
        ],
      },
      'gatling-jdbc-plugin': {
        summary: 'Plugin JDBC — SQL, lotes, procedimientos almacenados, HikariCP.',
        detail:
          'Ejecuta consultas SQL, inserciones, actualizaciones, operaciones por lotes, SQL en crudo y procedimientos almacenados contra cualquier base de datos compatible con JDBC, con pool de conexiones HikariCP y checks sobre el resultado. Los drivers de cada fabricante no vienen incluidos: añade el de tu base de datos.',
        bullets: [
          'Sentencias preparadas query / queryP, insertInto, rawSql, batch, call',
          'Pool HikariCP con un executor bloqueante dedicado',
          'Checks: allResults, simpleCheck, Gatling EL dentro del SQL',
          'Gatling 3.13.x · Scala 2.13 · Java 11+',
        ],
      },
      'gatling-amqp-plugin': {
        summary: 'AMQP / RabbitMQ — publish, request-reply, consume.',
        detail:
          'Plugin del protocolo AMQP compatible con RabbitMQ: patrones publish, request-reply y consume, pool de canales y publisher confirms. Las colas y los exchanges se pueden declarar desde el propio DSL.',
        bullets: [
          'Publicación con queueExchange / directExchange / topicExchange',
          'Request-reply con matchByMessageId o matchByCorrelationId',
          'DSL completo de propiedades del mensaje, compatible con Gatling EL',
          'Gatling 3.13.x · Scala 2.13 · Java 17+',
        ],
      },
      'gatling-picatinny': {
        summary: 'Extensiones del DSL — feeders, transacciones, JWT, Redis, configuración.',
        detail:
          'Helpers listos para producción sobre el DSL básico de Gatling: configuración estructurada, feeders de datos con Faker, JWT firmados, escenarios sobre Redis, bloques de transacción reutilizables, aserciones de NFR y enmascarado de secretos en los logs.',
        bullets: [
          'SimulationConfig — baseUrl / intensity / duraciones compartidas, con overrides vía -D',
          'Feeders de Faker API, HC Vault, CSV y teléfonos',
          'JWT (HS/RS/ES), transacciones con sus propias métricas de latencia',
          'Gatling 3.13.x desde 1.12.0 · Scala 2.13 · Java 17+',
        ],
      },
      'ai-plugins': {
        summary: 'Galaxio Performance Kit para Cursor, Claude Code y Codex.',
        detail:
          'Los flujos de trabajo de ingeniería de Galaxio empaquetados como plugins portables para agentes. Un plugin se escribe una sola vez: un único árbol skills/ por plugin genera los manifiestos de Cursor, Claude Code y Codex desde un mismo fichero. Incluye galaxio-gatling-pro: pruebas de rendimiento con Gatling JVM al estilo Galaxio.',
        bullets: [
          'galaxio-gatling-pro — Gatling 3.9.x–3.15.x, Scala/Java/Kotlin',
          'sbt, Maven o Gradle · Picatinny · HTTP/JDBC/JMS/Kafka/AMQP',
          'Los manifiestos generados nunca se editan a mano — npm run check detecta la desviación',
          'Apache-2.0 · Node >= 22 · estándar Agent Skills',
        ],
      },
      'galaxio-cli': {
        summary: 'CLI — genera proyectos y scripts a partir de especificaciones de API.',
        detail:
          'Una CLI en Go para flujos de pruebas de rendimiento con Gatling. Genera proyectos de carga listos para compilar a partir de plantillas y crea scripts de Gatling desde Swagger/OpenAPI, grabaciones HAR o colecciones de Postman. Trae un registro por defecto, así que el descubrimiento funciona sin configurar nada.',
        bullets: [
          'template init / list — generar proyectos y descubrir plantillas',
          'generate swagger / har / postman — scripts desde una especificación de API existente',
          'doctor — valida la configuración y el acceso al registro · update — autoactualización',
          'macOS, Linux, Windows · go install, instalador shell o Docker',
        ],
      },
      'templates-gatling': {
        summary: 'Plantillas de Gatling listas para compilar en Scala, Java y Kotlin.',
        detail:
          'El pack de plantillas de Gatling para galaxio-cli. Seis plantillas listas para compilar que cubren Scala, Java y Kotlin sobre sbt, Maven y Gradle, con módulos opcionales de los plugins Kafka, JDBC y AMQP que se generan bajo demanda.',
        bullets: [
          'scala-sbt · scala-gradle · java-maven · java-gradle · kotlin-maven · kotlin-gradle',
          'Capas opcionales de Kafka / JDBC / AMQP mediante las entradas *PluginEnabled',
          'Cualquier entrada se puede sobrescribir con --set o un fichero YAML --values',
          'Pack 0.15.0 · Gatling 3.13.5 · Picatinny 1.17.1',
        ],
      },
      'galaxio-template-registry': {
        summary: 'Registro versionado de plantillas y metadatos.',
        detail:
          'El registro por defecto del que lee galaxio-cli. Guarda plantillas de proyecto versionadas y sus metadatos, para que la CLI pueda resolver la versión de un pack a una release de GitHub y generar desde ahí. Solo hace falta apuntar la CLI a otro sitio si necesitas una fuente privada.',
        bullets: [
          'Fuente por defecto — github:galax-io/galaxio-template-registry',
          'La versión del pack se resuelve a una etiqueta de release de GitHub',
          'Usa el tuyo propio con template configure --registry',
        ],
      },
      'spec-kit-performance': {
        summary: 'Metodología spec-driven-development para pruebas de carga.',
        detail:
          'Una metodología de desarrollo guiado por especificación para pruebas de rendimiento y carga, construida sobre GitHub spec-kit. Codifica los patrones de la metodología de pruebas de carga como una constitución ratificada, de modo que un proyecto avanza como un pipeline gobernado, trazable y con gates, en lugar de un montón de scripts sueltos.',
        bullets: [
          'Cuatro fases, dos actores de entrada — bootstrap, order, spec & plan, build & run',
          'NFR en prosa -> clarificación -> SLO en EARS -> nfr.yml legible por máquina',
          'Se distribuye como un bundle de spec-kit: preset + extension + workflow',
          'Estado: investigación y diseño — el diseño vive en docs/',
        ],
      },
      'spec-kit-galaxio-bootstrap': {
        summary: 'Plantilla Copier — nuestro proceso de desarrollo montado en un proyecto nuevo.',
        detail:
          'Una plantilla de Copier para arrancar un proyecto nuevo con el proceso de desarrollo de Galaxio ya montado: extensiones y presets de spec-kit, el gate de enlace issue-PR-milestone y un AGENTS.md / CLAUDE.md independiente del stack. El stack da igual: el proceso es el mismo en todos los proyectos.',
        bullets: [
          'Elige un stack (scala-sbt / jvm-gradle / node / python / go / generic) y los valores por defecto se rellenan solos',
          'El hook linkage-guard bloquea el etiquetado de releases si no se cumple issue-PR-milestone',
          'copier update integra en tu proyecto los cambios posteriores del proceso con un merge a tres bandas',
          'Instala 7 extensiones de spec-kit y un preset',
        ],
      },
      opennfr: {
        summary: 'Un único formato para los requisitos de carga, sin nombrar ninguna herramienta.',
        detail:
          'Un formato de requisitos de rendimiento independiente de la herramienta. Un único JSON Schema decide qué puede decir un documento RequirementSet, y un corpus de ejemplos se valida contra él en cada commit. Un requisito nombra sus peticiones una sola vez; debajo van los criteria — lo que debe cumplirse — y los guards — si la ejecución que las produjo significó algo. En un documento no se nombra ninguna herramienta, y esa es la propiedad que el formato no va a ceder. Todavía nada lee un documento: un requisito se puede escribir, validar, revisar y versionar, pero no ejecutar.',
        bullets: [
          'selector dice qué peticiones · criteria qué debe cumplirse · guards si la ejecución fue válida',
          'Los predicados son estructurados — metric / aggregation / op / threshold / unit, sin lenguaje de expresiones que parsear',
          'Un guard detecta la ejecución que apuntaba a 200 rps, empujó 5 y aun así salió en verde',
          'Apache-2.0 · JSON Schema Draft 2020-12 · v0.9.0, antes de 1.0',
        ],
      },
      'sbt-schema-registry-plugin': {
        summary: 'Plugin de SBT para Confluent Schema Registry.',
        detail:
          'Añade una tarea de SBT que descarga esquemas Avro y Protobuf desde un Confluent Schema Registry y genera fuentes a partir de ellos, de forma que el código generado sigue alineado con lo que esperan tus productores y consumidores.',
        bullets: [
          'Descarga y generación de esquemas Avro / Protobuf',
          'Mantiene el código generado alineado con el registro',
          'Encaja con el soporte de Avro de gatling-kafka-plugin',
        ],
      },
      'docker-images': {
        summary: 'Imágenes para el CI/CD de Galaxio y el desarrollo local.',
        detail:
          'Imágenes de contenedor usadas por los pipelines de CI/CD de Galaxio y por los entornos de desarrollo local — toolchains fijados para que una ejecución de Gatling se comporte igual en un portátil que en CI.',
        bullets: [
          'Imágenes para CI/CD y desarrollo local',
          'Versiones fijadas de JDK y herramientas de build',
          'Reproducibles entre proveedores de CI',
        ],
      },
      parsec: {
        summary:
          'Primitivas de resultados de carga para Go — un modelo para todas las herramientas.',
        detail:
          'Un modelo canónico para los resultados de una prueba de carga, un decodificador por cada herramienta que los produce y un motor de estadísticas que responde a lo que pregunta un informe. Existe porque Gatling dejó de generar stats.json en la 3.13.5 y desde la 3.13.0 escribe simulation.log en un formato binario sin documentar que solo puede leer esa misma versión de Gatling. Todavía no hay nada implementado: el repositorio contiene el esqueleto, el backlog y un milestone por cada fuente.',
        bullets: [
          'model/ tipos canónicos · gatling/ códecs de texto y binario · stats/ percentiles y series',
          'Fuentes previstas: Gatling 3.11–3.15, JTL de JMeter, k6, Locust, phout de Yandex.Tank',
          'Cada lectura pasa un control de versión — rechaza una anterior, decodifica una posterior desconocida con aviso',
          'MIT · Go · model y gatling solo dependen de la biblioteca estándar',
        ],
      },
    },
    archivedNotes: {
      'galaxio-gatling-pro': 'movido a ai-plugins como plugin del Galaxio Performance Kit',
      'gatling-template.g8': 'reemplazado por templates-gatling',
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
