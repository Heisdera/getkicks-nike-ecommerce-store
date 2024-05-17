export interface Product {
  name: string;
  image: string;
  id: string;
  price_string: string;
  currency: string;
  price: number;
}

export interface ProductDetails {
  name: string;
  id: string;
  price_string: string;
  currency: string;
  price: number;
  image: string;
  images: string[];
  description: {
    color: string[];
    desc_1: string;
    desc_2: string;
    desc_3: {
      sku: string;
      release_date: string;
    };
  };
}
