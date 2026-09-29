import type { Copy } from './locales';

export type NavItem = {
  id: string;
  href: (locale: string) => string;
  label: Copy;
  match: 'home-hash' | 'projects';
};

export const navItems: NavItem[] = [
  {
    id: 'overview',
    href: (locale) => `/${locale}#overview`,
    label: { en: 'Overview', es: 'Inicio' },
    match: 'home-hash',
  },
  {
    id: 'projects',
    href: (locale) => `/${locale}/projects`,
    label: { en: 'Projects', es: 'Proyectos' },
    match: 'projects',
  },
  {
    id: 'experience',
    href: (locale) => `/${locale}#experience`,
    label: { en: 'Architecture', es: 'Trayectoria' },
    match: 'home-hash',
  },
  {
    id: 'skills',
    href: (locale) => `/${locale}#skills`,
    label: { en: 'Stack', es: 'Stack' },
    match: 'home-hash',
  },
  {
    id: 'contact',
    href: (locale) => `/${locale}#contact`,
    label: { en: 'Contact', es: 'Contacto' },
    match: 'home-hash',
  },
];

export const heroChips = [
  'Kotlin',
  'Jetpack Compose',
  'Kotlin Multiplatform',
  'Clean Architecture',
  'Coroutines',
  'Flow',
] as const;
