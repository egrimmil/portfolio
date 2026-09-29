import { profile } from '@/data/profile';
import { t, type Locale } from '@/data/locales';

export function About({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-4">
      <h2
        id="about-heading"
        className="text-ink text-2xl font-bold tracking-tight"
      >
        {t(profile.aboutHeading, locale)}
      </h2>
      {profile.about.map((paragraph) => (
        <p
          key={paragraph.en}
          className="text-muted max-w-3xl text-base leading-7"
        >
          {t(paragraph, locale)}
        </p>
      ))}
    </div>
  );
}
