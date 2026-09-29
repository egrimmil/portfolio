import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

export function ExternalLink({
  href,
  locale,
  children,
}: {
  href: string;
  locale: Locale;
  children: string;
}) {
  const hint = t(dictionary.externalLinkHint, locale);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:text-zinc-50 dark:decoration-zinc-600 dark:hover:decoration-zinc-50 dark:focus-visible:outline-zinc-100"
    >
      {children}
      <span className="sr-only"> {hint}</span>
    </a>
  );
}
