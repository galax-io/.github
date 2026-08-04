import type { Strings } from './types';
import { esES } from './es-es';

/**
 * Rioplatense Spanish. Spreads es-ES and overrides only what actually
 * differs: voseo (explorá / abrí / mirá / unite / usás / necesitás) and
 * LatAm vocabulary (archivo over fichero, notebook over portátil).
 */
export const esAR: Strings = {
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
    items: {
      ...esES.products.items,
      'gatling-jdbc-plugin': {
        summary: 'Plugin JDBC — SQL, lotes, procedimientos almacenados, HikariCP.',
        detail:
          'Ejecuta consultas SQL, inserciones, actualizaciones, operaciones por lotes, SQL en crudo y procedimientos almacenados contra cualquier base de datos compatible con JDBC, con pool de conexiones HikariCP y checks sobre el resultado. Los drivers de cada fabricante no vienen incluidos: agregá el de tu base de datos.',
        bullets: [
          'Sentencias preparadas query / queryP, insertInto, rawSql, batch, call',
          'Pool HikariCP con un executor bloqueante dedicado',
          'Checks: allResults, simpleCheck, Gatling EL dentro del SQL',
          'Gatling 3.13.x · Scala 2.13 · Java 11+',
        ],
      },
      'ai-plugins': {
        summary: 'Galaxio Performance Kit para Cursor, Claude Code y Codex.',
        detail:
          'Los flujos de trabajo de ingeniería de Galaxio empaquetados como plugins portables para agentes. Un plugin se escribe una sola vez: un único árbol skills/ por plugin genera los manifiestos de Cursor, Claude Code y Codex desde un mismo archivo. Incluye galaxio-gatling-pro: pruebas de rendimiento con Gatling JVM al estilo Galaxio.',
        bullets: [
          'galaxio-gatling-pro — Gatling 3.9.x–3.15.x, Scala/Java/Kotlin',
          'sbt, Maven o Gradle · Picatinny · HTTP/JDBC/JMS/Kafka/AMQP',
          'Los manifiestos generados nunca se editan a mano — npm run check detecta la desviación',
          'Apache-2.0 · Node >= 22 · estándar Agent Skills',
        ],
      },
      'templates-gatling': {
        summary: 'Plantillas de Gatling listas para compilar en Scala, Java y Kotlin.',
        detail:
          'El pack de plantillas de Gatling para galaxio-cli. Seis plantillas listas para compilar que cubren Scala, Java y Kotlin sobre sbt, Maven y Gradle, con módulos opcionales de los plugins Kafka, JDBC y AMQP que se generan bajo demanda.',
        bullets: [
          'scala-sbt · scala-gradle · java-maven · java-gradle · kotlin-maven · kotlin-gradle',
          'Capas opcionales de Kafka / JDBC / AMQP mediante las entradas *PluginEnabled',
          'Cualquier entrada se puede sobrescribir con --set o un archivo YAML --values',
          'Pack 0.15.0 · Gatling 3.13.5 · Picatinny 1.17.1',
        ],
      },
      'galaxio-template-registry': {
        summary: 'Registro versionado de plantillas y metadatos.',
        detail:
          'El registro por defecto del que lee galaxio-cli. Guarda plantillas de proyecto versionadas y sus metadatos, para que la CLI pueda resolver la versión de un pack a una release de GitHub y generar desde ahí. Solo hace falta apuntar la CLI a otro lado si necesitás una fuente privada.',
        bullets: [
          'Fuente por defecto — github:galax-io/galaxio-template-registry',
          'La versión del pack se resuelve a una etiqueta de release de GitHub',
          'Usá el tuyo propio con template configure --registry',
        ],
      },
      'spec-kit-galaxio-bootstrap': {
        summary: 'Plantilla Copier — nuestro proceso de desarrollo montado en un proyecto nuevo.',
        detail:
          'Una plantilla de Copier para arrancar un proyecto nuevo con el proceso de desarrollo de Galaxio ya montado: extensiones y presets de spec-kit, el gate de enlace issue-PR-milestone y un AGENTS.md / CLAUDE.md independiente del stack. El stack da igual: el proceso es el mismo en todos los proyectos.',
        bullets: [
          'Elegí un stack (scala-sbt / jvm-gradle / node / python / go / generic) y los valores por defecto se rellenan solos',
          'El hook linkage-guard bloquea el etiquetado de releases si no se cumple issue-PR-milestone',
          'copier update integra en tu proyecto los cambios posteriores del proceso con un merge a tres bandas',
          'Instala 7 extensiones de spec-kit y un preset',
        ],
      },
      'docker-images': {
        summary: 'Imágenes para el CI/CD de Galaxio y el desarrollo local.',
        detail:
          'Imágenes de contenedor usadas por los pipelines de CI/CD de Galaxio y por los entornos de desarrollo local — toolchains fijados para que una ejecución de Gatling se comporte igual en una notebook que en CI.',
        bullets: [
          'Imágenes para CI/CD y desarrollo local',
          'Versiones fijadas de JDK y herramientas de build',
          'Reproducibles entre proveedores de CI',
        ],
      },
    },
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
