import { t, type Locale } from '@/data/locales';
import type { Role } from '@/data/role';

export function RoleCard({ role, locale }: { role: Role; locale: Locale }) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold tracking-tight">{role.heading}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t(role.title, locale)}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t(role.period, locale)}
          <span aria-hidden="true"> · </span>
          {t(role.duration, locale)}
        </p>
        {role.context ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {t(role.context, locale)}
          </p>
        ) : null}
      </div>
      <ul className="list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700 dark:text-zinc-300">
        {role.bullets.map((bullet) => (
          <li key={bullet.en}>{t(bullet, locale)}</li>
        ))}
      </ul>
    </article>
  );
}
