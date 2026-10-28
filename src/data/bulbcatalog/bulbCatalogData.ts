import type { CatalogConfig, CatalogProduct } from '../../types/catalog';
import bulb1 from '../../assets/home/img5.png';
import bulb2 from '../../assets/battery/battery1.png';
import bulb3 from '../../assets/battery/battery2.png';
import bulb4 from '../../assets/battery/battery3.png';

export const bulbCatalogConfig: CatalogConfig = {
  title: 'Car bulbs',
  filters: [
    { type: 'checkbox', key: 'brand', title: 'Brand', searchable: true },
    { type: 'checkbox', key: 'lampType', title: 'Lamp type' },
    { type: 'checkbox', key: 'voltage', title: 'Voltage, V' },
    { type: 'range', key: 'power', title: 'Power, W' },
    { type: 'checkbox', key: 'technology', title: 'Technology' },
    { type: 'range', key: 'colorTemp', title: 'Color temperature, K' },
  ],
  specs: [
    { key: 'lampType', label: 'Lamp type' },
    { key: 'voltage', label: 'Voltage, V' },
    { key: 'power', label: 'Power, W' },
    { key: 'technology', label: 'Technology' },
  ],
};


const brands = ['Osram', 'Philips', 'Bosch', 'Narva', 'General Electric'];
const images = [bulb1, bulb2, bulb3, bulb4];
const lampTypes = ['H1', 'H3', 'H4', 'H7', 'H11', 'HB3', 'HB4', 'W5W', 'P21W'];
const powerByType: Record<string, number> = {
  H1: 55, H3: 55, H4: 60, H7: 55, H11: 55, HB3: 60, HB4: 51, W5W: 5, P21W: 21,
};
const technologies = ['Halogen', 'LED', 'Xenon'];
const colorTemps = [3000, 3200, 4300, 5000, 6000, 6500];

export const bulbs: CatalogProduct[] = Array.from({ length: 45 }, (_, i) => {
  const brand = brands[i % brands.length];
  const lampType = lampTypes[i % lampTypes.length];
  const technology = technologies[(i >> 1) % technologies.length];
  const voltage = i % 7 === 6 ? '24' : '12';
  const power = powerByType[lampType];

  return {
    id: i + 1,
    brand,
    title: `${technology} lamp ${lampType}, ${voltage}V ${power}W`,
    article: `BL${64150 + i}`,
    image: images[i % images.length],
    imageAlt: `${brand} ${lampType} bulb`,
    priceFrom: 450 + (i % 6) * 120,
    attributes: {
      lampType,
      voltage,
      power,
      technology,
      colorTemp: colorTemps[i % colorTemps.length],
    },
  };
});