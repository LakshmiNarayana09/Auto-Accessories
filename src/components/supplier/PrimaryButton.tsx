import type { ButtonHTMLAttributes, ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  withArrow?: boolean;
}

export default function PrimaryButton({
  children,
  withArrow = false,
  type = "button",
  className = "",
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#5B3FD6] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#4A32B8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
      {withArrow && <ChevronRight size={16} />}
    </button>
  );
}