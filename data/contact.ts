import type { Copy } from './locales';

export type ContactChannel = {
  id: string;
  label: Copy;
  href: string;
  download?: string;
};

export const contactChannels: ContactChannel[] = [
  {
    id: 'email',
    label: { en: 'Email', es: 'Correo' },
    href: 'mailto:elkin.fracica@gmail.com',
  },
  {
    id: 'linkedin',
    label: { en: 'LinkedIn', es: 'LinkedIn' },
    href: 'https://www.linkedin.com/in/elkin-fracica/',
  },
  {
    id: 'github',
    label: { en: 'GitHub', es: 'GitHub' },
    href: 'https://github.com/egrimmil',
  },
];

/** Same-origin CV file in `public/`. */
export const cvHref = '/elkin-fracica-cv.pdf';
export const cvDownloadName = 'Elkin-Fracica-CV.pdf';

export function publicContactChannels(): ContactChannel[] {
  return [
    ...contactChannels,
    {
      id: 'cv',
      label: { en: 'Download CV', es: 'Descargar CV' },
      href: cvHref,
      download: cvDownloadName,
    },
  ];
}
