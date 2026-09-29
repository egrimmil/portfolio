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
  featured: boolean;
};

const miClaroTech = [
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
];

const rutappsTech = [
  'Kotlin',
  'Java',
  'Clean Architecture',
  'Jetpack',
  'MVVM',
  'MVC',
  'MVP',
  'Firebase',
  'Retrofit',
  'OkHttp',
  'Hilt',
  'Dagger',
  'Koin',
  'Glide',
  'Picasso',
  'SOLID',
];

const wigilabsLeadRole: Copy = {
  en: 'Android Team Lead, Android Developer',
  es: 'Líder de equipo Android, desarrollador Android',
};

const androidDeveloperRole: Copy = {
  en: 'Android Developer',
  es: 'Desarrollador Android',
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
    featured: true,
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
    featured: true,
  },
  {
    id: 'baz-superapp',
    name: 'Baz Superapp',
    role: androidDeveloperRole,
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
    featured: true,
  },
  {
    id: 'mi-claro-app',
    name: 'Mi Claro App',
    role: wigilabsLeadRole,
    url: 'https://play.google.com/store/apps/details?id=com.clarocolombia.miclaro',
    inDevelopment: false,
    statusLabel: null,
    tech: miClaroTech,
    summary: null,
    featured: true,
  },
  {
    id: 'claro-te-ayuda',
    name: 'Claro Te Ayuda',
    role: wigilabsLeadRole,
    url: 'https://play.google.com/store/apps/details?id=com.brm.claroTeAyuda',
    inDevelopment: false,
    statusLabel: null,
    tech: miClaroTech,
    summary: null,
    featured: false,
  },
  {
    id: 'fundacion-santa-fe',
    name: 'Fundación Santa Fe',
    role: wigilabsLeadRole,
    url: null,
    inDevelopment: false,
    statusLabel: null,
    tech: miClaroTech,
    summary: null,
    featured: false,
  },
  {
    id: 'salud-total-eps',
    name: 'Salud Total EPS',
    role: wigilabsLeadRole,
    url: 'https://play.google.com/store/apps/details?id=com.saludtotal.saludtotaleps',
    inDevelopment: false,
    statusLabel: null,
    tech: miClaroTech,
    summary: null,
    featured: false,
  },
  {
    id: 'salud-total-pac',
    name: 'Salud Total PAC',
    role: wigilabsLeadRole,
    url: 'https://play.google.com/store/apps/details?id=com.wigilabs.saludtotal.pac',
    inDevelopment: false,
    statusLabel: null,
    tech: miClaroTech,
    summary: null,
    featured: false,
  },
  {
    id: 'rutapps',
    name: 'Rutapps',
    role: androidDeveloperRole,
    url: 'https://play.google.com/store/apps/details?id=co.hidesoft.rutappsusuariofinal',
    inDevelopment: false,
    statusLabel: null,
    tech: rutappsTech,
    summary: null,
    featured: false,
  },
  {
    id: 'app-miga',
    name: 'App Miga',
    role: androidDeveloperRole,
    url: 'https://play.google.com/store/apps/details?id=com.wigilabs.wwb',
    inDevelopment: false,
    statusLabel: null,
    tech: rutappsTech,
    summary: null,
    featured: false,
  },
  {
    id: 'eventos-yanbal',
    name: 'Eventos Yanbal',
    role: androidDeveloperRole,
    url: null,
    inDevelopment: false,
    statusLabel: null,
    tech: rutappsTech,
    summary: null,
    featured: false,
  },
  {
    id: 'amc-motos',
    name: 'AMC Motos',
    role: androidDeveloperRole,
    url: null,
    inDevelopment: false,
    statusLabel: null,
    tech: rutappsTech,
    summary: null,
    featured: false,
  },
  {
    id: 'kromasol',
    name: 'Kromasol',
    role: androidDeveloperRole,
    url: null,
    inDevelopment: false,
    statusLabel: null,
    tech: rutappsTech,
    summary: null,
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
