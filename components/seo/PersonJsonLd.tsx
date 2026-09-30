import { contactChannels } from '@/data/contact';
import { profile } from '@/data/profile';
import { siteUrl } from '@/lib/site';
import { t, type Locale } from '@/data/locales';

export function PersonJsonLd({ locale }: { locale: Locale }) {
  const payload = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: t(profile.role, locale),
    url: `${siteUrl()}/${locale}`,
    email: 'elkin.fracica@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá D.C.',
      addressCountry: 'CO',
    },
    sameAs: contactChannels
      .filter((channel) => !channel.href.startsWith('mailto:'))
      .map((channel) => channel.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
