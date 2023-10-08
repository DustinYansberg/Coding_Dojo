import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(Number);
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteHandler = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((res) => console.log(res), navigate("/products"))
      .catch((err) => console.log(err));
  };

  const updateToDB = (e) => {
    e.preventDefault();
    const updateObject = {
      title,
      price,
      description,
    };

    axios
      .patch(`http://localhost:8000/api/products/${id}`, updateObject)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    navigate("/products");
  };

  return (
    <div className="App">
      <br />
      <br />
      <form className="App" onSubmit={updateToDB}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="Price">Price:</label>
        <input
          type="number"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Save" />
        <button onClick={deleteHandler}>Delete</button>
      </form>
    </div>
  );
};

export default Edit;
