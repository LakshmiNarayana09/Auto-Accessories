interface MobileProgressProps {
  current: number;
  total: number;
  title: string;
}

export default function MobileProgress({ current, total, title }: MobileProgressProps) {
  return (
    <div className="lg:hidden">
      <p className="text-sm font-semibold text-slate-900">{title}</p>
      <div
        role="progressbar"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={current}
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200"
      >
        <div
          className="h-full rounded-full bg-[#5B3FD6] transition-all"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
    </div>
  );
}