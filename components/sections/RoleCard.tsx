import { t, type Locale } from '@/data/locales';
import type { Role } from '@/data/role';

export function RoleCard({
  role,
  locale,
  titleTone = 'primary',
}: {
  role: Role;
  locale: Locale;
  titleTone?: 'primary' | 'lavender';
}) {
  return (
    <article className="border-hairline bg-surface flex flex-col gap-3 rounded-2xl border p-5">
      <div className="flex flex-col gap-1">
        <h3 className="text-ink text-lg font-semibold tracking-tight">
          {role.heading}
        </h3>
        <p
          className={`text-sm ${titleTone === 'lavender' ? 'text-lavender' : 'text-primary'}`}
        >
          {t(role.title, locale)}
        </p>
        <p className="text-muted font-mono text-xs">
          {t(role.period, locale)}
          <span aria-hidden="true"> · </span>
          {t(role.duration, locale)}
        </p>
        {role.context ? (
          <p className="text-muted text-sm">{t(role.context, locale)}</p>
        ) : null}
      </div>
      <ul className="text-muted list-disc space-y-1 pl-5 text-sm leading-6">
        {role.bullets.map((bullet) => (
          <li key={bullet.en}>{t(bullet, locale)}</li>
        ))}
      </ul>
    </article>
  );
}
