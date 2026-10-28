export interface CartItem {
  id: number;
  brand: string;
  name: string;
  article: string;
  image: string;
  deliveryDays: number;
  price: number;
  quantity: number;
  selected: boolean;
}