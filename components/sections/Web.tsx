import { dictionary } from '@/data/dictionary';
import { webRoles } from '@/data/web';
import { t, type Locale } from '@/data/locales';
import { RoleCard } from '@/components/sections/RoleCard';

export function Web({ locale }: { locale: Locale }) {
  return (
    <section aria-labelledby="web-heading" className="flex flex-col gap-4">
      <h2 id="web-heading" className="text-xl font-semibold tracking-tight">
        {t(dictionary.webHeading, locale)}
      </h2>
      <ul className="flex flex-col gap-4">
        {webRoles.map((role) => (
          <li key={role.id}>
            <RoleCard role={role} locale={locale} />
          </li>
        ))}
      </ul>
    </section>
  );
}
