import type { Metadata } from 'next';
import type { Locale } from '@/data/locales';
import { profile } from '@/data/profile';
import { dictionary } from '@/data/dictionary';
import { t } from '@/data/locales';
import { siteUrl } from '@/lib/site';

function localePath(locale: Locale, suffix = '') {
  return `/${locale}${suffix}`;
}

function documentMeta(
  locale: Locale,
  title: string,
  description: string,
  suffix = '',
): Metadata {
  const path = localePath(locale, suffix);
  const url = `${siteUrl()}${path}`;
  const ogLocale = locale === 'es' ? 'es_CO' : 'en_US';
  const altLocale = locale === 'es' ? 'en_US' : 'es_CO';

  return {
    metadataBase: new URL(siteUrl()),
    title,
    description,
    applicationName: profile.name,
    authors: [{ name: profile.name }],
    creator: profile.name,
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: {
        en: `${siteUrl()}/en${suffix}`,
        es: `${siteUrl()}/es${suffix}`,
        'x-default': `${siteUrl()}/en${suffix}`,
      },
    },
    openGraph: {
      type: 'website',
      url,
      locale: ogLocale,
      alternateLocale: [altLocale],
      siteName: profile.name,
      title,
      description,
      images: [
        {
          url: '/icon.png',
          width: 1024,
          height: 1024,
          alt: profile.name,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: ['/icon.png'],
    },
  };
}

export function pageMetadata(locale: Locale): Metadata {
  return documentMeta(
    locale,
    `${profile.name} — ${t(profile.role, locale)}`,
    t(profile.about[0], locale),
  );
}

export function projectsPageMetadata(locale: Locale): Metadata {
  return documentMeta(
    locale,
    `${profile.name} — ${t(dictionary.projectsPageTitle, locale)}`,
    t(dictionary.projectsPageLead, locale),
    '/projects',
  );
}
