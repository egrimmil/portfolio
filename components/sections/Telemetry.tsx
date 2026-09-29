import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

export function Telemetry({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      <li className="border-hairline bg-surface rounded-2xl border p-5">
        <p className="text-muted font-mono text-[10px] tracking-wide uppercase">
          {t(dictionary.telemetryMobile, locale)}
        </p>
        <p className="text-primary mt-2 font-mono text-3xl font-semibold">
          {t(dictionary.telemetryMobileValue, locale)}
        </p>
      </li>
      <li className="border-lavender/25 bg-surface rounded-2xl border p-5">
        <p className="text-muted font-mono text-[10px] tracking-wide uppercase">
          {t(dictionary.telemetryWeb, locale)}
        </p>
        <p className="text-lavender mt-2 font-mono text-3xl font-semibold">
          {t(dictionary.telemetryWebValue, locale)}
        </p>
      </li>
    </ul>
  );
}
