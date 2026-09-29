import { profile } from '@/data/profile';

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-hairline mt-auto border-t pb-24 md:pb-0">
      <div className="text-muted mx-auto max-w-6xl px-4 py-6 text-sm sm:px-6">
        <p>
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
