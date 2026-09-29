import { dictionary } from '@/data/dictionary';
import { projects } from '@/data/projects';
import { t, type Locale } from '@/data/locales';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function Work({ locale }: { locale: Locale }) {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="flex scroll-mt-24 flex-col gap-4"
    >
      <h2
        id="work-heading"
        className="text-ink text-2xl font-bold tracking-tight"
      >
        {t(dictionary.workHeading, locale)}
      </h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
