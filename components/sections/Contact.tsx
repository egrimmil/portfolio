import { contactChannels } from '@/data/contact';
import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';
import { ExternalLink } from '@/components/ui/ExternalLink';

export function Contact({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="contact-heading" className="flex flex-col gap-4">
      <h2 id="contact-heading" className="text-xl font-semibold tracking-tight">
        {t(dictionary.contactHeading, locale)}
      </h2>
      <ul className="flex flex-col gap-2 text-base">
        {contactChannels.map((channel) => (
          <li key={channel.id}>
            {channel.href.startsWith('mailto:') ? (
              <a
                href={channel.href}
                className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-50 dark:focus-visible:outline-zinc-100"
              >
                {`${t(channel.label, locale)}: ${channel.href.replace('mailto:', '')}`}
              </a>
            ) : (
              <ExternalLink href={channel.href} locale={locale}>
                {t(channel.label, locale)}
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
