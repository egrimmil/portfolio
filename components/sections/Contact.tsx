import { publicContactChannels } from '@/data/contact';
import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';
import { ExternalLink, contactButtonClass } from '@/components/ui/ExternalLink';

export function Contact({ locale }: { locale: Locale }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-hairline bg-surface flex scroll-mt-24 flex-col items-center gap-6 rounded-2xl border p-6 text-center sm:p-8"
    >
      <div className="flex flex-col items-center gap-2">
        <h2
          id="contact-heading"
          className="text-ink text-2xl font-bold tracking-tight"
        >
          {t(dictionary.contactHeading, locale)}
        </h2>
        <p className="text-muted max-w-2xl text-sm leading-6">
          {t(dictionary.contactLead, locale)}
        </p>
      </div>
      <ul className="flex flex-wrap justify-center gap-3">
        {publicContactChannels().map((channel) => (
          <li key={channel.id}>
            {channel.download ? (
              <a
                href={channel.href}
                download={channel.download}
                className={contactButtonClass}
              >
                {t(channel.label, locale)}
              </a>
            ) : channel.href.startsWith('mailto:') ? (
              <a href={channel.href} className={contactButtonClass}>
                {t(channel.label, locale)}
              </a>
            ) : (
              <ExternalLink
                href={channel.href}
                locale={locale}
                variant="contact"
              >
                {t(channel.label, locale)}
              </ExternalLink>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
