import { Inter, JetBrains_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { isLocale, locales } from '@/data/locales';
import { siteUrl } from '@/lib/site';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import { themeBootScript } from '@/components/theme/theme-boot';
import '../globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(siteUrl()),
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
        <PersonJsonLd locale={locale} />
        {children}
      </body>
    </html>
  );
}
