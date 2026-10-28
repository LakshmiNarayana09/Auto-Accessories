import { useState, type FormEvent } from "react";
import { Pencil, Trash2 } from "lucide-react";
import type { Store, StoreErrors, StoreField, StoreFieldConfig, StorePhoto } from "../../types/supplierRegistration";
import {
  MAX_STORE_PHOTOS,
  STORE_CONTACT_FIELDS,
  STORE_PRIMARY_FIELDS,
  createEmptyStore,
} from "../../data/supplierRegistration/supplierRegistrationData";
import TextField from "../../components/common/TextField";
import MapPreview from "../../components/common/MapPreview";
import PhotoUploader from "../../components/common/PhotoUploader";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import OutlineButton from "./OutlineButton";

interface StoresFormProps {
  stores: Store[];
  onStoresChange: (stores: Store[]) => void;
  onBack: () => void;
  onSubmit: () => void;
}

const TEXT_FIELDS: StoreField[] = ["name", "address", "phone", "email", "description"];

const isDirty = (store: Store): boolean =>
  TEXT_FIELDS.some((key) => store[key].trim() !== "") || store.photos.length > 0;

function validateStore(store: Store): StoreErrors {
  const errors: StoreErrors = {};
  if (!store.name.trim()) errors.name = "Enter the store name";
  if (!store.address.trim()) errors.address = "Enter the store address";
  if (store.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number";
  if (!/^\S+@\S+\.\S+$/.test(store.email)) errors.email = "Enter a valid e-mail address";
  return errors;
}

export default function StoresForm({ stores, onStoresChange, onBack, onSubmit }: StoresFormProps) {
  const [draft, setDraft] = useState<Store>(createEmptyStore);
  const [errors, setErrors] = useState<StoreErrors>({});
  const [formError, setFormError] = useState<string>("");

  const handleFieldChange = (field: StoreField, value: string): void => {
    setDraft((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setFormError("");
  };

  const handlePhotosChange = (photos: StorePhoto[]): void => {
    setDraft((prev) => ({ ...prev, photos }));
  };

  // Validates the draft and adds / updates it in the saved list.
  // Returns the new list, or null when validation fails.
  const commitDraft = (): Store[] | null => {
    const found = validateStore(draft);
    setErrors(found);
    if (Object.keys(found).length > 0) return null;

    const exists = stores.some((s) => s.id === draft.id);
    const next = exists ? stores.map((s) => (s.id === draft.id ? draft : s)) : [...stores, draft];
    onStoresChange(next);
    setFormError("");
    return next;
  };

  const handleSave = (e?: FormEvent): void => {
    e?.preventDefault();
    commitDraft();
  };

  const handleAddStore = (): void => {
    if (isDirty(draft) && !commitDraft()) return;
    setDraft(createEmptyStore());
    setErrors({});
    setFormError("");
  };

  const handleNext = (): void => {
    let current = stores;
    if (isDirty(draft)) {
      const next = commitDraft();
      if (!next) return;
      current = next;
    }
    if (current.length === 0) {
      setFormError("Add at least one store to continue");
      return;
    }
    onSubmit();
  };

  const handleEdit = (store: Store): void => {
    setDraft({ ...store, photos: [...store.photos] });
    setErrors({});
    setFormError("");
  };

  const handleRemove = (store: Store): void => {
    store.photos.forEach((p) => URL.revokeObjectURL(p.url));
    onStoresChange(stores.filter((s) => s.id !== store.id));
    if (draft.id === store.id) setDraft(createEmptyStore());
  };

  const renderField = (f: StoreFieldConfig) => (
    <TextField
      key={f.name}
      name={f.name}
      label={f.label}
      type={f.type}
      autoComplete={f.autoComplete}
      required={f.required}
      value={draft[f.name]}
      error={errors[f.name]}
      onValueChange={(value) => handleFieldChange(f.name, value)}
    />
  );

  return (
    <form onSubmit={handleSave} noValidate className="flex flex-col gap-4">
      {stores.length > 0 && (
        <ul aria-label="Saved stores" className="flex flex-col gap-2">
          {stores.map((store) => (
            <li
              key={store.id}
              className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2 ${
                store.id === draft.id ? "border-[#5B3FD6] bg-[#F6F3FF]" : "border-gray-200"
              }`}
            >
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-gray-900">{store.name}</p>
                <p className="truncate text-[11px] text-gray-500">{store.address}</p>
              </div>
              <div className="flex shrink-0 gap-1">
                <button
                  type="button"
                  aria-label={`Edit ${store.name}`}
                  onClick={() => handleEdit(store)}
                  className="grid h-8 w-8 place-items-center rounded text-gray-500 transition-colors hover:bg-white hover:text-[#5B3FD6]"
                >
                  <Pencil size={14} />
                </button>
                <button
                  type="button"
                  aria-label={`Remove ${store.name}`}
                  onClick={() => handleRemove(store)}
                  className="grid h-8 w-8 place-items-center rounded text-gray-500 transition-colors hover:bg-white hover:text-red-500"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {STORE_PRIMARY_FIELDS.map(renderField)}

      <MapPreview address={draft.address} />

      {STORE_CONTACT_FIELDS.map(renderField)}

      <PhotoUploader photos={draft.photos} onChange={handlePhotosChange} max={MAX_STORE_PHOTOS} />

      <div className="flex flex-wrap gap-3">
        <PrimaryButton type="submit">Save</PrimaryButton>
        <OutlineButton onClick={handleAddStore}>Add store</OutlineButton>
      </div>

      {formError && (
        <p role="alert" className="text-xs text-red-500">
          {formError}
        </p>
      )}

      <div className="mt-2 flex items-center gap-3 border-t border-slate-100 pt-5">
        <SecondaryButton onClick={onBack} withArrow>
          Back
        </SecondaryButton>
        <PrimaryButton onClick={handleNext} withArrow>
          Next
        </PrimaryButton>
      </div>
    </form>
  );
}