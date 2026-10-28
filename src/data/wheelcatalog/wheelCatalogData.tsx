import type { CatalogConfig, CatalogProduct } from '../../types/catalog';
import wheel1 from '../../assets/wheels/wheel1.png';
import wheel2 from '../../assets/wheels/wheel2.png';
import wheel3 from '../../assets/wheels/wheel3.png';
import wheel4 from '../../assets/wheels/wheel1.png';

export const wheelCatalogConfig: CatalogConfig = {
  title: 'Wheels',
  filters: [
    { type: 'checkbox', key: 'brand', title: 'Brand', searchable: true },
    { type: 'range', key: 'offset', title: 'Offset (ET), mm' },
    { type: 'checkbox', key: 'hubDiameter', title: 'Hub diameter, mm' },
    { type: 'checkbox', key: 'boltPattern', title: 'Bolt pattern' },
    { type: 'checkbox', key: 'size', title: 'Size' },
    { type: 'checkbox', key: 'color', title: 'Wheel color' },
  ],
  specs: [
    { key: 'size', label: 'Size' },
    { key: 'offset', label: 'Offset (ET), mm' },
    { key: 'hubDiameter', label: 'Hub diameter, mm' },
    { key: 'boltPattern', label: 'Bolt pattern' },
  ],
};


const brands = ['LS Replica', '4Go', 'Alcasta', 'Replay', 'K&K', 'SKAD'];
const images = [wheel1, wheel2, wheel3, wheel4];
const sizes = ['6.5x16', '7x17', '8x18', '10x20', '10.5x20', '10x22', '10.5x22'];
const offsets = [20, 25, 30, 35, 40, 45, 50, 55];
const hubDiameters = [100.1, 106.2, 107.1, 108, 108.2];
const boltPatterns = ['4x98', '4x100', '4x108', '5x108', '5x112', '5x114.3'];
const colors = ['White', 'Graphite', 'Red', 'Silver', 'Chrome', 'Black'];

export const wheels: CatalogProduct[] = Array.from({ length: 45 }, (_, i) => {
  const brand = brands[i % brands.length];
  const offset = offsets[i % offsets.length];
  const hubDiameter = hubDiameters[i % hubDiameters.length];
  const boltPattern = boltPatterns[(i >> 1) % boltPatterns.length];
  const color = colors[(i >> 1) % colors.length];

  return {
    id: i + 1,
    brand,
    title: `Cast wheel "${1190 + i} (V${(i % 9) + 1}. ${boltPattern})", ET${offset}, D${hubDiameter}, ${color.toLowerCase()}`,
    article: `WH${100200 + i}`,
    image: images[i % images.length],
    imageAlt: `${brand} alloy wheel`,
    priceFrom: 12739 + (i % 5) * 400,
    attributes: {
      size: sizes[i % sizes.length],
      offset,
      hubDiameter,
      boltPattern,
      color,
    },
  };
});