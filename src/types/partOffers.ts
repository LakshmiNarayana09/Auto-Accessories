export interface BreadcrumbItem {
  label: string;
  href?: string;
}


export type SupplierStatsVariant = 'icons' | 'rings' | 'gauge';

export interface SupplierInfo {
  processingTime: string; 
  priceUpdated: string;   
  approvedPercent: number;
  returnsPercent: number;
  returnTitle: string;
  returnText: string;
  statsVariant?: SupplierStatsVariant; 
}

export interface Offer {
  id: number;
  description: string;
  availability: number;
  leadTimeDays: number;
  price: number;
  isDealer?: boolean;
  defaultQuantity?: number;
}

export interface OfferGroupData {
  id: string;
  manufacturer: string;
  partNumber: string;
  partHref: string;
  supplierLabel: string;
  rating?: number; 
  offers: Offer[];
  moreOffersCount?: number;
  minLeadTimeDays?: number;
  minPrice?: number;
  supplier?: SupplierInfo;
}

export interface OffersSectionData {
  id: string;
  title: string;
  actionLabel?: string;
  actionHref?: string;
  groups: OfferGroupData[];
}

export interface PartOffersData {
  breadcrumbs: BreadcrumbItem[];
  brand: string;
  partNumber: string;
  description: string;
  sections: OffersSectionData[];
}

export type SortKey = 'description' | 'availability' | 'leadTimeDays' | 'price';

export interface SortState {
  key: SortKey;
  dir: 'asc' | 'desc';
}