import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../components/DeleteButton";

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const editHandler = () => {
    navigate(`/products/${id}/edit`);
  };

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={editHandler}>Edit</button>
      <DeleteButton
        successCallback={() =>
          axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => console.log(res), navigate("/products"))
            .catch((err) => console.log(err))
        }
      />
    </div>
  );
};

export default Detail;
