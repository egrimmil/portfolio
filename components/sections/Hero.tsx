import { dictionary } from '@/data/dictionary';
import { heroChips } from '@/data/nav';
import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';
import { Chip } from '@/components/ui/Chip';

export function Hero({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="border-primary/40 bg-primary/15 text-primary inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] font-semibold">
        <span className="bg-primary size-1.5 rounded-full" aria-hidden="true" />
        {t(profile.availability, locale)}
      </p>
      <div className="flex flex-col gap-3">
        <h1
          id="overview-heading"
          className="text-ink max-w-3xl text-6xl font-extrabold tracking-tight text-balance sm:text-7xl"
        >
          {profile.name}
        </h1>
        <p className="text-lavender text-lg font-medium tracking-tight sm:text-xl">
          {t(profile.role, locale)}
        </p>
        <p className="text-muted max-w-2xl text-base leading-7 sm:text-lg">
          {t(profile.about[0], locale)}
        </p>
      </div>
      <ul
        className="flex flex-wrap gap-2"
        aria-label={t(dictionary.techListLabel, locale)}
      >
        {heroChips.map((chip) => (
          <li key={chip}>
            <Chip label={chip} />
          </li>
        ))}
      </ul>
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div className="border-hairline bg-surface rounded-2xl border p-4">
          <dt className="text-muted font-mono text-[10px] tracking-wide uppercase">
            {t(profile.locationLabel, locale)}
          </dt>
          <dd className="mt-1 font-medium">{profile.location}</dd>
        </div>
        <div className="border-hairline bg-surface rounded-2xl border p-4">
          <dt className="text-muted font-mono text-[10px] tracking-wide uppercase">
            {t(profile.availabilityLabel, locale)}
          </dt>
          <dd className="mt-1 font-medium">
            {t(profile.availability, locale)}
          </dd>
        </div>
      </dl>
    </div>
  );
}
