export interface IProductCardProps {
  id: string | number;
  slug: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  oldPrice?: number | null;
  outOfStock?: boolean;
  discountPercent?: number;
  currency?: string;
  rating?: number;
  resources?: any;
}
