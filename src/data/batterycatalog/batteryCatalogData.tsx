
import type { CatalogConfig, CatalogProduct } from '../../types/catalog';
import img1 from '../../assets/battery/battery1.png';
import img2 from '../../assets/battery/battery2.png';
import img3 from '../../assets/battery/battery3.png';
import img4 from '../../assets/battery/battery1.png';

export const batteryCatalogConfig: CatalogConfig = {
  title: 'Battery catalog',
  
  filters: [
    { type: 'checkbox', key: 'brand', title: 'Brand', searchable: true },
    { type: 'range', key: 'capacity', title: 'Battery capacity, Ah' },
    { type: 'checkbox', key: 'terminals', title: 'Terminals' },
    { type: 'checkbox', key: 'mounting', title: 'Battery mounting' },
    { type: 'checkbox', key: 'voltage', title: 'Voltage, V' },
    { type: 'range', key: 'power', title: 'Nominal power, W' },
    { type: 'checkbox', key: 'terminalPosition', title: 'Terminal position' },
    { type: 'checkbox', key: 'series', title: 'Series' },
    { type: 'range', key: 'coldCrankDin', title: 'Cold cranking current DIN, A' },
    { type: 'range', key: 'coldCrankEn', title: 'Cold cranking current EN, A' },
  ],
  
  specs: [
    { key: 'voltage', label: 'Voltage, V' },
    { key: 'capacity', label: 'Battery capacity, Ah' },
    { key: 'terminalPosition', label: 'Terminal position' },
    { key: 'terminals', label: 'Terminals' },
  ],
};


const brands = [
  { name: 'Bosch', images: [img1, img3, img4] },
  { name: 'Varta', images: [img2] },
  { name: 'AZ Zebo', images: [img1] },
  { name: 'Banner', images: [img2] },
  { name: 'Berga', images: [img3] },
];
const capacities = [30, 40, 45, 52, 60, 75, 100];
const terminalsList = ['1', '1/3', '21', '3', '8', '9'];
const mountings = ['B00', 'B03', 'B06', 'B09', 'B13', 'B14', 'B17', 'B19'];
const positions = ['0 (reverse)', '1 (direct)', '3', '6', '9'];
const seriesList = ['0 (reverse)', '1 (direct)', '3', '6', '9'];

export const batteries: CatalogProduct[] = Array.from({ length: 45 }, (_, i) => {
  const brand = brands[i % brands.length];
  const capacity = capacities[i % capacities.length];
  const voltage = i % 6 === 5 ? '6' : '12';

  return {
    id: i + 1,
    brand: brand.name,
    title: `Rechargeable battery "S4 Silver", ${voltage}V ${capacity}Ah`,
    article: `0092S40${240 + i}`,
    image: brand.images[i % brand.images.length],
    imageAlt: `${brand.name} battery`,
    priceFrom: 12739 + (i % 4) * 350,
    attributes: {
      voltage,
      capacity,
      terminals: terminalsList[i % terminalsList.length],
      mounting: mountings[i % mountings.length],
      power: 250 + (i % 9) * 250,
      terminalPosition: positions[(i >> 1) % positions.length],
      series: seriesList[(i >> 2) % seriesList.length],
      coldCrankDin: 200 + (i % 8) * 60,
      coldCrankEn: 300 + (i % 11) * 140,
    },
  };
});