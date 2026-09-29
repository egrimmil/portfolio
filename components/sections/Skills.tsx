import { dictionary } from '@/data/dictionary';
import { skillGroups, webFrontendSkills } from '@/data/skills';
import { t, type Locale } from '@/data/locales';
import { Chip } from '@/components/ui/Chip';

export function Skills({ locale }: { locale: Locale }) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex scroll-mt-24 flex-col gap-6"
    >
      <h2
        id="skills-heading"
        className="text-ink text-2xl font-bold tracking-tight"
      >
        {t(dictionary.skillsHeading, locale)}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((group) => {
          const headingId = `skills-${group.id}`;
          return (
            <div
              key={group.id}
              className="border-lavender/20 bg-surface flex flex-col gap-3 rounded-2xl border p-5"
            >
              <h3
                id={headingId}
                className="text-ink text-base font-semibold tracking-wide"
              >
                {t(group.heading, locale)}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-labelledby={headingId}>
                {group.items.map((item, index) => (
                  <li key={item}>
                    <Chip
                      label={item}
                      variant="stack"
                      stackTone={
                        webFrontendSkills.has(item)
                          ? 'lavender'
                          : index % 2 === 0
                            ? 'primary'
                            : 'primaryAlt'
                      }
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
