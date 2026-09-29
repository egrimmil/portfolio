import type { Metadata } from 'next';
import type { Locale } from '@/data/locales';
import { profile } from '@/data/profile';
import { dictionary } from '@/data/dictionary';
import { t } from '@/data/locales';

export function pageMetadata(locale: Locale): Metadata {
  return {
    title: `${profile.name} — ${t(profile.role, locale)}`,
    description: t(profile.about[0], locale),
  };
}

export function projectsPageMetadata(locale: Locale): Metadata {
  return {
    title: `${profile.name} — ${t(dictionary.projectsPageTitle, locale)}`,
    description: t(dictionary.projectsPageLead, locale),
  };
}
