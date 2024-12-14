import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import useEditProduct from "../../hooks/useEditProduct";
import style from "./EditProduct.module.scss";

const EditProduct = () => {
  const { id } = useParams();
  const { editProduct, setEditProduct, updateProduct, loading } =
    useEditProduct(id);
  console.log(editProduct);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEditProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(editProduct);
  };

  if (loading) return <Loading />;

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
            name="title"
            value={editProduct.title}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="">Enter description</label>
          <input
            type="text"
            name="description"
            value={editProduct.description}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <label htmlFor="">Enter price</label>
          <input
            type="number"
            name="price"
            value={editProduct.price}
            onChange={handleChangeInput}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditProduct;

// const [updateTitle, setUpdateTitle] = useState("");
// const [updateDesc, setUpdateDesc] = useState("");
// const [updatePrice, setUpdatePrice] = useState("");

// useEffect(() => {
//   instance
//     .get(`/work/${id}`)
//     .then((res) => {
//       const { title, description, price } = res?.data;
//       setUpdateTitle(title);
//       setUpdateDesc(description);
//       setUpdatePrice(price);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, [id]);

// const handleUpdate = (e) => {
//   e.preventDefault();

//   const dataProduct = {
//     title: updateTitle,
//     description: updateDesc,
//     price: updatePrice,
//   };

//   instance
//     .put(`/work/${id}`, dataProduct, {
//       headers: { "Content-Type": "application/json" },
//     })
//     .then((res) => {
//       console.log(res?.data);
//       navigate("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
