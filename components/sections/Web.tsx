import { dictionary } from '@/data/dictionary';
import { webRoles } from '@/data/web';
import { t, type Locale } from '@/data/locales';
import { RoleCard } from '@/components/sections/RoleCard';

export function Web({ locale }: { locale: Locale }) {
  return (
    <section
      id="web"
      aria-labelledby="web-heading"
      className="flex scroll-mt-24 flex-col gap-4"
    >
      <h2
        id="web-heading"
        className="text-ink text-2xl font-bold tracking-tight"
      >
        {t(dictionary.webHeading, locale)}
      </h2>
      <ul className="flex flex-col gap-4">
        {webRoles.map((role) => (
          <li key={role.id}>
            <RoleCard role={role} locale={locale} titleTone="lavender" />
          </li>
        ))}
      </ul>
    </section>
  );
}
