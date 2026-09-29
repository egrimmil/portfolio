import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';
import type { Project } from '@/data/projects';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t(project.role, locale)}
        </p>
        {project.inDevelopment && project.statusLabel ? (
          <p className="text-sm font-medium">
            {t(project.statusLabel, locale)}
          </p>
        ) : null}
      </div>
      {project.summary ? (
        <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">
          {t(project.summary, locale)}
        </p>
      ) : null}
      <ul
        className="flex flex-wrap gap-2"
        aria-label={t(dictionary.techListLabel, locale)}
      >
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
          >
            {item}
          </li>
        ))}
      </ul>
      {project.url ? (
        <p>
          <ExternalLink href={project.url} locale={locale}>
            {t(dictionary.playStore, locale)}
          </ExternalLink>
        </p>
      ) : null}
    </article>
  );
}
