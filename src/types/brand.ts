export interface Brand {
  id: number;
  name: string;
  letter: string;

  logo?: string;
  country?: string;
  website?: string;
  description?: string;
  products?: BrandProduct[];
}

export interface BrandProduct {
  id: number;
  number: string;
  name: string;
  stock: number;
}