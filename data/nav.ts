import type { Copy } from './locales';

export const navItems = [
  { hash: 'overview', label: { en: 'Overview', es: 'Inicio' } satisfies Copy },
  { hash: 'work', label: { en: 'Projects', es: 'Proyectos' } satisfies Copy },
  {
    hash: 'experience',
    label: { en: 'Architecture', es: 'Trayectoria' } satisfies Copy,
  },
  { hash: 'skills', label: { en: 'Stack', es: 'Stack' } satisfies Copy },
  { hash: 'contact', label: { en: 'Contact', es: 'Contacto' } satisfies Copy },
] as const;

export const heroChips = [
  'Kotlin',
  'Jetpack Compose',
  'Kotlin Multiplatform',
  'Clean Architecture',
  'Coroutines',
  'Flow',
] as const;
