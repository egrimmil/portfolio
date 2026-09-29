import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

export const contactButtonClass =
  'border-primary inline-flex min-h-11 items-center rounded-full border bg-transparent px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-on-primary active:bg-primary active:text-on-primary';

const variantClass = {
  play: 'border-lavender/40 bg-lavender/15 text-lavender hover:bg-lavender/25',
  contact: contactButtonClass,
  text: 'text-primary min-h-11 text-sm font-semibold hover:underline',
} as const;

export function ExternalLink({
  href,
  locale,
  children,
  variant,
}: {
  href: string;
  locale: Locale;
  children: string;
  variant: keyof typeof variantClass;
}) {
  const hint = t(dictionary.externalLinkHint, locale);
  const className =
    variant === 'contact'
      ? variantClass.contact
      : variant === 'text'
        ? `inline-flex min-h-11 items-center ${variantClass.text}`
        : `inline-flex min-h-11 items-center rounded-full border px-5 text-sm font-semibold ${variantClass.play}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
      <span className="sr-only"> {hint}</span>
    </a>
  );
}
