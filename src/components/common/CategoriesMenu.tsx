import type { LucideIcon } from "lucide-react";
import {
  BatteryCharging,
  CarFront,
  CircleDot,
  Cog,
  Disc3,
  Droplets,
  FlaskConical,
  Lightbulb,
  PanelTop,
  Truck,
  Wrench,
} from "lucide-react";
import img from "../../assets/home/img5.png";

export interface CategoryLink {
  label: string;
  path: string;
  icon: LucideIcon;
}

export const categoryLinks: CategoryLink[] = [
  { label: "Original Parts", path: "/parts/original", icon: Disc3 },
  { label: "Body Parts", path: "/parts/body", icon: CarFront },
  { label: "Motor Oils", path: "/motor-oils", icon: Droplets },
  { label: "Batteries", path: "/batteries", icon: BatteryCharging },
  { label: "Non-Original Parts", path: "/parts/non-original", icon: Cog },
  { label: "Parts for Maintenance", path: "/parts/maintenance", icon: Wrench },
  { label: "Car Chemicals", path: "/car-chemicals", icon: FlaskConical },
  { label: "Car Bulbs", path: "/bulbs", icon: Lightbulb },
  { label: "Parts for VAZ, GAZ, KAMAZ", path: "/parts/domestic", icon: Truck },
  { label: "Car Glass", path: "/car-glass", icon: PanelTop },
  { label: "Wheels", path: "/wheels", icon: CircleDot },
];

interface CategoriesMenuProps {
  activePath?: string;
  onSelect: (path: string) => void;
  promoImage?: string;
  promoPath?: string;
  variant?: "popover" | "inline";
}

function CategoriesMenu({
  activePath,
  onSelect,
  promoPath = "/motor-oils",
  variant = "popover",
}: CategoriesMenuProps) {
  const isPopover = variant === "popover";

  return (
    <div
      role="menu"
      aria-label="All categories"
      className={
        isPopover
          ? "grid gap-4 rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.12)] md:grid-cols-[1fr_240px] lg:grid-cols-[1fr_280px]"
          : "grid gap-3"
      }
    >
      <ul className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-4">
        {categoryLinks.map(({ label, path, icon: Icon }) => {
          const active = activePath === path;

          return (
            <li key={path}>
              <button
                type="button"
                role="menuitem"
                onClick={() => onSelect(path)}
                className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[11px] font-medium transition-colors hover:bg-gray-100 hover:text-[#5548d5] ${
                  active ? "bg-gray-100 text-[#5548d5]" : "text-gray-700"
                }`}
              >
                <Icon size={17} className="shrink-0 text-[#5548d5]" />
                <span className="truncate">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        onClick={() => onSelect(promoPath)}
        className="relative flex min-h-[150px] overflow-hidden rounded-xl bg-[#5b49d6] p-5 text-left md:min-h-[200px]"
      >
        <span className="relative z-10 max-w-[150px] text-[13px] font-bold leading-snug text-white">
          Motor Oils No.1 from official dealers
        </span>

        <img
          src={img}
          alt="Motor oils"
          className="pointer-events-none absolute bottom-0 right-0 h-[85%] w-auto object-contain object-bottom"
        />
      </button>
    </div>
  );
}

export default CategoriesMenu;