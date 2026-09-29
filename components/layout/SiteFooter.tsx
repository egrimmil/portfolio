import { profile } from '@/data/profile';

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-zinc-500 sm:px-6 dark:text-zinc-400">
        <p>{profile.name}</p>
      </div>
    </footer>
  );
}
