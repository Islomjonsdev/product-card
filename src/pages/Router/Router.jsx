import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Cart from "../Cart/Cart";
import CreateProduct from "../CreateProduct/CreateProduct";
import Home from "../Home/Home";
import Like from "../Like/Like";
import ProductId from "../ProductId/ProductId";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/product/:id",
        element: <ProductId />,
      },
      {
        path: "cart",
        element: <Cart />
      },
      {
        path: "like",
        element: <Like />
      }
    ],
  },
  {
    path: "/create-product",
    element: <CreateProduct />
  }
]);
