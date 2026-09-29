import { dictionary } from '@/data/dictionary';
import { navItems } from '@/data/nav';
import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { LocaleSwitch } from '@/components/layout/LocaleSwitch';
import Link from 'next/link';

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="border-hairline bg-canvas sticky top-0 z-40 border-b">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <p className="text-ink shrink-0 text-sm font-semibold tracking-tight">
          <Link href={`/${locale}`} className="hover:text-ink">
            {profile.name}
          </Link>
        </p>
        <nav
          aria-label={t(dictionary.siteNavLabel, locale)}
          className="hidden min-w-0 flex-1 md:block"
        >
          <ul className="text-muted flex flex-wrap justify-center gap-1 text-xs font-medium tracking-wide uppercase">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href(locale)}
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
          <LocaleSwitch locale={locale} />
        </div>
      </div>
    </header>
  );
}
