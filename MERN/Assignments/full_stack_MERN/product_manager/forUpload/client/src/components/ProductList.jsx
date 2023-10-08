import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, deleteHandler }) => {
  return (
    <div>
      {products.map((product, index) => (
        <p key={index}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          <button onClick={() => deleteHandler(product._id)}>Delete</button>
          <Link to={`/products/${product._id}/edit`}>Edit</Link>
        </p>
      ))}
    </div>
  );
};

export default ProductList;
