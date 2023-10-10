import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";

const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => console.log(res), navigate("/products"))
      .catch((err) => console.log(err));
  };

  const updateToDB = (updateObject) => {
    axios
      .patch(`http://localhost:8000/api/products/${id}`, updateObject)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/products");
  };

  return (
    <>
      {loaded && (
        <div className="App">
          <ProductForm
            onSubmitProp={updateToDB}
            initialTitle={product.title}
            initialDescription={product.description}
            initialPrice={product.price}
          />
          <DeleteButton successCallback={deleteHandler} />
        </div>
      )}
    </>
  );
};

export default Edit;
