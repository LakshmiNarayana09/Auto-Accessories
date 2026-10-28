import { useRef, type ChangeEvent } from "react";
import { Plus, X } from "lucide-react";
import type { StorePhoto } from "../../types/supplierRegistration";
import { createId } from "../../utils/createId";

interface PhotoUploaderProps {
  photos: StorePhoto[];
  onChange: (photos: StorePhoto[]) => void;
  max?: number;
}

export default function PhotoUploader({ photos, onChange, max = 8 }: PhotoUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []).filter((f) => f.type.startsWith("image/"));
    const added: StorePhoto[] = files.slice(0, max - photos.length).map((file) => ({
      id: createId(),
      name: file.name,
      url: URL.createObjectURL(file),
    }));
    if (added.length > 0) onChange([...photos, ...added]);
    e.target.value = ""; // allow picking the same file again
  };

  const handleRemove = (id: string) => onChange(photos.filter((p) => p.id !== id));

  return (
    <div className="flex flex-wrap gap-2">
      {photos.map((photo) => (
        <div key={photo.id} className="relative h-14 w-14 overflow-hidden rounded-md bg-gray-100">
          <img src={photo.url} alt={photo.name} className="h-full w-full object-cover" />
          <button
            type="button"
            aria-label={`Remove photo ${photo.name}`}
            onClick={() => handleRemove(photo.id)}
            className="absolute right-0.5 top-0.5 grid h-4 w-4 place-items-center rounded-sm bg-white/90 text-gray-700 hover:bg-white"
          >
            <X size={10} />
          </button>
        </div>
      ))}

      {photos.length < max && (
        <>
          <button
            type="button"
            aria-label="Add photo"
            onClick={() => inputRef.current?.click()}
            className="grid h-14 w-14 place-items-center rounded-md border border-gray-200 bg-white text-gray-500 transition-colors hover:border-[#5B3FD6] hover:text-[#5B3FD6]"
          >
            <Plus size={18} />
          </button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFiles}
            className="sr-only"
            tabIndex={-1}
          />
        </>
      )}
    </div>
  );
}