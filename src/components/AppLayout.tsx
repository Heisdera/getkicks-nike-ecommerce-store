import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AppLayout: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="sticky left-0 right-0 top-0 z-50 bg-white">
        {/* <div>
          <p className="flex h-8 items-center justify-center bg-indigo-600 px-4 text-xs font-medium text-white min-[360px]:h-10 min-[360px]:text-sm sm:px-6 lg:px-8">
            Get free delivery on orders over $100
            <HiXMark strokeWidth={1.5} className="ml-3 cursor-pointer" />
          </p>
        </div> */}

        <p className="mx-28 mt-1 flex h-10 items-center justify-center border-b font-medium text-gray-700 min-[360px]:h-14 min-[360px]:text-2xl">
          GetKicks
        </p>

        <Navbar />
      </header>

      <Outlet />

      <Footer />
    </div>
  );
};

export default AppLayout;
