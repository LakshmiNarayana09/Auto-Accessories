import type { LucideIcon } from 'lucide-react';

export type CustomerType = 'individual' | 'legal';
export type LegalForm = 'llc' | 'sole-proprietor';
export type DeliveryMethodId = 'courier' | 'store-pickup' | 'point-pickup';
export type PaymentMethodId = 'card' | 'invoice' | 'courier-cash';

export interface DeliveryMethod {
  id: DeliveryMethodId;
  title: string;
  description: string;
  cost: number;
}

export interface PaymentMethod {
  id: PaymentMethodId;
  title: string;
  icon: LucideIcon;
  availableFor: CustomerType[];
}

export interface PickupStore {
  id: string;
  address: string;
  workingHours: string;
  availability: string;
  mapImage: string;
  mapUrl: string;
}

export interface CheckoutFormValues {
  customerType: CustomerType;
  legalForm: LegalForm;
  companyName: string;
  taxId: string;
  kpp: string;
  legalAddress: string;
  fullName: string;
  email: string;
  phone: string;
  deliveryMethod: DeliveryMethodId;
  pickupStoreId: string;
  city: string;
  street: string;
  house: string;
  building: string;
  apartment: string;
  comment: string;
  paymentMethod: PaymentMethodId;
}

export type CheckoutErrors = Partial<Record<keyof CheckoutFormValues, string>>;