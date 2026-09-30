import type { Copy } from './locales';

export const dictionary = {
  skillsHeading: { en: 'Technical stack', es: 'Stack técnico' },
  experienceHeading: { en: 'Experience', es: 'Experiencia' },
  webHeading: { en: 'Web', es: 'Web' },
  workHeading: { en: 'Featured projects', es: 'Proyectos destacados' },
  projectsPageKicker: {
    en: '// PROJECTS',
    es: '// PROYECTOS',
  },
  projectsPageHeading: {
    en: 'Projects & software architecture',
    es: 'Proyectos y arquitectura de software',
  },
  projectsPageLead: {
    en: 'Signed native and cross-platform work, newest first. Store links appear only when a public Play listing exists.',
    es: 'Trabajo nativo y multiplataforma firmado, del más reciente al más antiguo. Los enlaces a la tienda solo aparecen cuando hay ficha pública en Play.',
  },
  statusProduction: { en: 'Production', es: 'Producción' },
  viewAllProjects: { en: 'View all projects', es: 'Ver todos los proyectos' },
  projectsPageTitle: {
    en: 'Projects',
    es: 'Proyectos',
  },
  contactHeading: { en: "Let's Connect", es: 'Conectemos' },
  languageNavLabel: { en: 'Language', es: 'Idioma' },
  siteNavLabel: { en: 'Sections', es: 'Secciones' },
  english: { en: 'English', es: 'English' },
  spanish: { en: 'Español', es: 'Español' },
  themeToLight: { en: 'Light theme', es: 'Tema claro' },
  themeToDark: { en: 'Dark theme', es: 'Tema oscuro' },
  telemetryMobile: { en: 'Mobile', es: 'Móvil' },
  telemetryWeb: { en: 'Web', es: 'Web' },
  telemetryMobileValue: { en: '+8 years', es: '+8 años' },
  telemetryWebValue: { en: '+1 years', es: '+1 años' },
  contactLead: {
    en: 'Interested in working together or learning more about my projects? Feel free to reach out or connect with me through any of the links below.',
    es: '¿Te interesa trabajar juntos o saber más de mis proyectos? Escríbeme o conéctate conmigo por cualquiera de los enlaces de abajo.',
  },
  externalLinkHint: {
    en: '(opens in a new tab)',
    es: '(se abre en una pestaña nueva)',
  },
  playStore: {
    en: 'Google Play',
    es: 'Google Play',
  },
  techListLabel: {
    en: 'Tech',
    es: 'Tecnologías',
  },
  downloadCv: {
    en: 'Download CV',
    es: 'Descargar CV',
  },
} as const satisfies Record<string, Copy>;
