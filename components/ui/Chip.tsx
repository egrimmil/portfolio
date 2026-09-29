function composeTone(label: string) {
  return label.toLowerCase().includes('compose');
}

const stackToneClass = {
  primary: 'border-primary/25 bg-primary/10 text-primary',
  primaryAlt: 'border-primary/45 bg-primary/20 text-primary',
  lavender: 'border-lavender/30 bg-lavender/10 text-lavender',
} as const;

export function Chip({
  label,
  variant = 'accent',
  stackTone = 'primary',
}: {
  label: string;
  variant?: 'accent' | 'stack';
  stackTone?: keyof typeof stackToneClass;
}) {
  if (variant === 'stack') {
    return (
      <span
        className={`inline-flex rounded-md border px-2.5 py-1 text-base font-medium ${stackToneClass[stackTone]}`}
      >
        {label}
      </span>
    );
  }

  const compose = composeTone(label);
  return (
    <span
      className={`inline-flex rounded-md border px-2 py-1 font-mono text-[10px] font-semibold tracking-wide ${
        compose
          ? 'border-lavender/25 bg-lavender/10 text-lavender'
          : 'border-primary/20 bg-primary/10 text-primary'
      }`}
    >
      {label}
    </span>
  );
}
