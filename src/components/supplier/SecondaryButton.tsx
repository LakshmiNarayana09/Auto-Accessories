import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  withArrow?: boolean;
}

export default function SecondaryButton({
  children,
  withArrow = false,
  type = "button",
  className = "",
  ...props
}: SecondaryButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-100 px-6 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {withArrow && <ChevronLeft size={16} />}
      {children}
    </button>
  );
}