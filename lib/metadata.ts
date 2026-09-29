import type { Metadata } from 'next';
import type { Locale } from '@/data/locales';
import { profile } from '@/data/profile';
import { t } from '@/data/locales';

export function pageMetadata(locale: Locale): Metadata {
  return {
    title: `${profile.name} — ${t(profile.role, locale)}`,
    description: t(profile.about[0], locale),
  };
}
