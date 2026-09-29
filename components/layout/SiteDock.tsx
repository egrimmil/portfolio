'use client';

import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { dictionary } from '@/data/dictionary';
import { navItems } from '@/data/nav';
import { t, type Locale } from '@/data/locales';

function readHash() {
  return window.location.hash.replace('#', '');
}

function subscribe(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

export function SiteDock({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const hash = useSyncExternalStore(subscribe, readHash, () => '');
  const onProjects = pathname.includes('/projects');

  return (
    <nav
      aria-label={t(dictionary.siteNavLabel, locale)}
      className="border-hairline bg-surface/95 fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <ul className="mx-auto flex max-w-lg justify-between px-2 py-1">
        {navItems.map((item) => {
          const current =
            item.match === 'projects'
              ? onProjects
              : !onProjects && hash === item.id;
          return (
            <li key={item.id} className="flex-1">
              <a
                href={item.href(locale)}
                aria-current={current ? 'location' : undefined}
                className={`flex min-h-11 flex-col items-center justify-center px-1 text-center font-mono text-[9px] font-semibold tracking-wide uppercase ${
                  current ? 'text-primary' : 'text-muted'
                }`}
              >
                {t(item.label, locale)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
