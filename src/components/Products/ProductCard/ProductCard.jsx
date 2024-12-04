import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";
import { IoHeartOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import "./ProductCard.scss";
import { useState } from "react";
import Modal from "../../ui/Modal/Modal";

const ProductCard = ({ product, setProduct }) => {
  const [openModal, setOpenModal] = useState(false);
  const [like, setLike] = useState([]);
  console.log(like);
  
  const handleLike = (_id, product) => {
    let cache = like.find((el) => el === _id)
    if (cache) {
        setLike(like.filter((el) => el == !_id))
    }else{
        setLike([...like, _id])
    }
  };
  return (
    <>
      <div className="card">
        <div className="card_btn">
          <Button title="Create"  />
        </div>
        <ul className="card_list">
          {product?.map((card) => {
            const { id, image, title, description, price } = card;
            return (
              <li key={id}>
                <img src={image} alt="" />
                <div className="card_like_btn">
                  <button onClick={() => handleLike(id, product)}>
                      {!like?.includes(id) ? <IoHeartOutline /> : <FcLike />}
                  </button>
                </div>
                <Link to={`/${id}`}>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <span>{price}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductCard;
