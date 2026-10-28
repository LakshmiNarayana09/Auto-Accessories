import { MapPin } from "lucide-react";

interface MapPreviewProps {
  address?: string;
  className?: string;
}

/**
 * Placeholder map. Swap the inner <div> for a real map later
 * (Google Maps, Yandex Maps, Leaflet) and keep this wrapper.
 */
export default function MapPreview({ address = "", className = "" }: MapPreviewProps) {
  return (
    <div
      role="img"
      aria-label={address ? `Map showing ${address}` : "Map preview"}
      className={`relative h-36 w-full overflow-hidden rounded-md bg-[#E8EDF1] sm:h-44 ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.7) 0 2px, transparent 2px 36px), repeating-linear-gradient(90deg, rgba(255,255,255,0.7) 0 2px, transparent 2px 48px)",
      }}
    >
      <div className="absolute left-[8%] top-[18%] h-[45%] w-[22%] rounded bg-[#D5E6D2]" />
      <div className="absolute bottom-[12%] right-[10%] h-[30%] w-[30%] rounded bg-[#D9DEE5]" />
      <MapPin
        size={30}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full fill-[#5B3FD6] text-white"
      />
    </div>
  );
}