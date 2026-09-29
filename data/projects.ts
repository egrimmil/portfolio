import type { Copy } from './locales';

export type Project = {
  id: string;
  name: string;
  role: Copy;
  url: string | null;
  inDevelopment: boolean;
  statusLabel: Copy | null;
  tech: string[];
  summary: Copy | null;
};

export const projects: Project[] = [
  {
    id: 'attendance-saas',
    name: 'Cross-Platform Attendance SaaS',
    role: {
      en: 'Development Lead',
      es: 'Líder de desarrollo',
    },
    url: null,
    inDevelopment: true,
    statusLabel: {
      en: 'In development',
      es: 'En desarrollo',
    },
    tech: [
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Kotlin',
      'Firebase',
      'Firestore',
      'Koin',
      'MVVM',
      'Clean Architecture',
      'Coroutines',
      'Flow',
    ],
    summary: {
      en: 'Cross-platform attendance product for Android and iOS, still in development.',
      es: 'Producto de gestión de asistencia para Android e iOS, aún en desarrollo.',
    },
  },
  {
    id: 'ikigii',
    name: 'ikigii',
    role: {
      en: 'Tech Consultant',
      es: 'Consultor tecnológico',
    },
    url: 'https://play.google.com/store/apps/details?id=com.towerbank.ikigii',
    inDevelopment: false,
    statusLabel: null,
    tech: [
      'Kotlin',
      'Clean Architecture',
      'MVVM',
      'Hilt',
      'Flow',
      'Retrofit',
      'Firebase',
      'Glide',
      'Lottie',
      'JUnit',
      'MockK',
    ],
    summary: null,
  },
  {
    id: 'baz-superapp',
    name: 'Baz Superapp',
    role: {
      en: 'Android Developer',
      es: 'Desarrollador Android',
    },
    url: 'https://play.google.com/store/apps/details?id=mx.app.baz.superapp',
    inDevelopment: false,
    statusLabel: null,
    tech: [
      'Kotlin',
      'Clean Architecture',
      'MVVM',
      'Jetpack Compose',
      'Hilt',
      'Flow',
      'Retrofit',
      'Glide',
      'Lottie',
      'JUnit4',
      'MockK',
    ],
    summary: null,
  },
  {
    id: 'mi-claro-app',
    name: 'Mi Claro App',
    role: {
      en: 'Android Team Lead, Android Developer',
      es: 'Líder de equipo Android, desarrollador Android',
    },
    url: 'https://play.google.com/store/apps/details?id=com.clarocolombia.miclaro',
    inDevelopment: false,
    statusLabel: null,
    tech: [
      'Kotlin',
      'Clean Architecture',
      'Onion',
      'MVVM',
      'Jetpack',
      'Firebase',
      'Retrofit',
      'Glide',
      'Coil',
      'Lottie',
      'JUnit4',
      'MockK',
      'Mockito',
      'GitHub Actions',
    ],
    summary: null,
  },
];
