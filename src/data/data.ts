// --- INITTAL DUMMY DATA USED ---
// import Image1 from "../assets/nike-dunk-low-medium-olive-1.webp";
// import Image2 from "../assets/nike-dunk-low-medium-olive-2.webp";
// import Image3 from "../assets/nike-dunk-low-medium-olive-3.webp";

// export const productsData = [
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image1,
//     id: "nike-dunk-low-medium-olive",
//     price_string: "€120",
//     currency: "€",
//     price: 120,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image2,
//     id: "nike-dunk-low-medium-oli",
//     price_string: "€120",
//     currency: "€",
//     price: 110,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image3,
//     id: "nike-dunk-low-medium",
//     price_string: "€120",
//     currency: "€",
//     price: 100,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image1,
//     id: "nike-dunk-low-medi",
//     price_string: "€120",
//     currency: "€",
//     price: 120,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image2,
//     id: "nike-dunk-low-me",
//     price_string: "€120",
//     currency: "€",
//     price: 110,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image3,
//     id: "nike-dunk-low",
//     price_string: "€120",
//     currency: "€",
//     price: 100,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image1,
//     id: "nike-dunk-lo",
//     price_string: "€120",
//     currency: "€",
//     price: 120,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image2,
//     id: "nike-dunk-l",
//     price_string: "€120",
//     currency: "€",
//     price: 110,
//   },
//   {
//     name: "Nike Dunk Low Medium Olive",
//     image: Image3,
//     id: "nike-dunk",
//     price_string: "€120",
//     currency: "€",
//     price: 100,
//   },
// ];

// export function getProductDetails() {
//   const details = {
//     name: "Nike Dunk Low Medium Olive",
//     id: "nike-dunk-low-medium-olive",
//     price_string: "€115",
//     currency: "€",
//     price: 115,
//     image: Image1,
//     images: [Image2, Image3],
//     description: {
//       desc_1:
//         "Nike prepares for its return from the classes and offers a new most effective color of its best seller, the Dunk Low.",
//       desc_2:
//         "There Nike Dunk Low Medium Olive reveal a base in Smooth white leather accompanied by overlays in green leather olive. These panels agree with branding on the tongue, laces, lining in fabric and outsole. At the back of the model, branding Nike brings texture with a Immaculate embroidery Perfectly matching the silhouette.",
//       desc_3: {
//         sku: "DD1503-120",
//         releaseDate: "October 2022",
//       },
//       color: ["Green"],
//     },
//   };

//   return details;
// }

export const currencies = [
  {
    currencyCode2: "eu",
    currencyCode3: "EUR",
  },
  {
    currencyCode2: "us",
    currencyCode3: "USD",
  },
  {
    currencyCode2: "gb",
    currencyCode3: "GBP",
  },
  {
    currencyCode2: "jp",
    currencyCode3: "JPY",
  },
  {
    currencyCode2: "cn",
    currencyCode3: "CNY",
  },
  {
    currencyCode2: "ng",
    currencyCode3: "NGN",
  },
];

export const collections: { text: string; link: string }[] = [
  { text: "All", link: "nike" },
  { text: "Nike Dunk", link: "nike-dunk" },
  { text: "Nike Air Force 1", link: "nike-air-force-1" },
  { text: "Nike Air Max", link: "nike-air-max" },
  { text: "Nike x Travis Scott", link: "travis-scott-cactus-jack" },
  { text: "Nike x Sacai", link: "nike-sacai" },
  { text: "Nike x Off-White", link: "nike-off-white" },
  { text: "Nike x Jacquemus", link: "nike-jacquemus" },
  { text: "Nike x NOCTA", link: "nike-nocta" },
  { text: "Nike Zoom Vomero 5", link: "nike-zoom-vomero-5" },
  { text: "Nike x Supreme", link: "supreme-nike" },
  { text: "Nike Cortez", link: "nike-cortez" },
  { text: "Nike Blazer", link: "nike-blazer" },
  { text: "Autres Nike", link: "autres-modeles-nike" },
];

