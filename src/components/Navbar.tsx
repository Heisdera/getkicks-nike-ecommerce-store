import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { HiOutlineHeart } from "react-icons/hi";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { selectCartTotalQTY } from "../features/cart/cartSlice";
import { selectWishlistTotalItems } from "../features/wishlist/wishlistSlice";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  selectSelectedCurrency,
  setCurrency,
} from "../features/currencyConverter/currencySlice";
import { useDispatch } from "react-redux";
import { pathVariant } from "../utils/helpers";

const navigation = {
  categories: [
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Top Trend",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
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
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Top Trend",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
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

const currencies = [
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

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(selectSelectedCurrency);
  const cartTotalItems = useSelector(selectCartTotalQTY);
  const wishlistTotalItems = useSelector(selectWishlistTotalItems);

  function handleCurrencyChange(value: string): void {
    dispatch(setCurrency(value));
  }

  return (
    <nav aria-label="Top" className="px-3 sm:px-6 lg:px-8 w-full">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          {/* GetKicks Logo */}
          <div className="ml-1 mt-1 flex">
            <Link to="/collections/nike">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="78"
                height="78"
                viewBox="0 0 434.000000 275.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,275.000000) scale(0.100000,-0.100000)"
                  fill="#444"
                  stroke="none"
                >
                  <motion.path
                    variants={pathVariant(0.1)}
                    initial="hidden"
                    animate="visible"
                    d="M987 2110 c-170 -43 -307 -216 -307 -387 0 -106 35 -165 124 -210 45
-23 59 -25 140 -21 106 5 171 29 229 86 31 30 44 56 72 146 20 60 33 111 30
114 -8 8 -103 20 -163 21 -73 1 -119 -20 -137 -63 -8 -20 -15 -45 -15 -57 0
-20 3 -21 55 -15 50 6 55 4 55 -13 0 -41 -100 -89 -155 -75 -37 9 -55 41 -55
99 0 102 83 221 170 245 50 14 55 13 89 -16 l31 -25 47 26 c27 14 59 34 73 44
21 17 22 21 10 36 -7 9 -33 28 -58 42 -36 21 -60 27 -121 29 -42 2 -93 -1
-114 -6z"
                  />
                  {/* <!-- e --> */}
                  <motion.path
                    variants={pathVariant(0.3)}
                    initial="hidden"
                    animate="visible"
                    d="M1435 1902 c-94 -33 -152 -93 -176 -184 -22 -83 20 -175 95 -209 85
-39 237 -14 309 51 37 33 32 52 -21 69 -37 13 -44 12 -93 -12 -37 -18 -63 -24
-82 -20 -32 6 -60 43 -55 70 3 15 17 17 143 15 77 -2 146 2 154 7 8 5 16 32
18 63 4 46 0 59 -26 100 -23 36 -39 49 -68 57 -56 16 -141 13 -198 -7z m134
-104 c14 -36 -5 -48 -75 -48 -35 0 -64 4 -64 9 0 4 12 20 26 35 36 35 100 37
113 4z"
                  />
                  {/* <!-- t --> */}
                  <motion.path
                    variants={pathVariant(0.5)}
                    initial="hidden"
                    animate="visible"
                    d="M1841 1986 c-13 -58 -32 -82 -70 -88 -13 -1 -29 -11 -34 -20 -15 -23
6 -68 33 -68 25 0 25 -4 -6 -129 -40 -162 -21 -196 107 -189 60 3 74 7 91 28
12 14 18 35 16 54 -2 26 -8 32 -31 34 -16 2 -30 9 -33 15 -2 7 6 48 18 92 22
77 24 80 54 83 38 4 71 37 80 80 l7 32 -47 0 c-51 0 -51 0 -34 65 16 58 7 65
-78 65 l-61 0 -12 -54z"
                  />
                  {/* <!-- K --> */}
                  <motion.path
                    variants={pathVariant(0.7)}
                    initial="hidden"
                    animate="visible"
                    d="M2189 2103 c-11 -3 -25 -44 -49 -151 -18 -81 -48 -208 -67 -282 -50
-190 -54 -175 44 -175 45 1 85 4 88 7 4 4 17 46 29 95 27 103 51 163 65 163 6
0 11 -1 11 -3 0 -16 85 -245 94 -255 17 -18 186 -6 186 13 0 7 -20 59 -46 116
-25 57 -54 130 -64 162 l-19 59 62 56 c119 109 197 185 197 194 0 4 -46 8
-103 8 l-103 0 -65 -67 c-36 -38 -82 -87 -102 -111 -32 -37 -37 -39 -37 -20 0
13 7 50 15 83 8 33 14 72 15 88 0 27 0 27 -67 26 -38 -1 -75 -3 -84 -6z"
                  />
                  {/* <!-- i --> */}
                  <motion.path
                    variants={pathVariant(0.9)}
                    initial="hidden"
                    animate="visible"
                    d="M2711 1863 c-7 -32 -28 -121 -47 -197 -19 -77 -34 -145 -34 -153 0
-18 133 -19 148 0 13 16 90 294 98 358 l7 49 -80 0 -80 0 -12 -57z"
                  />
                  {/* <!-- i dot --> */}
                  <motion.path
                    variants={pathVariant(0.95)}
                    initial="hidden"
                    animate="visible"
                    d="M2794 2128 c-22 -10 -44 -47 -44 -72 0 -7 9 -25 21 -40 44 -56 149
-19 149 54 0 58 -65 88 -126 58z"
                  />
                  {/* <!-- c --> */}
                  <motion.path
                    variants={pathVariant(1)}
                    initial="hidden"
                    animate="visible"
                    d="M3110 1933 c-148 -26 -235 -125 -235 -265 0 -81 19 -112 90 -147 35
-18 65 -25 109 -25 76 0 120 15 171 58 35 30 38 35 25 50 -7 10 -26 24 -42 32
-26 14 -31 13 -71 -10 -38 -22 -45 -23 -73 -11 -50 21 -59 77 -24 145 32 62
84 78 133 40 32 -25 39 -25 63 1 10 12 34 28 52 36 37 15 39 23 15 45 -41 36
-151 62 -213 51z"
                  />
                  <motion.path
                    variants={pathVariant(1)}
                    initial="hidden"
                    animate="visible"
                    d="M3426 2098 c-3 -13 -35 -147 -71 -298 -55 -229 -64 -276 -52 -285 8
-5 44 -8 80 -7 l67 4 23 74 c12 40 28 74 34 74 7 0 20 -15 29 -32 9 -18 28
-48 42 -67 27 -36 20 -51 -24 -51 -12 0 -34 -4 -50 -10 -16 -5 -78 -19 -139
-29 -137 -25 -341 -67 -419 -87 -32 -8 -167 -37 -300 -64 -132 -27 -324 -68
-426 -90 -156 -35 -485 -103 -955 -199 -369 -75 -546 -52 -682 91 -58 60 -78
120 -78 233 0 119 22 197 91 319 24 43 44 83 44 89 0 18 -65 -50 -194 -203
-147 -174 -177 -216 -246 -340 -129 -235 -154 -440 -72 -593 59 -110 208 -177
392 -177 212 0 503 88 1545 466 344 125 476 174 781 290 177 68 350 132 385
144 35 12 123 43 194 70 224 83 341 107 413 82 97 -33 263 9 312 79 51 70 45
145 -13 172 -18 8 -53 18 -79 22 -51 8 -74 25 -65 50 10 24 55 29 100 11 35
-14 44 -14 61 -2 38 25 67 58 63 69 -11 36 -197 54 -284 29 -84 -25 -125 -85
-108 -160 11 -50 48 -78 121 -92 70 -13 88 -30 60 -58 -14 -14 -24 -15 -88 -4
-67 12 -72 11 -93 -8 -12 -11 -33 -20 -48 -20 -29 0 -54 33 -92 119 -18 41
-18 44 -1 56 44 33 206 179 206 187 0 4 -42 8 -94 8 l-95 0 -88 -85 c-48 -47
-91 -85 -95 -85 -4 0 0 19 8 43 21 58 65 268 58 278 -3 5 -39 9 -79 9 -69 0
-75 -2 -79 -22z"
                  />
                </g>
              </svg>
            </Link>
          </div>

          {/* Flyout menus */}
          <Popover.Group className="hidden lg:ml-8 lg:!block lg:self-stretch">
            <div className="flex h-full space-x-8">
              {navigation.categories.map((category) => (
                <Popover key={category.name} className="flex">
                  {({ open }) => (
                    <>
                      <div className="relative flex">
                        <Popover.Button
                          className={`${open ? "border-indigo-600 text-indigo-600" : "border-transparent text-gray-700 hover:text-gray-800"} relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out`}
                        >
                          {category.name}
                        </Popover.Button>
                      </div>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                          {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                          <div
                            className="absolute inset-0 top-1/2 bg-white shadow"
                            aria-hidden="true"
                          />

                          <div className="relative bg-white">
                            <div className="mx-auto max-w-7xl px-8">
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-4">
                                <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative text-base sm:text-sm"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-6 block font-medium text-gray-900"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                                <div className="row-start-1 gap-x-8 gap-y-10 text-sm">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="text-[18px] font-medium text-gray-900"
                                      >
                                        {section.name}
                                      </p>

                                      <ul
                                        role="list"
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-4 grid grid-cols-2 gap-y-3 pl-2"
                                      >
                                        {section.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <Link
                                              to={`/collections/${item.href}`}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              ))}

              {navigation.pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </Popover.Group>

          <div className="ml-auto flex items-center">
            {/* Sign In | Sign Up */}
            <div className="hidden lg:!flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                Sign in
              </a>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              <a
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                Create account
              </a>
            </div>

            {/* Currency */}
            <div className="lg:ml-8 lg:!flex">
              <Select
                defaultValue={selectedCurrency}
                onValueChange={(value) => handleCurrencyChange(value)}
              >
                <SelectTrigger className="min-w-[5rem] border-0 focus:ring-offset-0 lg:w-[110px]">
                  <SelectValue defaultChecked />
                </SelectTrigger>
                <SelectContent className="min-w-[5rem]">
                  <SelectGroup>
                    {currencies.map((currency) => (
                      <SelectItem
                        key={currency.currencyCode2}
                        value={currency.currencyCode3}
                        className="flex gap-2 text-xs"
                      >
                        <img
                          src={`https://flagcdn.com/w160/${currency.currencyCode2}.webp`}
                          alt={currency.currencyCode3}
                          className={`mr-2 inline-block h-[18px] w-7 ${currency.currencyCode3 === "EUR" ? "brightness-125 contrast-150" : "contrast-105 brightness-105"}`}
                        />
                        <span>{currency.currencyCode3}</span>
                        <span className="sr-only">, change currency</span>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Search */}
            <div className="mx-1 flex lg:ml-6">
              <div className="p-2 text-gray-600 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <HiMagnifyingGlass className="h-6 w-6" aria-hidden="true" />
              </div>
            </div>

            {/* Wishlist */}
            <div className="mx-1 flow-root lg:ml-6">
              <Link to="/wishlist" className="flex items-center p-2">
                <div className="group relative">
                  <HiOutlineHeart
                    strokeWidth={1.5}
                    className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="absolute -right-1 -top-2 rounded-[35%] bg-gray-100 p-0.5 text-sm font-medium leading-none text-gray-600 group-hover:bg-[#e8e8e8] group-hover:text-[#888]">
                    {wishlistTotalItems}
                  </span>
                </div>
                <span className="sr-only">
                  items in wishlist, view favourites
                </span>
              </Link>
            </div>

            {/* Cart */}
            <div className="mx-1 flow-root lg:ml-6">
              <Link to="/cart" className="flex items-center p-2">
                <div className="group relative">
                  <HiOutlineShoppingBag
                    className="h-6 w-6 flex-shrink-0 text-gray-600 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  <span className="absolute -right-1 -top-2 rounded-[35%] bg-gray-100 p-0.5 text-sm font-medium leading-none text-gray-600 group-hover:bg-[#e8e8e8] group-hover:text-[#888]">
                    {cartTotalItems}
                  </span>
                </div>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
