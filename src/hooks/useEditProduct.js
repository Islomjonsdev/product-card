import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api";

const useEditProduct = (id) => {
  const [editProduct, setEditProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;

    instance
      .get(`/work/${id}`)
      .then((res) => {
        const { title, description, price } = res?.data || {};
        if (title || description || price) {
          setEditProduct({ title, description, price });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateProduct = (data) => {
    instance
      .put(`/work/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res?.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    editProduct,
    setEditProduct,
    updateProduct,
  };
};

export default useEditProduct;
