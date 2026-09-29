import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';
import type { Project } from '@/data/projects';
import { Chip } from '@/components/ui/Chip';
import { ExternalLink } from '@/components/ui/ExternalLink';

function StatusBadge({ children }: { children: string }) {
  return (
    <span className="text-primary border-primary/30 bg-primary/10 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold tracking-wide uppercase">
      <span className="bg-primary size-1.5 shrink-0 rounded-full" aria-hidden />
      {children}
    </span>
  );
}

export function ProjectCard({
  project,
  locale,
}: {
  project: Project;
  locale: Locale;
}) {
  const production = Boolean(project.url);
  const statusText = project.inDevelopment
    ? project.statusLabel
      ? t(project.statusLabel, locale)
      : null
    : production
      ? t(dictionary.statusProduction, locale)
      : null;

  return (
    <article className="border-hairline bg-surface flex h-full flex-col gap-3 rounded-2xl border p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-wrap gap-1.5">
          {statusText ? <StatusBadge>{statusText}</StatusBadge> : null}
          {project.featured ? (
            <StatusBadge>{t(dictionary.statusFeatured, locale)}</StatusBadge>
          ) : null}
        </div>
        <p className="text-muted max-w-[48%] text-right text-[10px] leading-4 font-medium tracking-wide uppercase">
          {t(project.role, locale)}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-ink text-lg font-semibold tracking-tight">
          {project.name}
        </h3>
        {project.summary ? (
          <p className="text-muted text-sm leading-6">
            {t(project.summary, locale)}
          </p>
        ) : null}
      </div>
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
        <p className="mt-auto pt-3">
          <ExternalLink href={project.url} locale={locale} variant="text">
            {`${t(dictionary.playStore, locale)} →`}
          </ExternalLink>
        </p>
      ) : (
        <div className="mt-auto" />
      )}
    </article>
  );
}
