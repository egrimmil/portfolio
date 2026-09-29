import type { Copy } from './locales';

export const dictionary = {
  skillsHeading: { en: 'Technical stack', es: 'Stack técnico' },
  experienceHeading: { en: 'Experience', es: 'Experiencia' },
  webHeading: { en: 'Web', es: 'Web' },
  workHeading: { en: 'Featured projects', es: 'Proyectos destacados' },
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
} as const satisfies Record<string, Copy>;
