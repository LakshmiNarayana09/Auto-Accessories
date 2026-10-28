import { Check } from "lucide-react";
import type { RegistrationStep } from "../../types/supplierRegistration";

interface StepListProps {
  steps: RegistrationStep[];
  currentStep: number;
  maxStep: number;
  onStepClick: (stepId: number) => void;
}

export default function StepList({ steps, currentStep, maxStep, onStepClick }: StepListProps) {
  return (
    <ol className="flex flex-col gap-2">
      {steps.map((step) => {
        const isActive = step.id === currentStep;
        const isDone = step.id < maxStep && !isActive;
        const isReachable = step.id <= maxStep;

        const circleClass = isActive
          ? "bg-[#5B3FD6] text-white"
          : isDone
            ? "border border-green-500 bg-white text-green-500"
            : "bg-white text-gray-800 shadow-sm";

        const titleClass = isActive
          ? "font-medium text-[#5B3FD6]"
          : isDone
            ? "text-green-600"
            : "text-gray-800";

        return (
          <li key={step.id}>
            <button
              type="button"
              disabled={!isReachable}
              aria-current={isActive ? "step" : undefined}
              onClick={() => onStepClick(step.id)}
              className={`flex w-full items-center gap-4 rounded-md px-1 py-1.5 text-left transition-colors ${
                isReachable ? "cursor-pointer hover:bg-slate-50" : "cursor-default"
              }`}
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xs font-semibold ${circleClass}`}
              >
                {isDone ? <Check size={16} aria-label="Completed" /> : step.id}
              </span>
              <span className={`text-xs ${titleClass}`}>{step.title}</span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}