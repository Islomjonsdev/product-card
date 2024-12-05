import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api";
import Loading from "../Loading/Loading";
import ProductCard from "./ProductCard/ProductCard";
import "./Products.scss";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/create-product");
  };
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
        <div className="product_card_btn">
          <button onClick={handleNavigate}>Create product</button>
        </div>
        <ProductCard product={product} setProduct={setProduct} />
      </div>
    </div>
  );
};

export default Products;
