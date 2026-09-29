import type { Copy } from './locales';

export const profile = {
  name: 'Elkin Fracica',
  role: {
    en: 'Senior Android Developer',
    es: 'Desarrollador Android Senior',
  } satisfies Copy,
  experienceSummary: {
    en: 'Mobile: +8 years / Web: +1 years',
    es: 'Móvil: +8 años / Web: +1 años',
  } satisfies Copy,
  aboutHeading: {
    en: 'About',
    es: 'Sobre mí',
  } satisfies Copy,
  about: [
    {
      en: 'I’m a Systems Engineer with a Master’s degree in Cybersecurity and a software engineer specialized in Android and Kotlin Multiplatform. I design and build reliable, scalable mobile applications using Kotlin, Jetpack Compose, Clean Architecture, and modern development practices.',
      es: 'Soy ingeniero de sistemas con maestría en ciberseguridad y, como ingeniero de software, me especializo en Android y Kotlin Multiplatform. Diseño y construyo aplicaciones móviles confiables y escalables con Kotlin, Jetpack Compose, Clean Architecture y prácticas de desarrollo modernas.',
    },
    {
      en: 'My experience combines mobile development, software architecture, application security, and cross-platform engineering. I enjoy turning complex requirements into maintainable products and continuously exploring better ways to build and deliver software.',
      es: 'Mi experiencia combina desarrollo móvil, arquitectura de software, seguridad de aplicaciones e ingeniería multiplataforma. Disfruto convertir requisitos complejos en productos mantenibles y explorar de forma continua mejores maneras de construir y entregar software.',
    },
  ] satisfies Copy[],
  location: 'Bogotá D.C., Colombia',
  locationLabel: {
    en: 'Location',
    es: 'Ciudad',
  } satisfies Copy,
  availability: {
    en: 'Open to work',
    es: 'Disponible para trabajar',
  } satisfies Copy,
  availabilityLabel: {
    en: 'Availability',
    es: 'Disponibilidad',
  } satisfies Copy,
};