export const navigation = {
  categories: [
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "Top Trend",
          href: "sb-dunk-high-supreme-rammellzee",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/2358/2817/files/Nike-SB-Dunk-High-Supreme-Rammellzzee_1.png?v=1697120719&width=1940",
          imageAlt:
            "As part of its new collection FW23, Supreme reveals a news Sb Dunk High in collaboration with Nike.",
        },
        {
          name: "New Release",
          href: "nike-sb-dunk-low-born-x-raised-one-block-at-a-time",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/2358/2817/files/Nike-SB-Dunk-Low-Born-x-Raised-One-Block-At-A-Time-3.png?v=1706012178&width=1940",
          imageAlt:
            "This Nike Sb Dunk Low Born x Raised One Block at Time reveal a base in white leather, accompanied by overlays in royal blue nubuck. It stands out with many details present all around the pair.",
        },
      ],
      sections: [
        {
          id: "collections",
          name: "Collections",
          items: [
            { name: "All Nikes", href: "nike" },
            { name: "Nike Dunk", href: "nike-dunk" },
            { name: "Nike Air Force 1", href: "nike-air-force-1" },
            { name: "Nike Air Max", href: "nike-air-max" },
            { name: "Nike x Travis Scott", href: "travis-scott-cactus-jack" },
            { name: "Nike x Sacai", href: "nike-sacai" },
            { name: "Nike x Off-White", href: "nike-off-white" },
            { name: "Nike x Jacquemus", href: "nike-jacquemus" },
            { name: "Nike x NOCTA", href: "nike-nocta" },
            { name: "Nike Zoom Vomero 5", href: "nike-zoom-vomero-5" },
            { name: "Nike x Supreme", href: "supreme-nike" },
            { name: "Nike Cortez", href: "nike-cortez" },
            { name: "Nike Blazer", href: "nike-blazer" },
            { name: "Autres Nike", href: "autres-modeles-nike" },
          ],
        },
      ],
    },
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "Top Trend",
          href: "nike-dunk-low-triple-pink-barbie",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/2358/2817/files/nike-dunk-low-triple-pink.png?v=1690359331&width=1940",
          imageAlt:
            "As the start of the school year approaches, the Sportswear giant continue to highlight its Dunk Low.",
        },
        {
          name: "New Release",
          href: "nike-air-force-1-low-07-se-love-for-all-valentines-day-2021",
          imageSrc:
            "https://cdn.shopify.com/s/files/1/2358/2817/products/air-force-1-low-07-se-love-for-all-valentines-day-2021-220781.png?v=1638812326&width=1940",
          imageAlt:
            "A design Simple but ultra efficient, which falls at stake for the unmissable meeting of the fans of special Valentine's Day editions!",
        },
      ],
      sections: [
        {
          id: "collections",
          name: "Collections",
          items: [
            { name: "All Nikes", href: "nike" },
            { name: "Nike Dunk", href: "nike-dunk" },
            { name: "Nike Air Force 1", href: "nike-air-force-1" },
            { name: "Nike Air Max", href: "nike-air-max" },
            { name: "Nike x Travis Scott", href: "travis-scott-cactus-jack" },
            { name: "Nike x Sacai", href: "nike-sacai" },
            { name: "Nike x Off-White", href: "nike-off-white" },
            { name: "Nike x Jacquemus", href: "nike-jacquemus" },
            { name: "Nike x NOCTA", href: "nike-nocta" },
            { name: "Nike Zoom Vomero 5", href: "nike-zoom-vomero-5" },
            { name: "Nike x Supreme", href: "supreme-nike" },
            { name: "Nike Cortez", href: "nike-cortez" },
            { name: "Nike Blazer", href: "nike-blazer" },
            { name: "Autres Nike", href: "autres-modeles-nike" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
