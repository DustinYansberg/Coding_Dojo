import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const deleteHandler = (_id) => {
    console.log(_id);
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log(res);
        const filteredProductList = products.filter(
          (product) => product._id != _id
        );
        setProducts(filteredProductList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ProductForm />
      <hr />
      <h1>All Products:</h1>
      {/* OLD CODE
      {loaded &&
        products.map((product) => (
          <ProductListObject
            key={product._id}
            deleteHandler={deleteHandler}
            product={product}
          />
        ))} */}
      <hr />
      {loaded && (
        <ProductList products={products} deleteHandler={deleteHandler} />
      )}
    </div>
  );
};

export default Main;
