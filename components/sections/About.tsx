import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';

export function About({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="about-heading" className="flex flex-col gap-4">
      <h2 id="about-heading" className="text-xl font-semibold tracking-tight">
        {t(profile.aboutHeading, locale)}
      </h2>
      {profile.about.map((paragraph) => (
        <p
          key={paragraph.en}
          className="text-base leading-7 text-zinc-700 dark:text-zinc-300"
        >
          {t(paragraph, locale)}
        </p>
      ))}
    </section>
  );
}
