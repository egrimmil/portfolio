import { dictionary } from '@/data/dictionary';
import { featuredProjects } from '@/data/projects';
import { t, type Locale } from '@/data/locales';
import { ProjectCard } from '@/components/projects/ProjectCard';
import Link from 'next/link';

export function Work({ locale }: { locale: Locale }) {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="flex scroll-mt-24 flex-col gap-4"
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="work-heading"
          className="text-ink text-2xl font-bold tracking-tight"
        >
          {t(dictionary.workHeading, locale)}
        </h2>
        <Link
          href={`/${locale}/projects`}
          className="text-primary text-sm font-semibold"
        >
          {t(dictionary.viewAllProjects, locale)}
        </Link>
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
