import type { PartOffersData } from '../../types/partOffers';

const returnText =
  'Returns of goods of proper quality are possible within 14 calendar days after the customer receives the order. The supplier may refuse a return for the following goods: electrical parts, large body parts, glass, tinted parts, and parts costing over 5,000 rubles. Return and deduction terms are provided on request.';

export const partOffersData: PartOffersData = {
  breadcrumbs: [
    { label: 'Original parts catalogs', href: '/catalogs' },
    { label: 'Audi', href: '/catalogs/audi' },
    { label: 'Search by Audi parameters', href: '/catalogs/audi/search' },
    { label: 'Audi Q5 parts', href: '/catalogs/audi/q5' },
    { label: 'Diesel injector flame-arresting washer' },
  ],
  brand: 'BOSCH',
  partNumber: 'F 00V P01 008',
  description:
    'Diesel injector flame-arresting washer AUDI Q7 4M/4L 3.0/6.0 TDI 06–, TOUAREG 7P5',
  sections: [
    {
      id: 'requested',
      title: 'Requested number',
      actionLabel: 'Choose an order pickup point on the map',
      actionHref: '/pickup-points',
      groups: [
        {
          id: 'bmw-requested',
          manufacturer: 'BMW',
          partNumber: '33208609838',
          partHref: '/search?q=33208609838',
          supplierLabel: 'Reliable supplier',
          rating: 4,
          supplier: {
            processingTime: 'Monday, 25.04.2021, 09:00',
            priceUpdated: '23.04.2021 13:48',
            approvedPercent: 95,
            returnsPercent: 5,
            returnTitle: 'Return of item possible',
            returnText,
            // statsVariant defaults to 'gauge' because this group has a rating
          },
          moreOffersCount: 9,
          minLeadTimeDays: 1,
          minPrice: 52560,
          offers: [
            { id: 1, description: 'Gasket, cylinder head cover', availability: 1, leadTimeDays: 1, price: 56564, defaultQuantity: 1 },
            { id: 2, description: 'Valve cover sealing ring', availability: 3, leadTimeDays: 2, price: 62567, isDealer: true, defaultQuantity: 2 },
            { id: 3, description: 'Auto part / Shaft oil seal', availability: 5, leadTimeDays: 3, price: 78560, defaultQuantity: 1 },
          ],
        },
      ],
    },
    {
      id: 'analogs',
      title: 'Analogs for the number',
      groups: [
        {
          id: 'bmw-analogs',
          manufacturer: 'BMW',
          partNumber: '33208609838',
          partHref: '/search?q=33208609838',
          supplierLabel: 'Reliable supplier',
          supplier: {
            processingTime: 'Monday, 25.04.2021, 09:00',
            priceUpdated: '23.04.2021 13:48',
            approvedPercent: 85,
            returnsPercent: 15,
            returnTitle: 'Return of item possible',
            returnText,
            // statsVariant defaults to 'rings' because there is no rating
          },
          moreOffersCount: 9,
          minLeadTimeDays: 1,
          minPrice: 52560,
          offers: [
            { id: 11, description: 'Cylinder head cover sealing gasket', availability: 1, leadTimeDays: 1, price: 56564, defaultQuantity: 1 },
            { id: 12, description: 'Cylinder head gasket VAG 3.0 TDI 12–', availability: 3, leadTimeDays: 2, price: 62567, isDealer: true, defaultQuantity: 2 },
            { id: 13, description: 'Sealing ring 37*13 mm AUDI, VW 2010–', availability: 5, leadTimeDays: 3, price: 78560, defaultQuantity: 1 },
          ],
        },
      ],
    },
  ],
};