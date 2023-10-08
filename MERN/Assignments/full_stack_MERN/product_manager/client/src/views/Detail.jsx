import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

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

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => console.log(res), navigate("/products"))
      .catch((err) => console.log(err));
  };

  const editHandler = () => {
    navigate(`/products/${id}/edit`);
  };

  return (
    <div>
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={editHandler}>Edit</button>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default Detail;
