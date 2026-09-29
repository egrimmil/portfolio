import { dictionary } from '@/data/dictionary';
import { experience } from '@/data/experience';
import { t, type Locale } from '@/data/locales';
import { RoleCard } from '@/components/sections/RoleCard';
import { Telemetry } from '@/components/sections/Telemetry';

export function Experience({ locale }: { locale: Locale }) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="flex scroll-mt-24 flex-col gap-4"
    >
      <h2
        id="experience-heading"
        className="text-ink text-2xl font-bold tracking-tight"
      >
        {t(dictionary.experienceHeading, locale)}
      </h2>
      <Telemetry locale={locale} />
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
