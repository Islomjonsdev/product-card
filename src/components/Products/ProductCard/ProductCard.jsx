import { Link, useNavigate } from "react-router-dom";
import { IoHeartOutline } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import "./ProductCard.scss";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import EditButton from "../../ui/EditButton/EditButton";

const ProductCard = ({ product, setProduct }) => {
  const navigate = useNavigate()
  const [like, setLike] = useState(() => {
    const storedLikes = localStorage.getItem("likedCards");
    return storedLikes ? JSON.parse(storedLikes) : [];
  });

  useEffect(() => {
    localStorage.setItem("likedCards", JSON.stringify(like));
  }, [like]);
  const dispatch = useDispatch();

  const handleLikedCards = (_id, card) => {
    let cache = like.find((el) => el === _id);
    if (cache) {
      setLike(like.filter((el) => el !== _id));
    } else {
      setLike([...like, _id]);
    }

    const likedProduct = product.find((item) => item.id === _id);

    const action = {
      type: "add_to_like",
      data: likedProduct,
    };
    dispatch(action);
  };

  return (
    <>
      <div className="card">
        <ul className="card_list">
          {product?.map((card) => {
            const { id, image, title, description, price } = card;
            return (
              <li key={id}>
                <img src={image} alt="" />
                <div className="card_like_btn">
                  <button onClick={() => handleLikedCards(id, card)}>
                    {!like?.includes(id) ? <IoHeartOutline /> : <FcLike />}
                  </button>
                </div>
                <div className="items">
                  <Link to={`/product/${id}`}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <span>{price}</span>
                  </Link>
                  <EditButton title={"Edit"} onClick={() => navigate(`/edit-product/${id}`)}/>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ProductCard;
