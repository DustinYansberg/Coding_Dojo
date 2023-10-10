import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, []);

  const createProduct = (product) => {
    axios
      .post("http://localhost:8000/api/products", product)
      .then((res) => setProducts([...products, res.data]))
      .catch((err) => {
        console.log(err);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  const removeFromDom = (_id) => {
    axios
      .delete(`http://localhost:8000/api/products/${_id}`)
      .then((res) => {
        console.log(res);
        const filteredProductList = products.filter(
          (product) => product._id !== _id
        );
        setProducts(filteredProductList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <ProductForm
        onSubmitProp={createProduct}
        initialDescription=""
        initialPrice={Number}
        initialTitle=""
      />
      <hr />
      <h1>All Products:</h1>
      {loaded && (
        <ProductList products={products} removeFromDom={removeFromDom} />
      )}
    </div>
  );
};

export default Main;
