import type { HomeData, Product } from '../../types/home';
import img1 from '../../assets/home/img1.png'; // Mobil banner
import img2 from '../../assets/home/img2.png'; // brake disc with red caliper
import img3 from '../../assets/home/img3.png'; // tire
import img4 from '../../assets/home/img4.png'; // brake disc with pads
import img5 from '../../assets/home/img1.png'; // Genesis oil canisters

const productTitle = 'Mobil SUPER 3000 X1 5W-40, 1 L. Motor oil.';

const createProduct = (id: number, image: string, imageAlt: string): Product => ({
  id,
  article: '153789',
  title: productTitle,
  image,
  imageAlt,
  rating: 4,
  reviewsCount: 61,
  price: 2334,
  oldPrice: 2864,
});

export const homeData: HomeData = {
  categoryCards: [
    {
      id: 'genesis-oils',
      title: 'Genesis motor oils',
      buttonLabel: 'Go to',
      href: '/catalog/motor-oils/genesis',
      image: img5,
      imageAlt: 'Genesis motor oil canisters',
    },
    {
      id: 'winter-tires',
      title: 'Winter tires for less',
      buttonLabel: 'Choose',
      href: '/catalog/tires/winter',
      image: img3,
      imageAlt: 'Winter tire',
    },
    {
      id: 'maintenance-parts',
      title: 'Parts for maintenance',
      buttonLabel: 'View',
      href: '/catalog/maintenance',
      image: img2,
      imageAlt: 'Brake disc with red caliper',
    },
  ],
  productSections: [
    {
      id: 'motor-oils',
      title: 'Motor oils',
      viewAllLabel: 'All motor oils',
      viewAllHref: '/catalog/motor-oils',
      banner: {
        title: 'No. 1 motor oils from official dealers',
        badge: 'Sale',
        image: img1,
        imageAlt: 'Mobil 1 motor oil bottles',
        href: '/catalog/motor-oils',
      },
      products: [
        createProduct(1, img2, 'Brake disc with red caliper'),
        createProduct(2, img3, 'Car tire'),
        createProduct(3, img4, 'Brake disc with pads'),
      ],
    },
    {
      id: 'recommended',
      title: 'Recommended',
      products: [
        createProduct(11, img5, 'Genesis motor oil canister'),
        createProduct(12, img2, 'Brake disc with red caliper'),
        createProduct(13, img4, 'Brake disc with pads'),
        createProduct(14, img3, 'Car tire'),
        createProduct(15, img5, 'Genesis motor oil canister'),
        createProduct(16, img2, 'Brake disc with red caliper'),
      ],
    },
    {
      id: 'best-sellers',
      title: 'Best sellers',
      products: [
        createProduct(21, img4, 'Brake disc with pads'),
        createProduct(22, img3, 'Car tire'),
        createProduct(23, img5, 'Motor oil canister'),
        createProduct(24, img2, 'Brake disc with red caliper'),
        createProduct(25, img4, 'Brake disc with pads'),
        createProduct(26, img3, 'Car tire'),
      ],
    },
  ],
};