import { dictionary } from '@/data/dictionary';
import { navItems } from '@/data/nav';
import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import Link from 'next/link';

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="border-hairline bg-canvas sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <p className="text-ink shrink-0 text-sm font-semibold tracking-tight">
          {profile.name}
        </p>
        <nav
          aria-label={t(dictionary.siteNavLabel, locale)}
          className="hidden min-w-0 flex-1 md:block"
        >
          <ul className="text-muted flex flex-wrap justify-center gap-1 text-xs font-medium tracking-wide uppercase">
            {navItems.map((item) => (
              <li key={item.hash}>
                <a
                  href={`/${locale}#${item.hash}`}
                  className="hover:text-ink inline-flex min-h-11 items-center rounded-full px-3"
                >
                  {t(item.label, locale)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <p className="border-primary/30 bg-primary/10 text-primary hidden items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold sm:inline-flex">
            <span
              className="bg-primary size-1.5 rounded-full"
              aria-hidden="true"
            />
            {t(profile.availability, locale)}
          </p>
          <ThemeToggle locale={locale} />
          <nav aria-label={t(dictionary.languageNavLabel, locale)}>
            <ul className="flex gap-1 text-xs">
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
      className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full px-2 ${
        active ? 'text-ink font-semibold' : 'text-muted hover:text-ink'
      }`}
    >
      {children}
    </Link>
  );
}
