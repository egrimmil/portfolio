import { dictionary } from '@/data/dictionary';
import { projects } from '@/data/projects';
import { t, type Locale } from '@/data/locales';
import { ProjectCard } from '@/components/projects/ProjectCard';

export function Work({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="work-heading" className="flex flex-col gap-4">
      <h2 id="work-heading" className="text-xl font-semibold tracking-tight">
        {t(dictionary.workHeading, locale)}
      </h2>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
