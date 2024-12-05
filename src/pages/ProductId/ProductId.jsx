import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { instance } from "../../api";
import Loading from "../../components/Loading/Loading";
import "./ProductId.scss";

const ProductId = () => {
  const { id } = useParams();
  const [getProductId, setGetProductId] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    instance(`/work/${id}`)
      .then((res) => {
        console.log(res?.data);
        setGetProductId(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="product_id">
      <div className="container">
        <div className="product_id_list">
          {getProductId !== null && getProductId ? (
            <div>
              <h2>{getProductId?.title}</h2>
              <img src={getProductId?.image} alt="" />
              <p>{getProductId?.description}</p>
              <p>{getProductId?.price}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="product_id_btn">
          <button onClick={() => navigate("/")}>Back to main page</button>
        </div>
      </div>
    </div>
  );
};

export default ProductId;
