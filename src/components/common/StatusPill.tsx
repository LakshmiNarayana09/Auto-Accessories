interface StatusPillProps {
  label: string;
  className: string;
}

export default function StatusPill({ label, className }: StatusPillProps) {
  return (
    <span
      className={`inline-flex min-w-[72px] items-center justify-center whitespace-nowrap rounded px-2 py-0.5 text-[10px] font-medium ${className}`}
    >
      {label}
    </span>
  );
}