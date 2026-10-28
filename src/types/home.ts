import type { LucideIcon } from "lucide-react";

export interface CategoryItem {
  id: number;
  title: string;
  count: string;
  icon: LucideIcon;
}

export interface NavigationItem {
  label: string;
  active?: boolean;
}

export interface Product {
  id: number;
  article: string;
  title: string;
  image: string;
  imageAlt: string;
  rating: number; 
  reviewsCount: number;
  price: number;
  oldPrice?: number;
  brand?: string;
  deliveryDays?: number;
}

export interface PromoBannerData {
  title: string;
  badge: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface ProductSectionData {
  id: string;
  title: string;
  viewAllLabel?: string; 
  viewAllHref?: string;
  banner?: PromoBannerData; 
  products: Product[];
}

export interface CategoryCardData {
  id: string;
  title: string;
  buttonLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface HomeData {
  categoryCards: CategoryCardData[];
  productSections: ProductSectionData[];
}