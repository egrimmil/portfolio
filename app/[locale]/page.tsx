import { notFound } from 'next/navigation';
import { isLocale } from '@/data/locales';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
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
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-12 px-4 py-10 sm:px-6 sm:py-14">
        <Hero locale={locale} />
        <About locale={locale} />
        <Skills locale={locale} />
        <Experience locale={locale} />
        <Web locale={locale} />
        <Work locale={locale} />
        <Contact locale={locale} />
      </main>
      <SiteFooter />
    </>
  );
}
