import Image1 from "../assets/nike-dunk-low-medium-olive-1.webp";
import Image2 from "../assets/nike-dunk-low-medium-olive-2.webp";
import Image3 from "../assets/nike-dunk-low-medium-olive-3.webp";

export const productsData = [
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image1,
    id: "nike-dunk-low-medium-olive",
    price_string: "€120",
    currency: "€",
    price: 120,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image2,
    id: "nike-dunk-low-medium-oli",
    price_string: "€120",
    currency: "€",
    price: 110,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image3,
    id: "nike-dunk-low-medium",
    price_string: "€120",
    currency: "€",
    price: 100,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image1,
    id: "nike-dunk-low-medi",
    price_string: "€120",
    currency: "€",
    price: 120,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image2,
    id: "nike-dunk-low-me",
    price_string: "€120",
    currency: "€",
    price: 110,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image3,
    id: "nike-dunk-low",
    price_string: "€120",
    currency: "€",
    price: 100,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image1,
    id: "nike-dunk-lo",
    price_string: "€120",
    currency: "€",
    price: 120,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image2,
    id: "nike-dunk-l",
    price_string: "€120",
    currency: "€",
    price: 110,
  },
  {
    name: "Nike Dunk Low Medium Olive",
    image: Image3,
    id: "nike-dunk",
    price_string: "€120",
    currency: "€",
    price: 100,
  },
];

export function getProductDetails() {
  const details = {
    name: "Nike Dunk Low Medium Olive",
    id: "nike-dunk-low-medium-olive",
    price_string: "€115",
    currency: "€",
    price: 115,
    image: Image1,
    images: [Image2, Image3],
    description: {
      desc_1:
        "Nike prepares for its return from the classes and offers a new most effective color of its best seller, the Dunk Low.",
      desc_2:
        "There Nike Dunk Low Medium Olive reveal a base in Smooth white leather accompanied by overlays in green leather olive. These panels agree with branding on the tongue, laces, lining in fabric and outsole. At the back of the model, branding Nike brings texture with a Immaculate embroidery Perfectly matching the silhouette.",
      desc_3: {
        sku: "DD1503-120",
        releaseDate: "October 2022",
      },
      color: ["Green"],
    },
  };

  return details;
}
