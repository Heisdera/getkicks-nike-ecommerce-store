import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./index.css";

import { Provider } from "react-redux";
import Store from "./store/store";
// import { Toaster } from "react-hot-toast";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
});

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
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
