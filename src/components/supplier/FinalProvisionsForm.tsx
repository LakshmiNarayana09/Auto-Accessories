import type { FormEvent } from "react";
import type { FinalInfo } from "../../types/supplierRegistration";
import { MAX_DESCRIPTION_LENGTH } from "../../data/supplierRegistration/supplierRegistrationData";
import TextAreaField from "../../components/common/TextAreaField";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

interface FinalProvisionsFormProps {
  values: FinalInfo;
  onChange: (description: string) => void;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  submitError?: string;
}

export default function FinalProvisionsForm({
  values,
  onChange,
  onBack,
  onSubmit,
  isSubmitting = false,
  submitError = "",
}: FinalProvisionsFormProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isSubmitting) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <TextAreaField
          name="description"
          label="Description"
          maxLength={MAX_DESCRIPTION_LENGTH}
          value={values.description}
          onValueChange={onChange}
        />
        <p className="mt-1 text-right text-[11px] text-gray-400">
          {values.description.length} / {MAX_DESCRIPTION_LENGTH}
        </p>
      </div>

      {submitError && (
        <p role="alert" className="text-xs text-red-500">
          {submitError}
        </p>
      )}

      <div className="mt-2 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-5">
        <SecondaryButton onClick={onBack} withArrow disabled={isSubmitting}>
          Back
        </SecondaryButton>
        <PrimaryButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Complete registration"}
        </PrimaryButton>
      </div>
    </form>
  );
}