import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react"
// import { Toaster } from "react-hot-toast";

import { queryClient } from "@/hooks/usePrefetchData";
import router from "@/Routes/Routes";
import Store from "@/store/store";

import "@/index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {/* <Toaster position="top-center" /> */}
        <ToastContainer
          position="top-center"
          autoClose={800}
          hideProgressBar
          transition={Slide}
          draggablePercent={30}
          closeButton={false}
        />
        <RouterProvider router={router} />
        <Analytics />
        <SpeedInsights />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
