import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api";
import style from "./EditProduct.module.scss";

const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the product ID from the URL
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updatePrice, setUpdatePrice] = useState("");

  useEffect(() => {
    instance
      .get(`/work/${id}`)
      .then((res) => {
        const { title, description, price } = res?.data;
        setUpdateTitle(title);
        setUpdateDesc(description);
        setUpdatePrice(price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const dataProduct = {
      title: updateTitle,
      description: updateDesc,
      price: updatePrice,
    };

    instance
      .put(`/work/${id}`, dataProduct, {
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

  return (
    <div className={style.edit_product}>
      <form onSubmit={handleUpdate}>
        <h1>Edit Product</h1>
        <div>
          <label htmlFor="file"></label>
          <input className="file" type="file" id="file" name="file" />
        </div>
        <div>
          <label htmlFor="">Enter title</label>
          <input
            type="text"
            value={updateTitle}
            onChange={(e) => setUpdateTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter description</label>
          <input
            type="text"
            value={updateDesc}
            onChange={(e) => setUpdateDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter price</label>
          <input
            type="number"
            value={updatePrice}
            onChange={(e) => setUpdatePrice(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;
