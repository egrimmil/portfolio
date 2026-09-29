import type { Copy } from './locales';

export type SkillGroupId =
  'mobile' | 'architecture' | 'backend' | 'development';

export type SkillGroup = {
  id: SkillGroupId;
  heading: Copy;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    heading: { en: 'Mobile', es: 'Móvil' },
    items: [
      'Kotlin',
      'Java',
      'Android',
      'Jetpack',
      'Jetpack Compose',
      'Kotlin Multiplatform',
      'Compose Multiplatform',
      'Coroutines',
      'Flow',
      'Retrofit',
      'OkHttp',
      'Glide',
      'Coil',
      'Lottie',
      'Picasso',
    ],
  },
  {
    id: 'architecture',
    heading: { en: 'Architecture', es: 'Arquitectura' },
    items: [
      'Clean Architecture',
      'Onion',
      'MVVM',
      'MVC',
      'MVP',
      'SOLID',
      'Design Patterns',
      'Dependency Injection',
      'Hilt',
      'Dagger',
      'Koin',
      'Repository Pattern',
    ],
  },
  {
    id: 'backend',
    heading: { en: 'Backend / Cloud', es: 'Backend / Cloud' },
    items: [
      'Firebase',
      'Firestore',
      'Firebase Realtime',
      'Authentication',
      'Crashlytics',
      'MySQL',
      'SQL',
    ],
  },
  {
    id: 'development',
    heading: { en: 'Development', es: 'Desarrollo' },
    items: [
      'Git',
      'GitHub',
      'GitLab',
      'SourceTree',
      'Azure DevOps',
      'CI/CD',
      'GitHub Actions',
      'JUnit',
      'MockK',
      'Mockito',
      'Unit Testing',
      'Android Studio',
      'Jira',
      'Confluence',
      'Scrum',
      'Kanban',
      'Figma',
      'Zeplin',
      'Adobe XD',
      'InVision',
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Bootstrap',
      'jQuery',
      'AngularJS',
      'PHP',
      'CodeIgniter',
      'WordPress',
      'Moodle',
    ],
  },
];
