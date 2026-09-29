import type { Copy } from './locales';

export type Project = {
  id: string;
  name: string;
  role: Copy;
  url: string | null;
  inDevelopment: boolean;
  statusLabel: Copy | null;
  tech: string[];
  summary: Copy;
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
    summary: {
      en: 'Crypto-friendly banking app that integrates different account types and crypto transactions. Deployed in more than 10 countries.',
      es: 'Aplicación bancaria crypto-friendly que integra diferentes tipos de cuentas y transacciones con criptomonedas. Desplegada en más de 10 países.',
    },
    featured: true,
  },
  {
    id: 'baz-superapp',
    name: 'Baz Superapp',
    role: androidDeveloperRole,
    url: null,
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
    summary: {
      en: 'Mexico app launched by Grupo Salinas and associated with Banco Azteca. It integrates financial services, entertainment, and commerce, plus promotions and rewards for users.',
      es: 'Aplicación de México lanzada por Grupo Salinas y asociada con Banco Azteca, diseñada para integrar servicios financieros, entretenimiento y comercio, además de promociones y recompensas para los usuarios.',
    },
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
    summary: {
      en: 'Self-service app to manage mobile and home services: bill payment, usage, plan purchases or reloads, and home network administration.',
      es: 'App de autoatención para administrar servicios móviles y del hogar: pago de facturas, gestión de consumo, compra o recargas de plan y administración de la red en el hogar.',
    },
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
    summary: {
      en: 'Exclusive app for Claro Colombia employees. It offers internal support, complaints, claims, advice, and work information.',
      es: 'Aplicación exclusiva para colaboradores de Claro en Colombia. Brinda soporte interno, quejas, reclamos, asesoría e información de labores.',
    },
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
    summary: {
      en: 'Official app to manage health services and procedures digitally: appointments, results, medical records, directory, and locations.',
      es: 'Aplicación oficial para gestionar servicios de salud y trámites de forma digital: citas médicas, resultados, historia clínica, directorio y sedes.',
    },
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
    summary: {
      en: 'Official app to manage health services and procedures digitally: appointments, results, medical records, directory, and locations.',
      es: 'Aplicación oficial para gestionar servicios de salud y trámites de forma digital: citas médicas, resultados, historia clínica, directorio y sedes.',
    },
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
    summary: {
      en: 'Official app to manage health services and procedures digitally: appointments, results, medical records, directory, and locations. Aimed at users with the complementary plan.',
      es: 'Aplicación oficial para gestionar servicios de salud y trámites de forma digital: citas médicas, resultados, historia clínica, directorio y sedes. Orientada a usuarios con el servicio complementario.',
    },
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
    summary: {
      en: 'Monitor and manage vehicle routes in real time with GPS geolocation.',
      es: 'Permite monitorear y administrar rutas de vehículos en tiempo real mediante geolocalización por GPS.',
    },
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
    summary: {
      en: 'Education and financial-management app that helps people organize personal finances and improve their relationship with money.',
      es: 'Aplicación de educación y gestión financiera que ayuda a las personas a organizar sus finanzas personales y mejorar su relación con el dinero.',
    },
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
    summary: {
      en: 'App to inform and connect attendees—mainly directors, consultants, and the sales force—during large conventions and corporate meetings organized by Yanbal.',
      es: 'Aplicación para informar y conectar a los asistentes, principalmente directoras, consultoras y fuerza de ventas, durante las grandes convenciones y reuniones corporativas organizadas por Yanbal.',
    },
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
    summary: {
      en: 'Built for Colombia’s motorcyclist community, bringing together features, benefits, and services related to the motorcycle world.',
      es: 'Diseñada para la comunidad de motociclistas en Colombia: reúne funciones, beneficios y servicios relacionados con el mundo motero.',
    },
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
    summary: {
      en: 'App with catalog and information about products, locations, and distributors.',
      es: 'Aplicación donde se puede consultar el catálogo e información sobre productos, sedes y distribuidores.',
    },
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
