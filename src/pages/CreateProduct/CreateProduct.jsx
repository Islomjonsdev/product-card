import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../api";
import { MdOutlineFileUpload } from "react-icons/md";
import "./CreateProduct.scss";

const CreateProduct = () => {
  const [postProduct, setPostProduct] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const navigate = useNavigate();

  const handlePostProduct = (e) => {
    e.preventDefault();

    const productData = {
      title: title,
      description: description,
      price: price,
    };
    console.log(productData);

    instance
      .post(`/work`, productData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setPostProduct(res?.data);
        navigate("/");
        console.log(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="create_product">
      <form onSubmit={handlePostProduct}>
        <h1>Create Product</h1>
        <div>
          <label htmlFor="file">
            {photo ? (
              <img src={postProduct?.image} alt="" />
            ) : (
              <MdOutlineFileUpload />
            )}
          </label>
          <input
            className="file"
            type="file"
            id="file"
            name="file"
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Enter price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
