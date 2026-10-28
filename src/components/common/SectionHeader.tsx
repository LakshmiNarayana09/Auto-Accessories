import { ArrowRight as ArrowRightIcon } from 'lucide-react';
interface SectionHeaderProps {
  title: string;
  linkLabel?: string;
  linkHref?: string;
}

const SectionHeader = ({ title, linkLabel, linkHref }: SectionHeaderProps) => (
  <div className="mb-4 flex items-center justify-between gap-3">
    <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">{title}</h2>

    {linkLabel && linkHref && (
      <a
        href={linkHref}
        className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-[#EEEBFB] px-3 py-1.5 text-xs font-medium text-[#4A33B8] transition-colors hover:bg-[#E2DDF8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#5B3FD6] sm:text-sm"
      >
        {linkLabel}
        <ArrowRightIcon className="h-4 w-4" />
      </a>
    )}
  </div>
);

export default SectionHeader;