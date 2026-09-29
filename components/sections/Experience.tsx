import { dictionary } from '@/data/dictionary';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';
import { RoleCard } from '@/components/sections/RoleCard';

export function Experience({ locale }: { locale: Locale }) {
  return (
    <section
      aria-labelledby="experience-heading"
      className="flex flex-col gap-4"
    >
      <h2
        id="experience-heading"
        className="text-xl font-semibold tracking-tight"
      >
        {t(dictionary.experienceHeading, locale)}
      </h2>
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
        {t(profile.experienceSummary, locale)}
      </p>
      <ul className="flex flex-col gap-4">
        {experience.map((role) => (
          <li key={role.id}>
            <RoleCard role={role} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
