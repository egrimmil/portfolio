import type { Copy } from './locales';

export type Role = {
  id: string;
  heading: string;
  employer: string | null;
  title: Copy;
  period: Copy;
  duration: Copy;
  context: Copy | null;
  bullets: Copy[];
};
