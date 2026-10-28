import {
  BatteryCharging,
  CircleGauge,
  Cog,
  Disc3,
  FileText,
  Gauge,
  Package,
  Settings2,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface CategoryItem {
  id: number;
  title: string;
  count: string;
  icon: LucideIcon;
  path: string;
}

export const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Original Parts",
    count: "730 products",
    icon: CircleGauge,
    path: "/parts/original",
  },
  {
    id: 2,
    title: "Non-Original Parts",
    count: "278 products",
    icon: Cog,
    path: "/parts/non-original",
  },
  {
    id: 3,
    title: "VAZ, GAZ, KAMAZ Parts",
    count: "730 products",
    icon: Truck,
    path: "/parts/vaz-gaz-kamaz",
  },
  {
    id: 4,
    title: "Body Parts",
    count: "730 products",
    icon: FileText,
    path: "/parts/body",
  },
  {
    id: 5,
    title: "Maintenance Parts",
    count: "730 products",
    icon: Settings2,
    path: "/parts/maintenance",
  },
  {
    id: 6,
    title: "Auto Glass",
    count: "730 products",
    icon: Sparkles,
    path: "/parts/auto-glass",
  },
  {
    id: 7,
    title: "Motor Oils",
    count: "730 products",
    icon: Package,
    path: "/motor-oils",
  },
  {
    id: 8,
    title: "Car Chemicals",
    count: "730 products",
    icon: Wrench,
    path: "/car-chemicals",
  },
  {
    id: 9,
    title: "Wheels",
    count: "730 products",
    icon: Disc3,
    path: "/wheels",
  },
  {
    id: 10,
    title: "Batteries",
    count: "730 products",
    icon: BatteryCharging,
    path: "/batteries",
  },
  {
    id: 11,
    title: "Auto Bulbs",
    count: "730 products",
    icon: Gauge,
    path: "/bulbs",
  },
];