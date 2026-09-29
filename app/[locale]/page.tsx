import { notFound } from 'next/navigation';
import { isLocale } from '@/data/locales';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteDock } from '@/components/layout/SiteDock';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Web } from '@/components/sections/Web';
import { Work } from '@/components/sections/Work';
import { Contact } from '@/components/sections/Contact';

export default async function HomePage({ params }: PageProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-4 py-10 sm:px-6 sm:py-14">
        <section
          id="overview"
          aria-labelledby="overview-heading"
          className="flex scroll-mt-24 flex-col gap-10"
        >
          <Hero locale={locale} />
          <About locale={locale} />
        </section>
        <Work locale={locale} />
        <Experience locale={locale} />
        <Web locale={locale} />
        <Skills locale={locale} />
        <Contact locale={locale} />
      </main>
      <SiteFooter />
      <SiteDock locale={locale} />
    </>
  );
}
