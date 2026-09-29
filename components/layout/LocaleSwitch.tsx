'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

function siblingLocalePath(pathname: string, target: Locale) {
  const rest = pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '';
  return `/${target}${rest}`;
}

export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <nav aria-label={t(dictionary.languageNavLabel, locale)}>
      <ul className="flex gap-1 text-xs">
        <li>
          <LangLink locale={locale} target="en" pathname={pathname}>
            {t(dictionary.english, locale)}
          </LangLink>
        </li>
        <li>
          <LangLink locale={locale} target="es" pathname={pathname}>
            {t(dictionary.spanish, locale)}
          </LangLink>
        </li>
      </ul>
    </nav>
  );
}

function LangLink({
  locale,
  target,
  pathname,
  children,
}: {
  locale: Locale;
  target: Locale;
  pathname: string;
  children: string;
}) {
  const active = locale === target;
  return (
    <Link
      href={siblingLocalePath(pathname, target)}
      hrefLang={target}
      aria-current={active ? 'page' : undefined}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2 ${
        active ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
      }`}
    >
      {children}
    </Link>
  );
}
