import type { Role } from './role';

export const webRoles: Role[] = [
  {
    id: 'wigilabs-web',
    heading: 'Wigilabs',
    employer: 'Wigilabs',
    title: {
      en: 'Web Developer',
      es: 'Desarrollador web',
    },
    period: {
      en: 'Jul 2016 – Jan 2018',
      es: 'Jul. 2016 – ene. 2018',
    },
    duration: {
      en: '1 year 6 months',
      es: '1 año 6 meses',
    },
    context: {
      en: 'Promperú, UniK, TFC, Fundación WWB, Cocoa Fusión, among others.',
      es: 'Promperú, UniK, TFC, Fundación WWB, Cocoa Fusión, entre otros.',
    },
    bullets: [
      {
        en: 'WordPress sites; landing pages; content updates; Moodle.',
        es: 'Sitios WordPress; landing pages; actualización de contenidos; Moodle.',
      },
      {
        en: 'Bootstrap; CSS; AngularJS; JavaScript; jQuery; HTML; PHP; CodeIgniter.',
        es: 'Bootstrap; CSS; AngularJS; JavaScript; jQuery; HTML; PHP; CodeIgniter.',
      },
      {
        en: 'MySQL; SQL; Firebase Firestore and Realtime; TypeScript; hosting.',
        es: 'MySQL; SQL; Firebase Firestore y Realtime; TypeScript; hosting.',
      },
    ],
  },
];
