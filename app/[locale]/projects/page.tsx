import { notFound } from 'next/navigation';
import { isLocale } from '@/data/locales';
import { dictionary } from '@/data/dictionary';
import { projects } from '@/data/projects';
import { t } from '@/data/locales';
import { projectsPageMetadata } from '@/lib/metadata';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteDock } from '@/components/layout/SiteDock';
import { ProjectCard } from '@/components/projects/ProjectCard';

export async function generateMetadata({
  params,
}: PageProps<'/[locale]/projects'>) {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return projectsPageMetadata(locale);
}

export default async function ProjectsPage({
  params,
}: PageProps<'/[locale]/projects'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
        <header className="flex max-w-3xl flex-col gap-3">
          <p className="text-primary font-mono text-xs font-semibold tracking-widest uppercase">
            {t(dictionary.projectsPageKicker, locale)}
          </p>
          <h1
            id="projects-heading"
            className="text-ink text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl lg:leading-tight"
          >
            {t(dictionary.projectsPageHeading, locale)}
          </h1>
          <p className="text-muted text-sm leading-6 sm:text-base">
            {t(dictionary.projectsPageLead, locale)}
          </p>
        </header>
        <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} locale={locale} />
            </li>
          ))}
        </ul>
      </main>
      <SiteFooter />
      <SiteDock locale={locale} />
    </>
  );
}
