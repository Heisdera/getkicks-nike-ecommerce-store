import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { currentYear } from "@/utils/helpers";
import { PiCopyright } from "react-icons/pi";

import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  const text = "GetKicks".split("");
  const year = currentYear();

  return (
    <footer className="mx-auto w-full max-w-[1750px] bg-gray-700 px-5 text-gray-100">
      <div className="grid grid-cols-3 gap-5 pt-6 tracking-wider lg:grid-cols-5 lg:gap-10">
        {/* Grid 1 */}
        <div className="col-span-2">
          <div className="mb-2 flex cursor-default">
            {text.map((letter, i) => (
              <motion.p
                initial={{ opacity: 0 }}
                // viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.25,
                  delay: i / 5,
                }}
                key={i}
                className="text-[18px] font-medium"
              >
                {letter}
              </motion.p>
            ))}
          </div>

          <p className="text-xs">
            Our mission is to give nike sneaker fans, enthusiasts and the
            curious the chance to buy their favourite products with complete
            confidence. Whether you're looking for a limited edition product,
            the hottest pair at the moment or the perfect piece of streetwear,
            you've come to the right place.
          </p>
        </div>

        {/* Grid 2 */}
        <div className="lg:mx-auto">
          <h4 className="cursor-default pb-3 text-sm font-medium">Pages</h4>
          <div className="flex flex-col gap-2 text-xs">
            <Link to="/collections/nike" className="cursor-pointer">
              Products
            </Link>
            <Link to="/wishlist" className="cursor-pointer">
              WishList
            </Link>
            <Link to="/cart" className="cursor-pointer">
              Cart
            </Link>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="col-span-2 lg:col-span-1">
          <h4 className="cursor-default pb-3 text-sm font-medium">Support</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li className="cursor-pointer">FAQs</li>
            <li className="cursor-pointer">Support Center</li>
            <li className="cursor-pointer">Security</li>
            <li className="cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* Grid 4 */}
        <div className="lg:col-start-4 lg:row-start-1">
          <h4 className="cursor-default pb-3 text-sm font-medium">More Info</h4>
          <ul className="flex flex-col gap-2 text-xs">
            <li className="cursor-pointer">Terms and Conditions</li>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Shipping Policy</li>
            <li className="cursor-pointer">Sitemap</li>
          </ul>
        </div>
      </div>

      <div className="flex gap-2 pb-2 pt-6 xl:pt-1">
        <h4 className="text-sm font-medium">Contact us on:</h4>

        <motion.a
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "tween",
              duration: 0.6,
              delay: 0.3,
              ease: "linear",
            },
          }}
          href="https://twitter.com/Heisdera_Tech"
          target="_blank"
        >
          <FaSquareXTwitter size={22} />
        </motion.a>
        <motion.a
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "tween",
              duration: 0.6,
              delay: 0.5,
              ease: "linear",
            },
          }}
          href="https://github.com/Heisdera"
          target="_blank"
        >
          <FaSquareGithub size={22} />
        </motion.a>
        <motion.a
          initial={{
            opacity: 0,
          }}
          viewport={{ once: true }}
          whileInView={{
            opacity: 1,
            transition: {
              type: "tween",
              duration: 0.6,
              delay: 0.7,
              ease: "linear",
            },
          }}
          href="https://www.linkedin.com/in/raphael-wisdom-heisderatech"
        >
          <FaLinkedin size={22} />
        </motion.a>
      </div>

      <div className="border-t border-[#ccc] py-2 text-center text-xs text-[#ddd]">
        <p>
          <span>Copyright</span>
          <PiCopyright className="mx-0.5 mb-0.5 inline-block" size={20} />
          <span>{year} Nike. All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
