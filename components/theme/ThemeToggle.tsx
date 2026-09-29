'use client';

import { useSyncExternalStore } from 'react';
import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

type Theme = 'dark' | 'light';

const THEME_EVENT = 'theme-change';

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch {
    /* ignore */
  }
  return 'dark';
}

function subscribe(onChange: () => void) {
  window.addEventListener(THEME_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

export function ThemeToggle({ locale }: { locale: Locale }) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => 'dark');

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }

  const nextLabel =
    theme === 'dark'
      ? t(dictionary.themeToLight, locale)
      : t(dictionary.themeToDark, locale);

  return (
    <button
      type="button"
      onClick={toggle}
      suppressHydrationWarning
      className="border-hairline bg-surface text-ink inline-flex min-h-11 items-center rounded-full border px-3 text-xs font-medium"
      aria-label={nextLabel}
    >
      {nextLabel}
    </button>
  );
}
