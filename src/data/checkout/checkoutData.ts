import { Banknote, CreditCard, FileText } from 'lucide-react';
import type { DeliveryMethod, PaymentMethod, PickupStore } from '../../types/checkout';
import storeMap from '../../assets/checkout/mapImg.png';

export const deliveryMethods: DeliveryMethod[] = [
  {
    id: 'courier',
    title: 'Courier delivery',
    description: 'CDEK, Boxberry, Business Lines — from 349 ₽',
    cost: 870,
  },
  {
    id: 'store-pickup',
    title: 'Pickup from store',
    description: 'From 29.04.2021 (Thursday) — free',
    cost: 0,
  },
  {
    id: 'point-pickup',
    title: 'Pickup from pickup point',
    description: 'CDEK, Boxberry — from 0 ₽',
    cost: 0,
  },
];

export const paymentMethods: PaymentMethod[] = [
  { id: 'card', title: 'Card payment', icon: CreditCard, availableFor: ['individual', 'legal'] },
  { id: 'invoice', title: 'Cashless payment by invoice', icon: FileText, availableFor: ['individual', 'legal'] },
  { id: 'courier-cash', title: 'Pay the courier', icon: Banknote, availableFor: ['individual'] },
];


export const promoCodes: Record<string, number> = {
  SPRING2021: 5,
};


export const mockOrder = {
  itemsCount: 6,
  subtotal: 23000,
};



export const pickupStores: PickupStore[] = [
  {
    id: 'komsomolskaya-103',
    address: 'Saint Petersburg, 103 Komsomolskaya St.',
    workingHours: 'Mon–Fri, 10:00 to 20:00',
    availability: 'Tomorrow',
    mapImage: storeMap,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saint+Petersburg+Komsomolskaya+103',
  },
  {
    id: 'nevsky-45',
    address: 'Saint Petersburg, 45 Nevsky Ave.',
    workingHours: 'Mon–Sat, 09:00 to 21:00',
    availability: 'Today',
    mapImage: storeMap,
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Saint+Petersburg+Nevsky+45',
  },
];


export const nearbyStoreOffer = {
  priceFrom: 3870,
  distanceMeters: 500,
};