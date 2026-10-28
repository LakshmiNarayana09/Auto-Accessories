import type { ButtonHTMLAttributes, ReactNode } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function OutlineButton({
  children,
  type = "button",
  className = "",
  ...props
}: OutlineButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-11 items-center justify-center rounded-md border border-[#5B3FD6] bg-white px-6 text-sm font-medium text-[#5B3FD6] transition-colors hover:bg-[#F6F3FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B3FD6] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}