import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../api";

const useEditProduct = (id) => {
  const [loading, setLoading] = useState(false);
  const [ error, setError ] = useState(null)
  const [editProduct, setEditProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    setLoading(true)
    instance
      .get(`/work/${id}`)
      .then((res) => {
        const { title, description, price } = res?.data || {};
        if (title || description || price) {
          setEditProduct({ title, description, price });
        }
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setError(err)
      });
      setLoading(true)
  }, [id]);

  const updateProduct = (data) => {
    setLoading(true);
    instance
      .put(`/work/${id}`, data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res?.data);
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        setError(err)
      });
  };
  return {
    editProduct,
    setEditProduct,
    updateProduct,
    loading,
    error
  };
};

export default useEditProduct;
