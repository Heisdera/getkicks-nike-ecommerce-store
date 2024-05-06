import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  // HiBars3 as Bars3Icon,
  HiOutlineHeart,
} from "react-icons/hi";
import { HiMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { selectCartTotalQTY } from "../features/cart/CartSlice";
import { selectWishlistTotalItems } from "../features/wishlist/WishlistSlice";

const navigation = {
  categories: [
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
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
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
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
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

const Navbar: React.FC = () => {
  const cartTotalItems = useSelector(selectCartTotalQTY);
  const wishlistTotalItems = useSelector(selectWishlistTotalItems);

  return (
    <nav
      aria-label="Top"
      className="mx-auto max-w-[1940px] px-4 sm:px-6 lg:px-8"
    >
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center">
          {/* Logo */}
          <div className="flex lg:ml-0">
            <Link to="/">
              <svg
                aria-hidden="true"
                className="pre-logo-svg"
                focusable="false"
                viewBox="0 0 24 24"
                role="img"
                width="78"
                height="78"
                fill="none"
              >
                <path
                  fill="#222"
                  fillRule="evenodd"
                  d="M21 8.719L7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
                  clipRule="evenodd"
                ></path>
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
                              <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
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
                                <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                  {category.sections.map((section) => (
                                    <div key={section.name}>
                                      <p
                                        id={`${section.name}-heading`}
                                        className="font-medium text-gray-900"
                                      >
                                        {section.name}
                                      </p>
                                      <ul
                                        role="list"
                                        aria-labelledby={`${section.name}-heading`}
                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                        {section.items.map((item) => (
                                          <li key={item.name} className="flex">
                                            <a
                                              href={item.href}
                                              className="hover:text-gray-800"
                                            >
                                              {item.name}
                                            </a>
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
                <a
                  key={page.name}
                  href={page.href}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  {page.name}
                </a>
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
            <div className="hidden lg:ml-8 lg:!flex">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-800"
              >
                <img
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  alt=""
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>

            {/* Search */}
            <div className="mx-1 flex lg:ml-6">
              <a href="#" className="p-2 text-gray-600 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <HiMagnifyingGlass className="h-6 w-6" aria-hidden="true" />
              </a>
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
