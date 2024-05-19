import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  const location = useLocation();
  // console.log(location);
  const isCartPage = location.pathname === "/cart";

  return (
    <div className="bg-white">
      <header className="sticky left-0 right-0 top-0 z-50 bg-white">
        <p className="flex h-8 items-center justify-center gap-1 bg-indigo-600 px-3 text-xs font-medium text-white min-[360px]:h-10 min-[360px]:text-sm sm:px-6 lg:px-8">
          <span>Get free delivery on every order</span>
        </p>

        <Navbar />
      </header>

      <Outlet />

      {!isCartPage && <Footer />}
    </div>
  );
};

export default AppLayout;
