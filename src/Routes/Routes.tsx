import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import CartPage from "../pages/CartPage";
import WishlistPage from "../pages/WishlistPage";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Navigate to="/collections/nike" replace /> },
      {
        path: "/collections/:collection",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
    ],
  },
]);

export default router;
