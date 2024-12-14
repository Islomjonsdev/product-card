import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import CreateProduct from "../CreateProduct/CreateProduct";
import EditProduct from "../EditProduct/EditProduct";
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
        path: "like",
        element: <Like />
      }
    ],
  },
  {
    path: "/create-product",
    element: <CreateProduct />
  },
  {
    path: "/edit-product/:id",
    element: <EditProduct />
  }
]);
