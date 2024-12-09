import React from "react";
import { useSelector } from "react-redux";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./Like.scss";

const Like = () => {
  const likeProducts = useSelector((state) => state?.joinedCart || []);
  const [localCart, setLocalCart] = useLocalStorage("joinedCart", []);

  // Sync Redux state with localStorage when products change
  React.useEffect(() => {
    if (likeProducts?.length > 0) {
      setLocalCart(likeProducts);
    }
  }, [likeProducts, setLocalCart]);

  return (
    <div className="like">
      <div className="container">
        {localCart?.length > 0 ? (
          localCart.map((product) => (
            <div key={product.id} className="like_blog">
              <img src={product?.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product?.description}</p>
              <span>Price: ${product.price}</span>
            </div>
          ))
        ) : (
          <p>No liked products found.</p>
        )}
      </div>
    </div>
  );
};

export default Like;
