import type { ReactNode } from 'react';
import type { SupplierStatsVariant } from '../../types/partOffers';
import { Check as CheckIcon, Undo2 as ReturnIcon } from 'lucide-react';

interface SupplierStatsProps {
  variant: SupplierStatsVariant;
  approved: number;
  returns: number;
  rating?: number;
}

const clamp = (n: number) => Math.min(100, Math.max(0, n));


const Stat = ({ icon, value, label }: { icon: ReactNode; value: number; label: string }) => (
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <p className="text-sm font-bold leading-tight text-gray-900">{value}%</p>
      <p className="text-[11px] text-gray-400">{label}</p>
    </div>
  </div>
);

const StatsIcons = ({ approved, returns }: { approved: number; returns: number }) => (
  <div className="flex items-center justify-around gap-4 rounded-xl bg-white p-3 shadow-[0_2px_12px_rgba(0,0,0,0.08)]">
    <Stat
      value={approved}
      label="Approved"
      icon={
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-500 text-green-500">
          <CheckIcon className="h-4 w-4" />
        </span>
      }
    />
    <Stat
      value={returns}
      label="Returns"
      icon={
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
          <ReturnIcon className="h-4 w-4" />
        </span>
      }
    />
  </div>
);


const RING_RADIUS = 18;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

const RingStat = ({ percent, label, strokeClass }: { percent: number; label: string; strokeClass: string }) => (
  <div className="flex items-center gap-2.5">
    <div className="relative h-11 w-11 shrink-0">
      <svg viewBox="0 0 44 44" className="h-full w-full -rotate-90" aria-hidden="true">
        <circle cx="22" cy="22" r={RING_RADIUS} fill="white" strokeWidth="4" className="stroke-gray-200" />
        <circle
          cx="22"
          cy="22"
          r={RING_RADIUS}
          fill="none"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={`${(clamp(percent) / 100) * RING_LENGTH} ${RING_LENGTH}`}
          className={strokeClass}
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[11px] font-bold text-gray-900">
        {percent}%
      </span>
    </div>
    <span className="text-xs font-medium text-gray-800">{label}</span>
  </div>
);

const StatsRings = ({ approved, returns }: { approved: number; returns: number }) => (
  <div className="flex items-center justify-around gap-4 rounded-xl bg-gray-100 p-3">
    <RingStat percent={approved} label="Approved" strokeClass="stroke-green-500" />
    <RingStat percent={returns} label="Returns" strokeClass="stroke-red-500" />
  </div>
);


const ARC = 'M10 60A50 50 0 0 1 110 60';
const ARC_LENGTH = Math.PI * 50;

const StatsGauge = ({ approved, returns, rating }: { approved: number; returns: number; rating: number }) => {
  const approvedLen = (clamp(approved) / 100) * ARC_LENGTH;
  const returnsLen = (clamp(returns) / 100) * ARC_LENGTH;

  return (
    <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-3">
      <div className="relative w-32 shrink-0 sm:w-36">
        <svg viewBox="0 0 120 66" className="w-full" fill="none" strokeWidth="10" aria-hidden="true">
          <path d={ARC} className="stroke-gray-200" />
          <path d={ARC} className="stroke-green-500" strokeDasharray={`${approvedLen} ${ARC_LENGTH}`} />
          <path
            d={ARC}
            className="stroke-red-500"
            strokeDasharray={`${returnsLen} ${ARC_LENGTH}`}
            strokeDashoffset={-approvedLen}
          />
        </svg>
        <p className="absolute inset-x-0 bottom-0 text-center text-base font-bold leading-none text-gray-900">
          {rating}
          <span className="text-xs font-medium text-gray-400">/5</span>
        </p>
      </div>

      <ul className="space-y-2 text-xs">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" />
          <span className="text-gray-700">Approved:</span>
          <span className="font-bold text-gray-900">{approved}%</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" aria-hidden="true" />
          <span className="text-gray-700">Returns:</span>
          <span className="font-bold text-gray-900">{returns}%</span>
        </li>
      </ul>
    </div>
  );
};


const SupplierStats = ({ variant, approved, returns, rating }: SupplierStatsProps) => {
  if (variant === 'gauge' && rating !== undefined) {
    return <StatsGauge approved={approved} returns={returns} rating={rating} />;
  }
  if (variant === 'icons') return <StatsIcons approved={approved} returns={returns} />;
  return <StatsRings approved={approved} returns={returns} />;
};

export default SupplierStats;