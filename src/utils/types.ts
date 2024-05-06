export interface product {
  name: string;
  image: string;
  id: string;
  price_string: string;
  currency: string;
  price: number;
  // favourite?: number;
  // cartQuantity?: number;
}

export interface productDetails {
  name: string;
  id: string;
  price_string: string;
  currency: string;
  price: number;
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
