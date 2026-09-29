import { dictionary } from '@/data/dictionary';
import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';
import Link from 'next/link';

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <p className="text-sm font-medium tracking-tight">{profile.name}</p>
        <nav aria-label={t(dictionary.languageNavLabel, locale)}>
          <ul className="flex gap-1 text-sm">
            <li>
              <LangLink locale={locale} target="en">
                {t(dictionary.english, locale)}
              </LangLink>
            </li>
            <li>
              <LangLink locale={locale} target="es">
                {t(dictionary.spanish, locale)}
              </LangLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function LangLink({
  locale,
  target,
  children,
}: {
  locale: Locale;
  target: Locale;
  children: string;
}) {
  const active = locale === target;
  return (
    <Link
      href={`/${target}`}
      hrefLang={target}
      aria-current={active ? 'page' : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-md px-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 dark:focus-visible:outline-zinc-100 ${
        active
          ? 'font-semibold text-zinc-900 dark:text-zinc-50'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
      }`}
    >
      {children}
    </Link>
  );
}
