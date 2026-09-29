import { dictionary } from '@/data/dictionary';
import { skillGroups } from '@/data/skills';
import { t, type Locale } from '@/data/locales';

export function Skills({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="skills-heading" className="flex flex-col gap-6">
      <h2 id="skills-heading" className="text-xl font-semibold tracking-tight">
        {t(dictionary.skillsHeading, locale)}
      </h2>
      <div className="flex flex-col gap-6">
        {skillGroups.map((group) => {
          const headingId = `skills-${group.id}`;
          return (
            <div key={group.id} className="flex flex-col gap-3">
              <h3
                id={headingId}
                className="text-sm font-semibold tracking-tight text-zinc-800 dark:text-zinc-200"
              >
                {t(group.heading, locale)}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-labelledby={headingId}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-zinc-100 px-2 py-1 text-xs text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    {item}
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
