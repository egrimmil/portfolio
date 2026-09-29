import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';

export function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {profile.name}
      </h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300">
        {t(profile.role, locale)}
      </p>
      <dl className="grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">
            {t(profile.locationLabel, locale)}
          </dt>
          <dd>{profile.location}</dd>
        </div>
        <div>
          <dt className="text-zinc-500 dark:text-zinc-400">
            {t(profile.availabilityLabel, locale)}
          </dt>
          <dd>{t(profile.availability, locale)}</dd>
        </div>
      </dl>
    </section>
  );
}
