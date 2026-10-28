import type { ReactNode } from "react";

interface RegistrationCardProps {
  title: string;
  currentStep: number;
  totalSteps: number;
  children: ReactNode;
}

export default function RegistrationCard({ title, currentStep, totalSteps, children }: RegistrationCardProps) {
  return (
    <section className="rounded-lg bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-medium text-slate-900">{title}</h2>
        <span className="shrink-0 text-xs text-slate-400">
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="max-w-xl lg:max-w-none">{children}</div>
    </section>
  );
}