import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';
import type { Project } from '@/data/projects';
import { Chip } from '@/components/ui/Chip';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  return (
    <article className="border-hairline bg-surface flex h-full flex-col gap-3 rounded-2xl border p-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-ink text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        <p className="text-primary text-sm">{t(project.role, locale)}</p>
        {project.inDevelopment && project.statusLabel ? (
          <p className="text-primary font-mono text-xs font-semibold">
            {t(project.statusLabel, locale)}
          </p>
        ) : null}
      </div>
      {project.summary ? (
        <p className="text-muted text-sm leading-6">
          {t(project.summary, locale)}
        </p>
      ) : null}
      <ul
        className="flex flex-wrap gap-2"
        aria-label={t(dictionary.techListLabel, locale)}
      >
        {project.tech.map((item) => (
          <li key={item}>
            <Chip label={item} />
          </li>
        ))}
      </ul>
      {project.url ? (
        <p className="mt-auto pt-2">
          <ExternalLink href={project.url} locale={locale} variant="play">
            {t(dictionary.playStore, locale)}
          </ExternalLink>
        </p>
      ) : null}
    </article>
  );
}
