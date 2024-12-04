import React from "react";
import { useState, useEffect } from "react";
import { instance } from "../../api";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    instance
      .get("/work")
      .then((res) => {
        setProduct(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="products_cart">
      <div className="container">
          <ProductCard product={product} setProduct={setProduct}/>
      </div>
    </div>
  );
};

export default Products;
