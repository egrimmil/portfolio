import type { Copy } from './locales';

export const dictionary = {
  workHeading: { en: 'Work', es: 'Trabajo' },
  contactHeading: { en: 'Contact', es: 'Contacto' },
  languageNavLabel: { en: 'Language', es: 'Idioma' },
  english: { en: 'English', es: 'English' },
  spanish: { en: 'Español', es: 'Español' },
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
