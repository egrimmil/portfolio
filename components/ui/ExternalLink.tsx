import { dictionary } from '@/data/dictionary';
import { t, type Locale } from '@/data/locales';

export const contactButtonClass =
  'border-primary inline-flex min-h-11 items-center rounded-full border bg-transparent px-5 text-sm font-semibold text-primary hover:bg-primary hover:text-on-primary active:bg-primary active:text-on-primary';

const variantClass = {
  play: contactButtonClass,
  contact: contactButtonClass,
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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={variantClass[variant]}
    >
      {children}
      <span className="sr-only"> {hint}</span>
    </a>
  );
}
